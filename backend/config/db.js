import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ✔");

    console.log("DB Name:", mongoose.connection.name);
  } catch (error) {
    console.log("DB connection error ❌", error.message);
  }
};

export default connectDB;