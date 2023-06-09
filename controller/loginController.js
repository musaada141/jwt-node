const jwt = require("jsonwebtoken");

const loginController = {
  login: async (req, res) => {
    let userDetails = {
      username: "musa ada",
      password: "12345",
    };

    if (userDetails.password === req.params.password) {
      jwt.sign(userDetails, process.env.SECRET_KEY, (err, data) => {
        if (err) {
          res.json("error");
        }
        return res.json({
          token: data,
          msg: `welcome ${userDetails.username}`,
        });
      });
    } else {
      return res.json({ msg: `Invalid Password` });
    }
  },
};

module.exports = loginController;
