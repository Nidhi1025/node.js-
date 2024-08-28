const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "UOOFF9i4RGwCQKYJ",
    database: "signup"
})

db.connect(err => {
    if (err) {
      console.error("Database connection failed:", err.stack);
      return;
    }
    console.log("Connected to the database.");
  });

app.post('/login', (req, res)=> {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data)=>{
        if(err)
            return res.json("Login failed");
        return res.json(data);
    })
})


app.listen(8081,()=>{
    console.log("server created");
})