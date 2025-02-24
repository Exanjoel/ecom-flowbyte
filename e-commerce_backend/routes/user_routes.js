const express=require("express")
const user=require("../controller/user")

const Router=express.Router();

Router.post("/",user.postuser)
Router.get("/",user.getuser)

module.exports=Router