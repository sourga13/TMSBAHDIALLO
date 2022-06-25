//Connexion au serveur 
const mysql = require("mysql");
console.log(mysql);

// Creer la connexion 
const mysqlConnexion = mysql.createConnection({
    host: "localhost",
    database:"db_tmsbahdiallo",
    user: "root",
    password:"224root"
})

console.log(mysqlConnexion);

// Etablir la connexion
mysqlConnexion.connect((err)=>{
    if(err){
        console.error(`error connecting:`+err.stack);
        return;
    }
    else {

        console.log(`Connected to database succefully:`+mysqlConnexion)

    }
         
})

module.exports = mysqlConnexion


