const express=require("express")
const app= express();
const port=5000
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Hello, World!")
})

app.post("/",(req,res)=>{
    const {name}=req.body;
    if(!name){
        res.status(400).send("Name is required")}

    res.status(201).send(`User ${name} created`)
})

module.exports=app