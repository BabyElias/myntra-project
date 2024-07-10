// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://anoushkajha1998:Gms7oulh8nd9IyCf@myntra-cluster.qtd50qi.mongodb.net/?retryWrites=true&w=majority&appName=Myntra-cluster"
, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
