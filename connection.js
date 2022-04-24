const mysql=require("mysql");

var Connection=mysql.createConnection({
port:3306,
host:"localhost",
user: "root",
password: "",
database:"restapiswithnode"


});
Connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports=Connection