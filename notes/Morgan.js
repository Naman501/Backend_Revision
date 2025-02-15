const express = require('express');
const app =express();
const port=5000;
const morgan = require('morgan');

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.use(morgan('dev'));

app.get('/getProducts',(req,res)=>{
   
   const productsArray=[
         {
              id:1,
              name:'Product 1'
         },
         {
              id:2,
              name:'Product 2'
         },
         {
              id:3,
              name:'Product 3'
         }
   ];
   
    res.status(269).json(productsArray);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}` );
});