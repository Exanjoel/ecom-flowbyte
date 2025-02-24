const express=require("express")
const category=require("../controller/category")

const Router=express.Router();

Router.post("/",category.postcategory)
Router.put("/",category.putcategory)
Router.get("/",category.getcategory)
Router.get("/:category_id",category.getsinglecategory)

module.exports=Router