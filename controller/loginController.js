const jwt = require("jsonwebtoken");

const loginController = {
  login: async (req, res) => {
    let userDetails = {
      username: "musa ada",
      password: "musaadg001/",
    };

    if (userDetails.username === req.params.username) {
      jwt.sign(userDetails, process.env.SECRET_KEY, (err, data) => {
        if (err) throw err;
        return data;
      });
    }
  },
};
