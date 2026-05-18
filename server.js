import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import contactRoute from "./routes/contact.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/dataharbour");

app.use("/api/contact", contactRoute);

app.get("/", (req,res)=>{
  res.send("Backend running");
})

app.listen(5000, () => {
  console.log("Server running on port 5000");
});