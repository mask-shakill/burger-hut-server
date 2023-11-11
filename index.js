const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db-connect");
const errorHandler = require("./middleware/error-handler");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// database connection
dbConnect();

// base url for products api
app.use("/api/products", require("./routes/products-route"));
app.use(errorHandler);

// listen server...
app.listen(port, () => {
  console.log(`server connected and port : ${port}`);
});
