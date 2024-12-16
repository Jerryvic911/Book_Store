import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

app.use("/books", bookRoutes);

const PORT = process.env.PORT || 3000;
const mongoDBURL = process.env.MONGODB_URL;

if (!mongoDBURL) {
  console.error("MONGODB_URL is not defined in the environment variables");
  process.exit(1);
}

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  });

