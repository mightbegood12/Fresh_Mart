import mongoose from "mongoose";

const connectdatabase = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/fresh-mart`);
  } catch (error) {
    console.error("Database connection error:", error);
    console.log(process.env.MONGODB_URI);
  }
};

export default connectdatabase;
