const express = require('express')
const bodyParser = require("body-parser")
const mysql = require("mysql")
const { ExpressHandlebars } = require("express-handlebars")
const dotenv  =require("dotenv")
const router = require("./routes/userRoute")
const app = express()
const port = process.env.PORT || 3000

dotenv.config({path:"./src/config/config.env"})
app.use(bodyParser.json())

// console.log("host is:",process.env.HOST);

 app.use("/",router)

app.listen(port,()=>console.log(`connected with port: ${3000}`));

// Create the connection pool. The pool-specific settings are the defaults
const dbconnection = ()=>{

    const connection = mysql.createConnection({
        host:process.env.HOST,
        user:process.env.USER ,
        password:process.env.PASSWORD,
        database:process.env.DB
      });
      
       connection.connect( (err) =>{
          if(!err){
              console.log("connected with mysqlDB");
          }
          else{
              console.log("connection faild");
          }

        })

}


// create database:

    // connection.query(`CREATE DATABASE mysqlfirst2`,(err,result) =>{
    //     if(err) throw err;
    //     console.log("Database connected");
    // })

//create table:

    // var sql = "CREATE TABLE persontwo (firstname VARCHAR (255), lastname VARCHAR (255), salary INT (11) )";

 //Insert data in table:

    //   var  sql =  "INSERT INTO `person`(`id`, `fullname`, `address`) VALUES ('[1]','ajay','raigarh')"

    //const sql = " INSERT INTO `person` (`id`, `fullname`, `address`) VALUES ?"
    //const value = [
      //  ['','ajay','raigarh'],  ['','ajay','raigarh'],  ['[6]','ajay','raigarh'],  ['[1]','vijay','raigarh'],
    //]

    
//select data:

//const sql =" SELECT * FROM `person`"  //all values
//const sql = "SELECT id,fullname  FROM `person`"
// const sql = "SELECT * FROM `person` WHERE id='20' "
//const sql = "SELECT * FROM `person` WHERE id like '1' "

// const name = 'ajay'
// const addr = 'raigarh'
// const sql = "SELECT * FROM `person` WHERE fullname= "  +mysql.escape(name,addr)

// const name = 'ajay'
// const addr = 'raigarh'

// const sql = "SELECT * FROM `person` WHERE fullname= ? OR id = ?" 
// const sql = "SELECT *FROM person ORDER BY fullname"
// const sql = "SELECT *FROM person ORDER BY FULLNAME DESC"

//----update data----:
// const sql = "UPDATE PERSON set id= '100' WHERE id = '20'"


//DELETE DATA:
//const sql = "DELETE  FROM PERSON WHERE id = '40'"

//Drop Data:
//const sql = "DROP TABLE PERSONTWO"

//LIMIT DATA:
 
//const sql = `CREATE TABLE personthree (salary INT (11),username VARCHAR (255),rollno VARCHAR (255))`;
//const sql = " INSERT INTO person ('id','name','address') VALUES(1,'ajay','raigarh')"
//const sql = `CREATE DATABASE nodemysql2`
// const  sql =  "INSERT INTO `person`(`id`, `name`, `address`) VALUES ?"
// const value = [
//     [2,'akku','korba'],[3,'amit','bhilai'],[6,'akku','korba'],[4,'shri','odisha'],[9,'rajesh','hyd'],
// 
// const nam='akku'
// const add='raipur'
// const sql = "SELECT * FROM person where name =? or address =?"

//const sql = "SELECT *FROM person ORDER BY id DESC"
//const sql = "SELECT * FROM person LIMIT 2 OFFSET 9"

// const sql = "UPDATE person set name ='suraj' WHERE name ='akku' "

// const sql =" SELECT * FROM `user`"
//       connection.query(sql, (err,result)=>{
//        if(err) throw err;
//         console.log("sucessfully",result);
//      })


    
//})

module.exports = {dbconnection}