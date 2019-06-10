const express = require("express");

const app = express()

app.use(express.static("public"))

const PORT = process.env.PORT || 8080

app.listen(PORT, function() {
    console.log("Listening on Port 8080")
});