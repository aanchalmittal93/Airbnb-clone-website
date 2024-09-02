const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const placeSchema = new Schema({
title:{
    type:String,
    required:true,
},
description:{
type:String,
},
image:{
url:String,
filename:String,
},
price:Number,
location:String,
country:String,
reviews:[
    {
    type:Schema.Types.ObjectId,
    ref:"Review"
    }
],
owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
}
})
placeSchema.post("findOneAndDelete",async(place)=>{
    if(place){
        await Review.deleteMany({_id:{$in:place.reviews}})
    }
   
})

const Place=mongoose.model("Place",placeSchema);
module.exports = Place;