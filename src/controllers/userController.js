 const { dbconnection } = require("../index")
const model = require("../models/userModel")

dbconnection()

 exports.getUSER = ()=>{

    const sql =" SELECT * FROM `user`"

        dbconnection.query(sql, (err,result)=>{
           if(err) throw err;
             console.log("sucessfully",result);
          })

 }
