const express=require("express");
const cors=require("cors");
const app=express();
const port=process.env.PORT ||3000;
app.use(cors());
const apidata=require("./data.json");
app.get("/",(req,res)=>{
    res.send("hello i am live");

});
app.get("/service",(req,res)=>{
    res.send(apidata);
}
)
app.listen(port,()=>{
    console.log(" Again hello i am live");

});