const express = require('express');
const mysql = require('mysql');
//create connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'studyh'

});

//Create connection

db.connect(err=>{
    if(err){
        console.log('mysql not connected');
    }else
    console.log('mysql connected');
});

const app = express();

app.listen('3000',()=>{
    console.log('server started at port 3000');
})