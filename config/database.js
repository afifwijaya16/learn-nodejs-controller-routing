const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_nodejs_crud'
});

connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
});

module.exports = connection;