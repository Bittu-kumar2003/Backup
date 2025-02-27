require("dotenv").config();
const express = require("express");
const app=express();
const router= require("./router/auth-router.js");
const connectDb=require("./Utils/db.js")
app.use("/api/auth",router);
// app.use("/api/auth/register",router);
app.use(express.json());

// app.get("/",(req, res)=>{
//     res.status(200).send("welcome")
// });
// app.get("/res",(req, res)=>{
//     res.status(200).send("welcomes")
// });
// app.get("/start",(req, res)=>{
//     res.status(200).send("login")
// });

// router.route("/").get((req, res)=>{
//     res.status(200).send("welcomes")
// });

const PORT=5000;
connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running at Port ${PORT}`);

});
});
