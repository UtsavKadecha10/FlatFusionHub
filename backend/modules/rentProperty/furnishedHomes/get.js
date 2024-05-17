const mongoose = require("../../../connectionMongo")

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const rentSchema = new mongoose.Schema({
    _id: ObjectId,
    bedroom: Number,
    bathrooms: Number,
    area: Number,
    furnishing: String,
    avalable_for: String,
    address: String,
    floor_number: Number,
    facing: String,
    parking: Number,
    lightbill: Number,
    maintenance_amt: String,
    brok_amt: Number,
    deposit_amt: Number,
    rent: Number
}, { collection: 'rentProperty' });

const rentFurnishedProperty = new mongoose.model("rentFurnishedProperty", rentSchema);

const getFurnished = async () => {
    const result = await rentFurnishedProperty.find({ furnishing: "Furnished" }).limit(5);
    console.log(result);
}

// getFurnished();

module.exports = rentFurnishedProperty;
