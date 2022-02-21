const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use("/api/v1", require("./server/v1/router.js"));
app.use("/", (req, res) => {
    res.send("<h1>dev-server👽🖐🏻</h1>")
})

app.listen(PORT, (err) => {
    if (!err) {
        console.log("server is starting on port: " + PORT)
    }
})