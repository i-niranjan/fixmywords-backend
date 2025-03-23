const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
dbConnect();

app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log(r.route.path);
  }
});

app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, send) => {
  send.send("fix my words backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is Running At ${PORT}`);
});
