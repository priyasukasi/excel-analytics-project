const mongoose = require("mongoose");
const ExcelData = require("./models/ExcelData");

// Replace with your MongoDB URI
const uri = "mongodb+srv://priya_sukasi:aarush72@cluster0.r3a3s8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB");

  const newEntry = new ExcelData({
    name: "Priya",
    age: 20,
    email: "sukasipriyadharshini@gmail.com"
  });

  return newEntry.save();
})
.then(() => {
  console.log("🎉 Data saved successfully!");
  mongoose.disconnect();
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});