const { Module } = require('module');

async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:Mysql@127.0.01:3306/Projeto_neon");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;

}

connect();

async function selectLogin() {
    const conn = await connect();
    return await conn.query('SELECT * FROM login;');

}

module.exports = {selectLogin}