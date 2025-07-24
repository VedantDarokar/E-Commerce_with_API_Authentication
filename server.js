import express from "express";
import mongoose from "mongoose";
import bodyParser from "express" ;
import userRouter from './Routes/user.js';
import productRouter from './Routes/product.js'

import { config } from "dotenv";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// .evn setup
config({path:'.env'})

// home route
app.get("/", (req, res) => {
  res.json({ message: "This is home route working" });
});

//user router
app.use('/api/user',userRouter)

//product router
app.use('/api/product',productRouter)

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "E-Commerce_API",
  })
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

const port = process.env.PORT;
app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));