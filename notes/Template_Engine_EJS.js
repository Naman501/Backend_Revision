const express= require("express")
const expressLayouts=require('express-ejs-layouts')
const app=express()
const port=5000

app.set('view engine','ejs')
app.set('views','./views')
app.use(expressLayouts)
app.set('layout','layout')


app.get('/',(req,res)=>{
    res.render('index',{
        title:'Home',
        message:'My name is Naman.'

    },
   )
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact',{
        title:'Contact'
    })
})

app.listen(port,()=>{
    console.log(`The server is running on ${port}`)
})