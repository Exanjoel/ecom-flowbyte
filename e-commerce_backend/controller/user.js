const MySql_pool= require("../resources/db").MySql_pool

exports.postuser = (req, res) => {
    const { user_name,  password, role } = req.body;
    let sqlQuery =
      "INSERT INTO `user`( `user_name`, `password`, `role`) VALUES (?,?,?)";
    MySql_pool.getConnection((err, con) => {
      if (err) {
        res
          .status(400)
          .json({ errorcode: 400, errorMessage: "Database connection error" });
      } else {
        con.query(sqlQuery, [user_name, password, role], (err, results) => {
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

  exports.getuser=(req,res)=>{

    let sqlQuery="SELECT* FROM `user`";

    MySql_pool.getConnection((err,con)=>{
        if(err){
            res
            .status(400)
            .json({errorcode:400, errorMessage:"Database connection error"});
        }else{
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
    })
  }