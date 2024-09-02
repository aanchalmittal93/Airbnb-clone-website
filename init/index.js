const mongoose = require("mongoose");
const initData = require("./data.js");
const place = require("../models/place.js");


const MONGO_URL="mongodb://127.0.0.1:27017/Hotel";

main().then(()=>{
    console.log("connected to db")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

}

const initDB = async ()=>{
    await place.deleteMany({}),
   initData.data= initData.data.map((obj)=>({...obj, owner:"6656b23cbf62bb7ebadac9ec",}))
    await place.insertMany(initData.data);
    console.log("data was initiliazed")
}
initDB();