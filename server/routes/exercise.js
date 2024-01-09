const express = require("express");
const pool = require("../db/index");
const router = express.Router();

router.get("/list", async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM exercise");
        res.status(200).send(response.rows);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

router.get("/:name/get_id", async (req, res) => {
    const exercise_name = req.params.name.split('+').join(' ');
    try {
        const response = await pool.query("SELECT id FROM exercise WHERE exercise_name = $1", [exercise_name]);
        res.status(200).send(response.rows[0]);
    } catch (err) {
        console.log(err);
        res.sendStatus(500).send({ message: "Error getting exercise ID" });
    }
})

module.exports = router;