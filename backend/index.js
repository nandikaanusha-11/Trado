
const express=require("express");
const mongoose=require("mongoose");

const PORT=process.env.PORT||3002;
const uri=process.env.MONGO_URL;

const {holdingsModel}=require("./models/holdingsModel.js");
const {positionModel}=require("./models/positionModel.js");
const {ordersModel}=require("./models/ordersModel.js");

const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute.js");
const { MONGO_URL} = process.env;


mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));


//fetching the data from mongodb(connecting to backend)
app.get("/addHoldings",async (req,res)=>{
    //fetches only the  Holdings as HoldingsModel can only match
     let allHoldings=await holdingsModel.find({});
     //res in json format
     res.json(allHoldings);
});

app.get("/addPositions",async (req,res)=>{
   let allPositions=await positionModel.find({});
   res.json(allPositions);
});

app.post("/newOrder",async(req,res)=>{
    let newOrder=new ordersModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode
    });
    newOrder.save();
   res.send("order saved");
});

app.get("/addOrder",async (req,res)=>{
   let allOrders=await ordersModel.find({});
   res.json(allOrders);
});
app.use(
  cors({
    origin: ["http://localhost:3002"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
// app.post("/test", (req, res) => {
//   console.log("TEST HIT");
//   res.send("Working");
// });
app.use(cookieParser());
app.use("/", authRoute);
app.listen(PORT,()=>{
    console.log("app is listening on port 3002");
    
    console.log("db connected");
})






