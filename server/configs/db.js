import mongoose from "mongoose";

const connecdDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/Quick-Show`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connecdDB;
