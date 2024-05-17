const mongoose = require("../../../connectionMongo")

const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

const buySchema = new mongoose.Schema({
  _id:ObjectId,
  Property_Name:String,
  Property_id:Number,
  Property_type:String,
  Property_status:String,
  Price_per_unit_area:Number,
  Posted_On:String,
  Project_URL:String,
  Builder_name:String,
  Property_building_status:String,
  City_name:String,
  No_of_BHK:String,
  Locality_Name:String,
  Price:Number,
  Size:String,
  is_furnished:String,
  is_plot:Boolean,
  is_Apartment:Boolean,
  is_ready_to_move:Boolean,
  is_PentaHouse:Boolean
}, {collection: 'buyProperty'});

const buyBudgetProperty = new mongoose.model("buyBudgetProperty", buySchema);

const getBudget = async()=>{
  const result = await buyBudgetProperty.find({Price:{$gte:2500000, $lte:4000000}}).limit(5);
  console.log(result);
}

// getBudget();

module.exports=buyBudgetProperty;
