const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes"); // Import user routes

const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/api", userRoutes); 
database.connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
