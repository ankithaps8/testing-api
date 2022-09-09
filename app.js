const express = require("express");
const port = 4000;
// Database
const { Database } = require("./utils");
Database.connectMongo();

//express instance
const app = express();

//middleware
app.use(express.json({ limit: "50mb" })); //body parser
app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
