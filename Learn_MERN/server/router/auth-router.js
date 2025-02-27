const express =require("express");
const router=express.Router();
const authController= require("../Controllers/auth-controllers.js")
// router.get("/",(req, res)=>{
//     res.status(200).send("Welcome to world best")
// });
router.route("/").get(authController.home);
router.route("/register").post(authController.register);
module.exports=router;