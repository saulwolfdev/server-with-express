const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.end("Hello Word")
})

module.exports = router