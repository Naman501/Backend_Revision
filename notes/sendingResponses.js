const productArray = [
    {
        id: 1,
        name: "Laptop",
        price: 1000
    },
    {
        id: 2,
        name: "Mobile",
        price: 2000
    },
    {
        id: 3,
        name: "Earphone",
        price: 3000
    }
]

app.get('/api/products',(req,res)=>{
    // res.send(productArray)
    res.status(206).json(productArray)
})
