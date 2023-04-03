const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require('morgan');

const port = 2400;
const dbURI = "mongodb://127.0.0.1/scavenger-hunt";

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", (err) => { console.error(err) });
db.once("open", () => { console.log("DB started successfully") });

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => { console.log("Server started on port", port) });