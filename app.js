if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path =require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js")
 const placeRouter = require("./routes/place.js")
 const reviewRouter = require("./routes/review.js");
 const userRouter = require("./routes/user.js");
 const session = require("express-session");
 const flash = require("connect-flash");
 const passport = require("passport");
 const LocalStrategy = require("passport-local");
 const User = require("./models/user.js");
 

const MONGO_URL="mongodb://127.0.0.1:27017/Hotel";

main().then(()=>{
    console.log("connected to db")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

}

app.engine("ejs",ejsMate)

app.set("views",path.join(__dirname,"views"));
app.set("views engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));

const sessionOptions={
secret:"mysupersecertcode",
resave:false,
saveUninitialized:true,
cookie:{
    expires:Date.now()+7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true,
}
}
app.get("/",(req,res)=>{
    res.send("hii , mai root hu");
});

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
  
})

// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email:"aanchal123@gmail.com",
//         username:"aanchal-mittal",
//     });
//      let registeredUser=await User.register(fakeUser,"nice");
//      res.send(registeredUser);
// })



app.use("/place",placeRouter);
app.use("/place/:id/reviews",reviewRouter);
app.use("/",userRouter);


app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found"));
})

app.use((err,req,res,next)=>{
let {statusCode = 500,message="some error occured"}=err;
res.status(statusCode).render("places/error.ejs",{message})

});
app.listen(8080,()=>{
    console.log("hmara server 8080 chl gya h")
});