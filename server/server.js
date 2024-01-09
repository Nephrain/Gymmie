const express = require("express");
const cors = require("cors");
const PORT = 4000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Routing
const userRouter = require("./routes/user");
const workoutRouter = require("./routes/workout");
const exerciseRouter = require("./routes/exercise");

app.use("/api/user", userRouter);
app.use("/api/workout", workoutRouter);
app.use("/api/exercise", exerciseRouter);


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})