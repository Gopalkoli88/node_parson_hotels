const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./db");
const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body

app.get("/", (req, res) => {
    res.send("Welcome to my hotel");
});

// importing menuitem routers
const MenuItemRouts = require("./routes/MenuItemRouts");
// importing personRoutes file
const personRoutes = require("./routes/personRouts");

app.use("/menu", MenuItemRouts);
app.use("/person", personRoutes);

app.listen(PORT, () => {
    console.log("Server has started on port " + PORT);
});
