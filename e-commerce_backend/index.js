const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
//Using custom cors policy
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.append('Access-Control-Allow-Headers', '*');
    next();
  });

const productRouter=require("./routes/product_routes")
const categoryRouter=require("./routes/category_routes")
const userRouter=require("./routes/user_routes")
const filterRouter=require("./routes/filter_routes")


app.use("/product",productRouter)
app.use("/category",categoryRouter)
app.use("/user",userRouter)
app.use("/filter",filterRouter)

  app.listen(3000,()=>{
    console.log('server is running on port 3000');
});