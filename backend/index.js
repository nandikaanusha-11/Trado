
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
// app.use(cors());

const authRoute = require("./Routes/AuthRoute.js");
const { MONGO_URL} = process.env;

app.use(
  cors({
    origin: ["http://localhost:3000",
"https://trado-3.onrender.com",
"https://trado-4.onrender.com"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(bodyParser.json());
const cookieParser = require("cookie-parser");
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



app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Save every order
    const newOrder = new ordersModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

if (mode === "BUY") {
  console.log("BUY block entered");

  const newHolding = new holdingsModel({
    name,
    qty,
    avg: price,
    price,
    net: "+0.00%",
    day: "+0.00%",
  });

  console.log("Before save:", newHolding);

  await newHolding.save();

  console.log("Holding saved successfully");
}

    else if (mode === "SELL") {

      // Oldest holdings first (FIFO)
     const holdings = await holdingsModel.find({ name }).sort({ _id: 1 });

      let remainingQty = qty;

      // Check total available quantity
      const totalQty = holdings.reduce((sum, h) => sum + h.qty, 0);

      if (remainingQty > totalQty) {
        return res.status(400).json({
          message: "Insufficient holdings",
        });
      }

      for (let holding of holdings) {

        if (remainingQty === 0) break;

        if (holding.qty <= remainingQty) {

          remainingQty -= holding.qty;

          await holdingsModel.findByIdAndDelete(holding._id);

        } else {

          holding.qty -= remainingQty;

          await holding.save();

          remainingQty = 0;
        }
      }
    }

    res.status(200).json({
      message: "Order placed successfully",
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

app.get("/addOrder",async (req,res)=>{
   let allOrders=await ordersModel.find({});
   res.json(allOrders);
});

app.use(express.json());

app.use(cookieParser());
app.post("/check", (req, res) => {
  res.json({ message: "Backend is working" });
});
app.use("/", authRoute);
app.listen(PORT,()=>{
    console.log("app is listening on port 3002");
    
    console.log("db connected");
})






