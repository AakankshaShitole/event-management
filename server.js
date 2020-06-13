
/*import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';*/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//const mysql = require('mysql');

const app = express();

var corsOptions = {
    origin: "http://192.168.2.7:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.urlencoded({extended:true}))

const db = require('./app/models');
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});


app.get("/", (req,res) => {
    res.json({ message: 'welcome'})
})

//routes
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)

const PORT = process.env.PORT || 4545;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
/*
initial() function helps us to create 3 rows in database.
In development, you may need to drop existing tables and re-sync database. So you can use force: true as code above.

For production, just insert these rows manually and use sync() without parameters to avoid dropping data:
*/
/*var con = mysql.createConnection({

    host:'localhost',
    //port:'8889',
    user:'root',
    password:'kansha',
    database:'event',
});

var server= app.listen(4545, function(){
    var host=server.address().address
    var port=server.address().port
    console.log(port);
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected")
})

app.get('/users', function(req,res){
    con.query('select * from users', function(error, rows,fields){
        if(error) console.log(error)
        else 
        {
            console.log(rows);
            res.send(rows);
        }
    })
})*/