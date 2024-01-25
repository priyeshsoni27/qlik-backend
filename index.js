const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors');


const app=express();
const port =3001;

app.use(cors());
app.use(bodyParser.json());


app.post('/add',(req,res)=>{
    const result=req.body.input1 + req.body.input2;
    res.json({result})
})
app.post('/substract',(req,res)=>{
    const result=req.body.input1 - req.body.input2;
    res.json({result})

})
app.post('/multiple',(req,res)=>{
    const result=req.body.input1 * req.body.input2;
    res.json({result})

})
app.post('/divide',(req,res)=>{
    if(req.body.input2===0){
        res.status(400).json({error:'Connot perform divide by zero'});
    }
    else{
        const result=req.body.input1 / req.body.input2;
        res.json({result})
  
    }
})

app.listen(port, () => console.log(`Example app is listening on port ${port}.`));



app.use(cors());