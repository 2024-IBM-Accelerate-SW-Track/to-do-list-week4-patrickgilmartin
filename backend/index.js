const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs").promises;
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
    res.send({ message: "Connected to Backend server!" });
});

app.post("/add/item", async (req, res) => {
    try {
        const id = req.body.jsonObject.id;
        const task = req.body.jsonObject.task;
        const curDate = req.body.jsonObject.currentDate;
        const dueDate = req.body.jsonObject.dueDate;
        const newTask = {
            ID: id,
            Task: task,
            Current_date: curDate,
            Due_date: dueDate
        };

        const data = await fs.readFile("database.json");
        const json = JSON.parse(data);
        json.push(newTask);
        await fs.writeFile("database.json", JSON.stringify(json));
        console.log('Successfully wrote to file');
        res.sendStatus(200);
    } catch (err) {
        console.log("error: ", err);
        res.sendStatus(500);
    }
});
