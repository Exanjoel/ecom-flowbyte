const MySql_pool= require("../resources/db").MySql_pool



exports.postproduct = (req, res) => {
    const { title, category_id, description, price, image } = req.body;
  
    let sqlQuery =
      "INSERT INTO `product`( `title`, `category_id`, `description`, `price`, `image`) VALUES (?,?,?,?,?)";
    MySql_pool.getConnection((err, con) => {
      if (err) {
        res
          .status(400)
          .json({ errorcode: 400, errorMessage: "Database connection error" });
      } else {
        con.query(
          sqlQuery,
          [title, category_id, description, price, image],
          (err, results) => {
            con.release();
  
            if (err) {
              res
                .status(400)
                .json({ errorcode: 400, errorMessage: "querry error" });
            } else {
              res.status(200).json({ message: "post sucessfully", results });
            }
          }
        );
      }
    });
  };

  exports.getproduct=(req,res)=>{

    let sqlQuery = "SELECT* FROM product";

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
  
  exports.putproduct = (req, res) => {
    const { product_id, description,count,delivery,returns,sku } =
      req.body;
  
    let sqlQuery =
      "UPDATE `product` SET `description`=?,`count`=?,`delivery`=?,`returns`=?,`sku`=? WHERE product_id=?";
    MySql_pool.getConnection((err, con) => {
      if (err) {
        res
          .status(400)
          .json({ errorcode: 400, errorMessage: "Database connection error" });
      } else {
        con.query(
          sqlQuery,
          [ description,count,delivery,returns,sku, product_id],
          (err, results) => {
            con.release();
  
            if (err) {
              res
                .status(400)
                .json({ errorcode: 400, errorMessage: "querry error" });
            } else {
              res.status(200).json({ message: "put sucessfully", results });
            }
          }
        );
      }
    });
  };

  exports.getsingleproduct=(req,res)=>{

    const{product_id}=req.params
  
    let sqlQuery = "SELECT* FROM product where product_id=?";
    MySql_pool.getConnection((err, con) => {
      if (err) {
        res
          .status(400)
          .json({ errorcode: 400, errorMessage: "Database connection error" });
      } else {
        con.query(sqlQuery,product_id, (err, results) => {
          con.release();
  
          if (err) {
            res
              .status(400)
              .json({ errorcode: 400, errorMessage: "querry error" });
          } else {
            res.status(200).json({ message: "Get sucessfully", results: results[0] });
          }
        });
      }
    });
  
  }