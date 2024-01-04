const express = require("express");
const cors = require("cors");
const pool = require("./db")
const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    const { name, sets } = req.body;
    try {
        const data = await pool.quert("SELECT * FROM workout")
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.post("/", async (req, res) => {
    const { name, sets } = req.body;
    try {
        await pool.quert("INSERT INTO workout( name, sets ) VALUES ($1, $2)", [name, sets])
        res.status(200).send({ message: "Successfully added exercise" })
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.get("/setup", async (req, res) => {
    try {
        await pool.query("CREATE TABLE workout( id SERIAL PRIMARY KEY, name VARCHAR(100), sets TINYINT(100)");
        res.status(200).send({ message: "Successfully created workout" })
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})