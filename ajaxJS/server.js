const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const urlencodedParser = bodyParser.urlencoded({extended:false});
const app = express();

const db = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'NodeJS'
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/ajax1.html');
})

db.connect((err)=>{
    if(err) throw err;
    else console.log('Database connected');
})

app.post('/getData1',urlencodedParser,(req,res)=>{
    // console.log(req.body.uid);
    db.query(`SELECT * from NodeJS where sem=${req.body.sem}`,(error,result)=>{
        
        if(error)
        throw error;

        else{ 

            console.log(result)
            if(result === null || result === undefined || result =='' || result === [])
            {
                result = 'NA'
            }

        res.send(JSON.stringify(result));}
    })

    

})

app.listen(3000);