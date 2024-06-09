const express = require("express");
const app = express();
const port = 4200;
const config = {
    host: 'db',
    user: 'root',
    password: null,
    database: 'nodedb'
}

app.get('/', (req, res) => {

    // const mysql = require('mysql');
    //
    // const connection = mysql.createConnection(config);
    // const sql = `INSERT INTO people(name) values('Matheus')`;
    // connection.query(sql);
    // connection.end();

    res.send(`<h1>Full Cycle Rocks!</h1>`);
})

app.listen(port,() => {
    console.log(`running on port ${port}`)
})