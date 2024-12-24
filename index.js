const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const blogRoutes = require("./routes/blogRoutes");

// config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3010;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/blog", blogRoutes);

// start server
app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
