const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const place=require("../models/place.js");
const {isLoggedIn,isOwner } = require("../middleware.js");
const {validatePlace} = require("../middleware.js")
const placeController = require("../controller/place.js")
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage })


router.route("/")
.get(wrapAsync(placeController.index))
.post(isLoggedIn,upload.single('place[image]'),validatePlace,wrapAsync(placeController.createPlace))


//New route
router.get("/new",isLoggedIn,(placeController.renderNewForm));


router.route("/:id")
.get(wrapAsync(placeController.showPlace))
.put(isLoggedIn,isOwner,upload.single('place[image]'),validatePlace,wrapAsync(async (req, res) => {
   
    let { id } = req.params;

        await place.findByIdAndUpdate(id, { ...req.body.place });
    req.flash("success","place updated");
    res.redirect(`/place/${id}`);

}))
.delete( isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await place.findByIdAndDelete(id);
    req.flash("success", "Place deleted");
    res.redirect("/place");
}))




//edit route

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(placeController.editNewForm))


module.exports= router;