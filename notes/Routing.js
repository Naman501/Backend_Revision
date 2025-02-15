const express = require('express');
const app=express();
const port =5000;

app.listen(port,()=>{
    console.log(`The server is running on ${port}`)
})

// Routing 
// HTTP Methods => GET, POST, PUT, DELETE [CRUD Operations]


//get request
app.get('/',(req,res)=>{
   res.send('<h1 style="color:blue">Welcome to Home Page</h1>')
})

//post request

app.post('/submit',(req,res)=>{ 
    res.send('The form is submitted.')
 })

 //put request

 app.put("/update",(Ramesh,Suresh)=>{
Suresh.send('The data is updated.')
 })

    //delete request
 app.delete("/remove",(Naman,Mittal)=>{
Mittal.send('The data is removed.')
 })

 // Route Parameters

 app.get('/product/:id/:name', (req, res) => {
    console.log(`Fetching details for user ID: ${req.params.id} & Name: ${req.params.name}`);
    res.send(`User ID: ${req.params.id} & Name: ${req.params.name}`);
}); 


// Query String Parameters
app.get('/search', (req, res) => {
    // I have to grab the title form the query.
    const { title } = req.query;
    console.log(`You searched for : ${title}`);  
     res.send(`You searched for : ${title}`);
});

//Query bakchodi 1
app.get('/drone', (req, res) => {
    const { BHOSDIKA } = req.query;
    console.log(`You searched for : ${BHOSDIKA}`);  
     res.send(`You searched for : ${BHOSDIKA}`);
});

// Query bakchodi 2
app.get('/faculty', (req, res) => {
    const { BHOSDIKA , MADARCHOD } = req.query;
    console.log(`You searched for : ${BHOSDIKA} and ${MADARCHOD}`);  
     res.send(`You searched for : ${BHOSDIKA} and ${MADARCHOD}`);
});

