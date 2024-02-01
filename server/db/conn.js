const mongoose = require("mongoose");
const DB = "mongodb+srv://ankit:ankit@atlascluster.gxvhhpj.mongodb.net/ox?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log("no connection"));