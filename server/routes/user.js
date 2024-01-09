const express = require("express");
const pool = require("../db/index")
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
    const result = await pool.query("SELECT * FROM profile WHERE id = $1", [user_id]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/:id/workouts", async (req, res) => {
  const user_id = req.params.id;
  
  try {
    const result = await pool.query("SELECT * FROM workout WHERE user_id = $1", [user_id]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).send('No workouts found');
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
})

router.get("/:id/total_workouts", async (req, res) => {
  const user_id = req.params.id;
  try {
    const result = await pool.query("SELECT COUNT(*) FROM workout WHERE user_id = $1", [user_id]);
    res.status(200).json(result.rows[0]);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;