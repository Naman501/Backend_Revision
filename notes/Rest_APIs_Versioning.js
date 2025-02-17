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

// Versioning
app.get("/api/v1/products", async (req,res)=>{

 const newnew = [
    {
        id:1,
        name:"Kurta",
        price:50000
    
    },
    {
        id:2,
        name:"Glove",
        price:30000
    },
    {
        id:3,
        name:"Helmet",
        price:10000
    }
    ,
    {
        id:4,
        name:"Suit",
        price:190000
    }]

    await res.status(256).json({
        Message:"All products",
        data: newnew
    });
})

// Version 2
app.get("/api/v2/products", async (req,res)=>{

    const newnew2 = [
       {
           id:1,
           name:"Banana",
           price:50000
       
       },
       {
           id:2,
           name:"Jackfruit",
           price:30000
       },
       {
           id:3,
           name:"Orange",
           price:10000
       }
       ,
       {
           id:4,
           name:"Cheeku",
           price:190000
       }]
   
       await res.status(256).json({
           Message:"All products",
           data: newnew2
       });
   })
   

//Version  in Headers
app.get("/api/newHead", async (req,res)=>{

const version = req.header("api-version") || "ver1";

let veryNewProducts = [];

if(version === "ver1"){
    veryNewProducts = [
        {
            id:1,
            name:"Russian",
            price:50000
        
        },
        {
            id:2,
            name:"American",
            price:30000
        },
        {
            id:3,
            name:"Spanish",
            price:10000
        }
        ,
        {
            id:4,
            name:"Brazilian",
            price:190000
        }]
} else if(version === "ver2"){
    veryNewProducts = [
        {
            id:1,
            name:"British",
            price:50000
        
        },
        {
            id:2,
            name:"Portuguese",
            price:30000
        },
        {
            id:3,
            name:"Mexican",
            price:10000
        }
        ,
        {
            id:4,
            name:"German",
            price:190000
        }]
}
return res.status(200).json({
    Message:"All products",
    version,
    maal :veryNewProducts
});

})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})