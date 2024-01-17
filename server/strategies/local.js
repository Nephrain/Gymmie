const LocalStrategy = require("passport-local");
const passport = require("passport");
const pool = require("../db/index");

passport.use(new LocalStrategy(
  async(username, email, done) => {
    const response = await pool.query("SELECT * FROM profile WHERE name = $1", [username]);
    console.log(response);
  }
));