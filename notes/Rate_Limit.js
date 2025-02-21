const express = require('express');
const app=express()
const port = 5000;
const rateLimit = require("express-rate-limit");
 


const limiter = rateLimit({
    windowMs: 20 * 1000, // 20 seconds
    max: 5, // 5 requests,
    message: "You have exceeded the 5 requests in 20 seconds limit!",
    // headers: true
  });

  app.use(limiter);


app.get("/",(res,req)=>{
    req.send("<h2>Hello Bitch </h2>")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})

// app.use("/",(req,res)=>{
//     res.send('Hello World!')})

// app.get("/api/secureData",(req,res)=>{
//         res.json({
//             message:"This is a secure data",

//             data:{
//                 id:1,
//                 name:"John Doe",
//                 email:"johnny@doe.com"
//             }
//         })
// })