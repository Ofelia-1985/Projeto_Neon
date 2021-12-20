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

async function updateLogin(login){
    const conn = await connect();
    const sql = 'UPDATE login SET EMAIL=?, SENHA=?, NOME=? WHERE id_cliente=?;';
    const values = [login.EMAIL, login.SENHA, login.NOME, login.id_cliente];
    console.log(login.EMAIL)
    return await conn.query(sql, values);
}

async function deleteLogin(ID_CLIENTE){
    const conn = await connect();
    const sql = 'DELETE FROM login WHERE ID_CLIENTE=?;';
    return await conn.query(sql, ID_CLIENTE);
}
module.exports = {selectLogin, insertLogin, updateLogin, deleteLogin}