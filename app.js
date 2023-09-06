import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();

app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const startServer = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://arishchandrasekar:arish.26@cluster0.ymuye03.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(() => {
        app.listen(5000);
      })
      .then(() => {
        console.log("Connected to mongoDB and listening to localhost 5000");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

startServer();
