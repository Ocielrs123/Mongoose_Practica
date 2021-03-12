const mongoose = require('mongoose');

const URI ="mongodb+srv://atlasuser:ociel1234@cluster0.sm9m9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Conexion exitosa!');
};

module.exports = connectDB;
