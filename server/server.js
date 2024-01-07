const express = require("express");
const cors = require("cors");
const pool = require("./db/index")
const PORT = 4000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Routing
const userRouter = require("./routes/user");
const workoutRouter = require("./routes/workout");

app.use("/user", userRouter);
app.use("/workout", workoutRouter);


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})