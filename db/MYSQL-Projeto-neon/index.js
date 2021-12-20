(async () => {
    const db = require("./db");
    console.log('Começou!');

    console.log('INSERT INTO login');
    const result = await db.insertLogin({ID_CLIENTE: 8, EMAIL: "VitorVieira@email.com", SENHA: "635241", NOME: "Vitor Vieira" });
    console.log(result);

    console.log('SELECT * FROM login');
    const login = await db.selectLogin();
    console.log(login);
    
    console.log('UPDATE login');
    const result2 = await db.updateLogin(3, {EMAIL: "josésantos@email.com", SENHA: "635241", NOME: "José Santos"});
    console.log(result2);

    console.log('DELETE FROM login');
    const result3 = await db.deleteLogin(4);
    console.log(result3);
})();