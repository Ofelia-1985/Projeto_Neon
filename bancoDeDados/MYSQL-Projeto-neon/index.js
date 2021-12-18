(async () => {
    const db = require("./db");
    console.log('Começou!');
    console.log('SELECT * FROM login');
    const login = await db.selectLogin();
    console.log(login);
}) ();