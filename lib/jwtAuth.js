
// import json web token
var jwt = require("jsonwebtoken");
module.exports.requireToken = (req, res, next) => {
// define acceptable token headers type
  const token =
    req.headers.authorization ||
    req.headers["x-access-token"] ||
    req.body.token;
  if (token) {
    // if there is token, compare and vrify
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        res.send(err);
      } else {
        // send decoded as req.user
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({
      status: "Failed",
      message: "Authentication required for this route",
    });
  }
};

module.exports.generateToken = (user, callback) => {
  console.log("user", user);
  // create token with user details
  jwt.sign(
    {
      id: user._id,
      email: user.email,
      password: user.hashedpassword,
    },
    "secret",
    { expiresIn: "4h" }, //  expires in 4hours
    (err, res) => {
    callback(err, res);
    }
  );
};
