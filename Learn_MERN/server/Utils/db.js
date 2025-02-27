const mongoose =require("mongoose");
//const URI="mongodb://127.0.0.1:27017/";

const URI="mongodb+srv://Bittu:12345@login.tir7b.mongodb.net/mearn_adminretryWrites=true&w=majority&appName=Login";
;

const connectDb=async () =>{
    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
        
    }
};
module.exports=connectDb;
