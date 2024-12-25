import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://balaganeshm891:IjOoDeHubuqyJ1uv@cluster0.qljot.mongodb.net/food-del",
      { serverSelectionTimeoutMS: 5000 }
    )
    .then(() => console.log("DB Connected"));
};
