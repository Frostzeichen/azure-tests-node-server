const express = require("express")

// App constants
const port = process.env.PORT || 3000

// Middlewares
const app = express()

// Configure routes
app.use(express.static("public"))


// Start server
app.listen(port, () => {
    console.log(`Listening! @ ${port}`)
})