import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/route.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ✅ All Routes (Signup/Login/Products)
app.use("/", Routes);

// ✅ Basic test route
app.get("/", (req, res) => {
  res.send("✅ Backend API is running successfully!");
});

const PORT = process.env.PORT || 8000;

// ✅ Take DB Credentials from .env
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// ✅ Connect to MongoDB
Connection(username, password)
  .then(() => {
    console.log("✅ Database Connected Successfully");
    DefaultData(); // ✅ Inserts products only once
  })
  .catch((err) => console.log("❌ Database Connection Failed:", err));

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server Running on PORT ${PORT}`));
