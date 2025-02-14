// Understanding Middlewares in Express.js

//app.use() is a method in express.js that is used to include the middleware function. Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware. Middleware functions can perform the following tasks:
// 1. Execute any code.
// 2. Make changes to the request and the response objects.
// 3. End the request-response cycle.
// 4. Call the next middleware function in the stack.
// 5. If the current middleware function ends the request-response cycle, it must not call next
 


const express = require("express");
const app = express();
const port = 3000;


const middlewareFunction =(res,req,next)=>{
    console.log("This is a middleware function");
    next();
}

app.use(middlewareFunction);



const verifyUser =(req,res,next)=>{
    console.log("User is verified.");
    next();
}

app.use("/user" , verifyUser, (req,res)=>{
    res.send("This is a user route");
 })

 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  // Built in Middleware

//   app.use(
//   express.json()        
//   )
  
//   app.use(
// express.urlencoded({extended:true})
// )
// app.use(
//     express.static("public")
// )