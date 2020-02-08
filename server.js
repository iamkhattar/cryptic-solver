const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//Init Middleware
app.use(express.json({ extended: false }));

//Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

//Solve Clues Route
app.use("/api/solve", require("./routes/api/solve"));

//User Route
app.use("/api/users", require("./routes/api/users"));

//Auth Route
app.use("/api/auth", require("./routes/api/auth"));

//History Route
app.use("/api/history", require("./routes/api/history"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
