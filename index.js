const express=require("express")
const app=express();
const port =5000;


app.use(express.json());

const products=[{
    id:1,
    name:"laptop",
    price:50000

},
{
    id:2,
    name:"mobile",
    price:30000
},
{
    id:3,
    name:"camera",
    price:10000
}
,
{
    id:33,
    name:"Black Dog",
    price:1900
}]

// Fetch all the products
app.get("/api/products", async (req,res)=>{
    await res.status(256).json({
        Message:"All products",
        data:products
    });
})

// Fetch a single product

app.get("/api/products/:id", async (req,res)=>{
     const {id} = req.params;
     const product = products.find((product)=>product.id === Number(id));
     if(!product){
         return res
         .status(404)
         .json({
         Message:`Product not found with this id:  ${id}`
         });
     }
     return res.status(200).json({
        Message:"Product found",
        Aukaat:product  
    });
    })


// Update A Product

app.put("/api/products/:id", async (req,res)=>{
    const {id}= req.params;
    const {name,price}=req.body;
    const product = products.find((product)=>product.id === Number(id));
    if(!product){
        return res
        .status(404)
        .json({
        Message:`Product not found with id:  ${id}`
        });
    }

    if(name){
        product.name=name;
    }   
    if(price){
        product.price=price;
    }
    
    return res.status(200).json({
       Message:"Product updated",
       data:product});
}
)


// Delete A Product
app.delete("/api/products/:id", async (req,res)=>{
    const {id}= req.params;
    const product = products.find((product)=>product.id === Number(id));
    
    return res.status(200).json({
       Message:"Product_Deleted",
       data:product
    });
}
)


// Create A Product
app.post("/api/create-product", (req, res) => {
    const { id, name, price } = req.body;
  
    const newProduct = { id, name, price };
  
    products.push(newProduct);
  
    return res.status(201).json({
      success: true,
      data: newProduct,
      message: "Product added successfully",
    });
  });

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})