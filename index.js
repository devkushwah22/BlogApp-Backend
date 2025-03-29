const express = require("express");
const app = express();

// Initialize dotenv
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());  // JSON body parse karne ke liye 

// Routes
const blog = require("./routes/blog");

// Mount routes
app.use("/api/v1", blog);  

// Connect to database
const connectDB = require("./config/databases");
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`App is started at port no ${PORT}`); 
});
 