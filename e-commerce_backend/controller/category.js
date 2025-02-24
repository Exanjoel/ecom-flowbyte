const MySql_pool= require("../resources/db").MySql_pool

exports.postcategory = (req, res) => {
    const { category_name, image } = req.body;
    let sqlQuery = "INSERT INTO `category`( `category_name`, `image` ) VALUES (?,?)";
    MySql_pool.getConnection((err, con) => {
      if (err) {
        res
          .status(400)
          .json({ errorcode: 400, errorMessage: "Database connection error" });
      } else {
        con.query(sqlQuery, [category_name, image], (err, results) => {
          con.release();
  
          if (err) {
            res
              .status(400)
              .json({ errorcode: 400, errorMessage: "querry error" });
          } else {
            res.status(200).json({ message: "post sucessfully", results });
          }
        });
      }
    });
  };

  exports.putcategory = (req, res) => {
    const {category_id, image } = req.body;
    let sqlQuery = "UPDATE `category` SET `image`=? WHERE category_id=? ";
    MySql_pool.getConnection((err, con) => {
      if (err) {
        res
          .status(400)
          .json({ errorcode: 400, errorMessage: "Database connection error" });
      } else {
        con.query(sqlQuery, [  image,category_id], (err, results) => {
          con.release();
  
          if (err) {
            res
              .status(400)
              .json({ errorcode: 400, errorMessage: "querry error" });
          } else {
            res.status(200).json({ message: "put sucessfully", results });
          }
        });
      }
    });
  };

  exports.getcategory=(req, res)=>{
    let sqlQuery = "SELECT* FROM category";



    MySql_pool.getConnection((err, con) => {
        if (err) {
          res
            .status(400)
            .json({ errorcode: 400, errorMessage: "Database connection error" });
        } else {
          con.query(sqlQuery, (err, results) => {
            
            con.release();
    
            if (err) {
              res
                .status(400)
                .json({ errorcode: 400, errorMessage: "querry error" });
            } else {
              res.status(200).json({ message: "Get sucessfully", results });
            }
          });
        }
      });
  }

  exports.getsinglecategory=(req,res)=>{

    const{category_id}=req.params

    let sqlQuery="SELECT * FROM `category` INNER JOIN product ON product.category_id=category.category_id WHERE category.category_id=?";

    MySql_pool.getConnection((err, con) => {
      if (err) {
        res
          .status(400)
          .json({ errorcode: 400, errorMessage: "Database connection error" });
      } else {
        con.query(sqlQuery,category_id, (err, results) => {
          con.release();
  
          if (err) {
            res
              .status(400)
              .json({ errorcode: 400, errorMessage: "querry error" });
          } else {
            res.status(200).json({ message: "Get sucessfully", results });
          }
        });
      }
    });
  }