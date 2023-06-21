const express = require("express")

// App constants
const port = process.env.PORT || 3000

// Middlewares
const app = express()

// Configure routes
app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html")
})


// Start server
app.listen(port, () => {
    console.log(`Listening! @ ${port}`)
})