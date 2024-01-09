const express = require("express");
const pool = require("../db/index")
const router = express.Router();

// Create workout
router.post("/new", async (req, res) => {
  const { workout_name, datetime, user_id } = req.body;
  try {
    const id = await pool.query("INSERT INTO workout(workout_name, datetime, user_id) VALUES ($1, $2, $3) RETURNING id", [workout_name, datetime, user_id]);
    res.status(200).send({ message: "Successfully created workout", id: id});
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Get workout info from ID
router.get("/:id", async (req, res) => {
  const workout_id = req.params.id;
  try {
    const response = await pool.query("SELECT * FROM workout WHERE id = $1;", [workout_id]);
    res.status(200).send(response.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Get exercises from workout
router.get("/:id/exercises", async (req, res) => {
  const workout_id = req.params.id;
  try {
    const exercise_id = await pool.query("SELECT exercise_id FROM workout_exercise WHERE workout_id = $1", [workout_id]);
    res.status(200).send(response.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Add exercise to workout
router.post("/add_exercise", async (req, res) => {
  const { position_in_sequence, exercise_id, workout_id } = req.body;
  try {
    await pool.query("INSERT INTO workout_exercise(position_in_sequence, exercise_id, workout_id) VALUES ($1, $2, $3)", [position_in_sequence, exercise_id, workout_id]);
    res.status(200).send({ message: "Successfully added exercise" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Add set to exercise
router.post("/add_set", async (req, res) => {
  const { pos_in_seq, weight, reps, time, distance, workout_exercise_id, set_type_id } = req.body;
  try {
    const workout_exercise = await pool.query("SELECT * FROM workout_exercise WHERE id = $1", [workout_exercise_id]);
    const exercise = await pool.query("SELECT * from exercise WHERE id = $1", [workout_exercise.exercise_id]);
    const tracking_type = await pool.query("SELECT * from tracking_type WHERE id = $1", [exercise.tracking_type_id]); 
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;