const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");

const place=require("../models/place.js");
const Review=require("../models/review.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controller/review.js")

//reviews route 
//post route

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.newReview))


//delete review route

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview))
module.exports = router;