const mongoose=require("mongoose");
const express=require("express");
const Book=require("./models/Book")
require("dotenv").config();
const app=express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB Connected");
    })
    .catch((err)=>{
        console.log(err);
    })

//Method: GET Route: /books
app.get("/books",async (req,res)=>{
    try{

        const book=await Book.find();
        res.json(book);
    }
    catch(err){
        res.json({message:err.message})
    }
})
//Method: POST ROute: /books
app.post("/books",async(req,res)=>{
    try{
        const book=await Book.create(req.body);
        res.json(book);

    }
    catch(err){
        res.json({message:err.message});

    }
})
//Method: GET Route: /books/:id
//Method: PUT Route: /books/:id
//Method: DELETE Route: /books/:id


app.listen(process.env.PORT,()=>{
    console.log("server started!");
})