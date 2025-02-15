const express=require('express');
const authRoutes=require('./routes/authRoutes');
const app=express();
const port=5000;


// app.use(authRoutes);
app.use("/api",authRoutes);
app.use("/api/log",authRoutes);


app.get('/',(req,res)=>{
    res.send('<h1 style="color:orange">Welcome to Home Page</h1>')
})

app.listen(port,()=>{
    console.log(`The server is running on ${port}`)
})