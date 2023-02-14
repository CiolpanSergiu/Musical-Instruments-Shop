const express = require("express");
const app = express();
const connectDb = require("./db/connect.cjs");
require("dotenv").config();
const userMsgs = require("./routes/userMsg.cjs");
const users = require("./routes/users.cjs");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api/userMsg", (req, res) => {
  res.send(JSON.stringify(userMsgs));
});

app.get("/api/users", (req, res) => {
  res.send(JSON.stringify(users));
});

app.use("/api/userMsg", userMsgs);
app.use("/api/users", users);

const port = 5174;

const start = async () => {
  console.log("Starting Server");
  try {
    console.log("Connecting to UsersMessages DB");
    console.log("Connecting to Users DB");
    await connectDb(process.env.MONGO_CONTACT_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
