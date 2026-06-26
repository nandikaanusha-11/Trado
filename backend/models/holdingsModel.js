//require model from mongoose package
const {model} =require('mongoose');
const {holdingsSchema}=require("../schemas/holdingsSchema.js");

//"holding", mongodb collection will automatically change it to holdings
const holdingsModel=new model("holding",holdingsSchema);
module.exports={holdingsModel};