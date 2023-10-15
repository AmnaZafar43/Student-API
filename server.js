const express = require("express");
const bodyParser = require("body-parser");
require("./utils/db");
const studentRoutes = require("./routes/studentRoutes");
const cors = require('cors');
const app = express();
const port = 3006;
// middle wares
app.use(bodyParser.json());
app.use(cors());

// Apis
app.use("/api", studentRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to my server");
})

app.listen(port, () => {
console.log(`Server is listening on port${port}`);
});
