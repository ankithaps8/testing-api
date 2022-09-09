const mongoose = require("mongoose");

const uri =
"mongodb+srv://ankips:ankithag58@cluster0.rljbg.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log("Mongo Error: ", error);
    console.error(error);
  }
};

module.exports = connectDB;
