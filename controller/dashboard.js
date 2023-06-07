const dashboardController = (req, res) => {
  res.status(200).json({ message: "welcome to dashboard" });
};

module.exports = dashboardController;
