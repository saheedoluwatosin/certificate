

const express = require("express")
const { register, generate } = require("../controller/controller")


const router = express.Router()

router.post("/register",register)
router.post("/generate",generate)


module.exports = {
    router
}