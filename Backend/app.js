import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Utilisez la variable d'environnement PORT ou 5000 par défaut

mongoose
  .connect(
    `mongodb+srv://ahmedoudrhiri123321:${process.env.MONGODB_PASSWORD}@cluster0.aropvrt.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Connected To Database And Server is running on port ${PORT}`
      );
    });
  })
  .catch((e) => console.error(e));
