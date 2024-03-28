
const express= require('express')
const mysql= require('mysql')
const cors=require('cors')

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection(
  {
    host : "localhost",
    user: "root",
    password: "12345",
    database : "Cars"
  });

app.post('/cars',(req, res) =>{
  const sql="INSERT INTO user (`Username`, `Email`, `Password` , `ConfirmPassword`) Values (?)" ;
  const user = [
    req.body.Username,
    req.body.Email,
    req.body.Password,
    req.body.ConfirmPassword,
  ]

  db.query(sql, [user], (err,data) =>{
    if(err) return res.json(err);
    return res.json(data);
  })
})

app.listen(8081,()=>{
console.log("Listening on Server :" +8081);
  });