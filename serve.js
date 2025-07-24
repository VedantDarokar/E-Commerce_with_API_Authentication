import express from "express";
import mongoose from "mongoose";
import bodyParser from "express" ;

import { config } from "dotenv";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// .evn setup
config({path:'.env'})

// user Router
app.use("/api/user",userRouter);

// contact Router 
app.use('/api/contact',contactRouter)


// home route
app.get("/", (req, res) => {
  res.json({ message: "This is home route working" });
});



mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "NodeJs",
  })
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));


app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));