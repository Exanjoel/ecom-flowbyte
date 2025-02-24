const express=require("express")
const product=require("../controller/product")


const Router=express.Router();

Router.post("/",product.postproduct)
Router.get("/",product.getproduct)
Router.put("/",product.putproduct)
Router.get("/:product_id",product.getsingleproduct)

module.exports= Router;