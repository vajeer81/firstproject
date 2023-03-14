const multer = require("multer")
const express = require("express");
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use("/uploard", express.static("../IMG"))

const storage = multer.diskStorage({
    destination: "../IMG",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`)
    }
})
let uploard = multer({
    storage: storage
})

module.exports = uploard