FROM golang:1.17-alpine

WORKDIR /usr/src/app

COPY . .

RUN go build -v -o /usr/local/bin/app .

ENTRYPOINT ["app"]

