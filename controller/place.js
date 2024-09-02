const place=require("../models/place.js")


module.exports.index=async(req,res)=>{
    const allPlace = await place.find({});
    res.render("places/index.ejs",{allPlace})
}

module.exports.renderNewForm=(req,res)=>{
    res.render("places/new.ejs")
}

module.exports.showPlace=async(req,res)=>{
    let {id}= req.params;
    const place3= await place.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!place3){
        req.flash("error","place you requested for does not exist");
          res.redirect("/place");
    }
    console.log(place3);
    res.render("places/show.ejs",{place3})
}

module.exports.createPlace=async(req,res,next)=>{
  let url=req.file.path;
  let filename=req.file.filename;
  console.log(url,"..",filename);
     
    const newPlace=new place(req.body.place);
   newPlace.owner = req.user._id;
   newPlace.image={url,filename}
    await newPlace.save();
    req.flash("success","New place created")
    res.redirect("/place");

    
}
module.exports.editNewForm=async(req,res)=>{
    let {id}= req.params;
    const place4 = await place.findByIdAndUpdate(id);
    

    if(!place4){
        req.flash("error","place you requested for does not exist");
          res.redirect("/place");
    }
    if(typeof req.file !== "undefined" ){
        let url=req.file.path;
  let filename=req.file.filename;
  place4.image={url,filename};

  await place4.save();
    }

   
    res.render("places/edit.ejs",{place4})
}

module.exports.deletePlace=async(req,res)=>{
    let {id} = req.params;
    const place6=await place.findByIdAndDelete(id);
   console.log(place6)
   req.flash("success","place deleted");
    res.redirect("/place")
}