const test = async (req, res, next) => {
  res.status(200).json({ text: "The app is up and running" });
};
module.exports = test;
