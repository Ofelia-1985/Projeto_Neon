const { Module } = require('module');

async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:Ma070412@localhost:3306/projeto_neon");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;

}

connect();

async function selectLogin() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM login;')
    return await rows;

}

module.exports = {selectLogin}