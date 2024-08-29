const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
    host: 'dn-db',
    user: 'root',
    password: 'root',
    database: 'dn-db'
}

const createConnection = () => mysql.createConnection(config);
app.use(express.json());

app.get('/', (req, res) => {
    const connection = createConnection();

    const sqlCreateTable = `
        CREATE TABLE IF NOT EXISTS people (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )
    `;

    connection.query(sqlCreateTable, (error) => {
        if (error) {
            connection.end();
            return res.status(500).json({ error: 'Erro ao criar a tabela' });
        }

        const sqlInsert = `INSERT INTO people (name) VALUES ('Teste 3')`;
        connection.query(sqlInsert, (error) => {
            if (error) {
                connection.end();
                return res.status(500).json({ error: 'Erro ao inserir o nome' });
            }

            const sqlSelect = 'SELECT * FROM people';
            connection.query(sqlSelect, (error, results) => {
                connection.end();
                if (error) {
                    return res.status(500).json({ error: 'Erro ao listar os nomes' });
                }

                const response = {
                    message: 'Nome inserido com sucesso',
                    data: results
                };
                res.json(response);
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Rodando na porta ${ port }`)
})