const express = require("express");
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, "403-app/build")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/403-app/build/index.html"));
});

app.listen(port, () => {
    console.log(`403 listening on port ${port}`);
});
