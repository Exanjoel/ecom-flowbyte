const MySql_pool= require("../resources/db").MySql_pool


// exports.getfilterProduct=(req, res)=>{
//     let sqlQuery = "SELECT* FROM product";



//     MySql_pool.getConnection((err, con) => {
//         if (err) {
//           res
//             .status(400)
//             .json({ errorcode: 400, errorMessage: "Database connection error" });
//         } else {
//           con.query(sqlQuery, (err, results) => {
            
//             con.release();
    
//             if (err) {
//               res
//                 .status(400)
//                 .json({ errorcode: 400, errorMessage: "querry error" });
//             } else {
//               res.status(200).json({ message: "Get sucessfully", results });
//             }
//           });
//         }
//       });
//   }

  exports.getBycategory=(req,res)=>{
    
    const {categoryId}=req.body
    let sqlQuery = "SELECT * FROM product WHERE category_id = ?";



    MySql_pool.getConnection((err, con) => {
        if (err) {
          res
            .status(400)
            .json({ errorcode: 400, errorMessage: "Database connection error" });
        } else {
          con.query(sqlQuery,categoryId, (err, results) => {
            
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
  }
