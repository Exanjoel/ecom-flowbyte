const express= require('express')
const filter= require("../controller/filter")

const Router= express.Router();

Router.get("/",filter.getBycategory)
Router.post("/",filter.getfilterProduct)

module.exports=Router