const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
const PORT=5000;

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://sentithilisa:admin@cluster1.bm1e8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
{}
)
.then(()=>{
    console.log("Connected to the database");
});

//Routes

const userRoute=require("./routes/user.route");
app.use("/user",userRoute);


app.get("/",(req,res)=>{
    res.send("HelloWorld");
    res.end();
});

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})