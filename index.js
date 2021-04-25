const express = require('express');
const app = express();
require('dotenv').config();
global.__root = __dirname + '/';
const port = process.env.PORT;

//connection
var mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_PROD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

// controller
var UserController = require(__root+'users/user-controller');
app.use('/api/user/', UserController)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})