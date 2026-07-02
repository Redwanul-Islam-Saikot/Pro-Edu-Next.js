import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    console.log("Connected");
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
