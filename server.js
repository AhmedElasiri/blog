const express = require("express");
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const connectDB = require("./server/database/connection");

connectDB();

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"))


app.use("/", require("./server/routes/router"));

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
