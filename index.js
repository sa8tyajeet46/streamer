const app = require("./app");
const connectDatabase = require("./DataBase/connectDataBase");
require("dotenv").config({ path: `${__dirname}/config/.env` });
connectDatabase();
app.listen(process.env.PORT, () => {
  console.log(`app is running at ${process.env.PORT}`);
});
