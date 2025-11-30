import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.aw29sgl.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ Database Connection Error:", error.message);
  }
};

export default Connection;

