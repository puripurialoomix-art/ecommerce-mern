import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';

dotenv.config();
const app = express();

// ✅ For Hosting build folder path fix
const __dirname = path.resolve();

// ✅ Allow API Access (Fix White Screen Issue)
app.use(cors({ origin: "*" }));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ API Routes
app.use('/', Routes);

const PORT = process.env.PORT || 8000;

// ✅ Connect Database
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password)
  .then(() => {
    console.log("✅ Database Connected Successfully");
    DefaultData();
  })
  .catch(err => console.log("❌ Database Connection Failed:", err));

// ✅ Serve Frontend Build (VERY IMPORTANT)
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// ✅ Start Server
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);

