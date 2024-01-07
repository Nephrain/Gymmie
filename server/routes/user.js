const express = require("express");
const router = express.Router();

router.post("/new", async (req, res) => {
  const { name, email } = req.body;
  try {
    await pool.query("INSERT INTO profile(name, email) VALUES ($1, $2)", [name, email]);
    res.status(200).send({ message: "Successfully created user" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  const user_id = req.params.id;
  try {
    await pool.query("SELECT * FROM profile WHERE id = $1", [user_Id]);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/:id/workouts", async (req, res) => {
  const user_id = req.params.id;
  try {
    await pool.query("SELECT * FROM workouts WHERE user_id = $1", [user_id]);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
})

module.exports = router;