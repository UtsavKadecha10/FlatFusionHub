const mongoose = require("../../../connectionMongo")

const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

const rentSchema = new mongoose.Schema({
    _id:ObjectId,
    bedroom:Number,
    bathrooms:Number,
    area:Number,
    furnishing:String,
    avalable_for:String,
    address:String,
    floor_number:Number, 
    facing:String,
    parking:Number,
    lightbill:Number,
    maintenance_amt:String,
    brok_amt:Number,
    deposit_amt:Number,
    rent:Number
}, {collection: 'rentProperty'});

const rentBachelorProperty = new mongoose.model("rentBachelorProperty", rentSchema);

const getBachelor = async () => {
  const result = await rentBachelorProperty.find({avalable_for:"All"}).limit(5);
  console.log(result);
}

// getBachelor();

module.exports=rentBachelorProperty;
