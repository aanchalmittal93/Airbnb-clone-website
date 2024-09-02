const User=require("../models/user.js");


module.exports.renderSignup=(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.signup=async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        const newUser = new User({email,username});
        const registeredUser= await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","welcome to makemytrip");
            res.redirect("/place")
        })
       
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup")
    }
 

}

module.exports.login = async(req,res)=>{
    req.flash("success","Welcome to makemytrip")
    let redirectUrl= res.locals.redirectUrl||"/place";
    res.redirect(redirectUrl);
    }

    module.exports.logout=(req,res,next)=>{
        req.logout((err)=>{
            if(err){
              return  next(err);
            }
            req.flash("success","you are logged out");
            res.redirect("/place")
        })
    }


