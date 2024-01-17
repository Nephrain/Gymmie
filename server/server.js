const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const local = require("./strategies/local");

const PORT = 4000;

const app = express();
const store = new session.MemoryStore();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: false}));
app.use(session({
    secret: "secret",
    saveUninitialized: false,
    store
}));

// Routing
const userRouter = require("./routes/user");
const workoutRouter = require("./routes/workout");
const exerciseRouter = require("./routes/exercise");
const authRouter = require("./routes/auth");

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/user", userRouter);
app.use("/api/workout", workoutRouter);
app.use("/api/exercise", exerciseRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})