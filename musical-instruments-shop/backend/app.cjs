const express = require("express");
const app = express();
const connectContactDB = require("./db/connect.cjs");
require("dotenv").config();
const userMsgs = require("./routes/userMsg.cjs");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api/userMsg", (req, res) => {
  res.send(JSON.stringify(userMsgs));
});

app.use("/api/userMsg", userMsgs);

const port = 5174;

const start = async () => {
  console.log("Starting Server");
  try {
    await connectContactDB(process.env.MONGO_CONTACT_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
