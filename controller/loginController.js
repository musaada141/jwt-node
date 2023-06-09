const jwt = require("jsonwebtoken");

const loginController = {
  login: async (req, res) => {
    let userDetails = {
      username: "musa ada",
      password: "12345",
    };

    if (userDetails.password === req.params.password) {
      jwt.sign(userDetails, process.env.SECRET_KEY, { expiresIn: 60 }, (err, data) => {
        if (err) {
          res.json("error");
        }
        return res.json(data);
      });
    } else {
      return res.status(401).json({ msg: `Invalid Password` });
    }
  },
};

module.exports = loginController;
