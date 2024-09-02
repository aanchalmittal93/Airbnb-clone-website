const Review=require("../models/review.js");
const place = require("../models/place.js") ;

module.exports.newReview=async(req,res)=>{
   
    let place8=await place.findById(req.params.id);
   let newReview = new Review(req.body.review);
   newReview.author = req.user._id;
   console.log(newReview);

   place8.reviews.push(newReview);

   await newReview.save();
   await place8.save();
   req.flash("success","New review created")

   res.redirect(`/place/${place8.id}`)
}
module.exports.deleteReview=async(req,res)=>{
    let {id,reviewId}=req.params;
    await place.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review deleted")
    res.redirect(`/place/${id}`);
}