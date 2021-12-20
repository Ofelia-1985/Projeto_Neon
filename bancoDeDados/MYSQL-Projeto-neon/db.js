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

async function selectLogin(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM login;');
    return rows;
}

async function insertLogin(login){
    const conn = await connect();
    const sql = 'INSERT INTO login(ID_CLIENTE, EMAIL, SENHA, NOME) VALUES (?,?,?,?);';
    const values = [login.ID_CLIENTE, login.EMAIL, login.SENHA, login.NOME];
    return await conn.query(sql, values);
}

async function updateLogin(ID_CLIENTE, LOGIN){
    const conn = await connect();
    const sql = 'UPDATE login SET ID_CLIENTE=?, EMAIL=?, SENHA=? NOME=? WHERE ID_CLIENTE=?';
    const values = [ID_CLIENTE, login.EMAIL, login.SENHA, login.NOME];
    return await conn.query(sql, values);
}

async function deleteLogin(ID_CLIENTE){
    const conn = await connect();
    const sql = 'DELETE FROM login WHERE ID_CLIENTE=?;';
    return await conn.query(sql, [id]);
}
module.exports = {selectLogin, insertLogin, updateLogin, deleteLogin}