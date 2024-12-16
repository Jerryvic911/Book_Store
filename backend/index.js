import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

//middleware to enable cross-origin requests
//option 1: allow all origins with default of cors(*)
app.use(cors());
//option 2: allow custom origins
// app.use(cors({
//     origin: ["http://localhost:3000", "http://localhost:8080"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
// }))

//middleware to parse request body as json
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Hello World");
});

app.use("/books", bookRoutes);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
