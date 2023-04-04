const express = require("express");
const app = express();
const connectDb = require("./db/connect.cjs");
require("dotenv").config();
const userMsgs = require("./routes/userMsg.cjs");
const users = require("./routes/users.cjs");
const authRouter = require("./routes/auth.cjs");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/userMsgs", userMsgs);
app.use("/api/users", users);
app.use("/api/login", authRouter);

const PORT = process.env.PORT || 8000;

console.log(PORT);

const start = async () => {
  console.log("Starting Server");
  try {
    console.log("Connecting to UsersMessages DB");
    console.log("Connecting to Users DB");
    await connectDb(process.env.MONGO_DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
