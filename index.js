const express = require("express");
const app = express();
app.use(express.json());
app.set("view engine", "ejs")
app.listen(5000)
const root = require("path").resolve();
app.use("/public", express.static(root + "/static"));


app.get("/", (req, res) => {
    res.render("")
})