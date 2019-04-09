var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    pass: "",
    database: "practiceseq"
});

con.connect(function(err) {
    if(err) throw err;
    console.log(`Connected to ${database}`);
})