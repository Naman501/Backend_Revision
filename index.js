const express=require("express")
const app= express();
const PORT =process.env.PORT || 5000


app.get("/api/v1/bootcamps",(req,res)=>{

    const bootcamps=[
        {id:1,name:"Bootcamp One"},
        {id:2,name:"Bootcamp Two"},
        {id:3,name:"Bootcamp Three"},
        {id:4,name:"Bootcamp Four"},
    ]

    res.status(200).json({
        success:true,
        msg:"Show all bootcamps",
        Data:bootcamps
    })
})

app.get("/api/v1/languages",(req,res)=>{
    const languages=[
        {id:1,name:"Python"},
        {id:2,name:"Java"},
        {id:3,name:"JavaScript"},
        {id:4,name:"C++"},
    ]

    res.status(200).json({
        success:true,
        msg:"Show all languages",
        Data:languages
    })
})


app.get("/",(req,res)=>{
    res.send("<h1>HOME</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})