const jwt=require('jsonwebtoken')

function verifytoken(req, res,next) {
    console.log(req.headers)
    if (req.headers.authorization !== undefined) {
      let token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, "Masoomkey", (err, data) => {
        if (!err) {
          console.log(data);
          next();
        } else {
          console.log(err);
          res.send({ message: "invalid token" });
        }
      });

      
    } else {
      res.send({ message: "please send a token" });
    }
  }
  module.exports=verifytoken;