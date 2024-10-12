import mongoose from "mongoose";

const connectdatabase = async () => {
  try {
    mongoose.connection.on("connection", () => {
      console.log("db connected");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("db connected");
  } catch (error) {
    console.error("Database connection error:", error);
    console.log(process.env.MONGODB_URI);
  }
};

export default connectdatabase;
