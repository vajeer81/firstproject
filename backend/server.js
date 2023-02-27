const express = require('express');
const { route } = require('./routes/userRoutes');
const { product } = require('./routes/productRoutes')
const multer = require("multer")
const path = require("path")
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: false }))
app.use("/uploard", express.static("backend/IMG"))
const { errorHandler } = require('./middleware/errorMiddleware')
app.use(errorHandler)
app.use("/api/tudo",require("./routes/TudoRoutes"))
app.use('/api/userAuth', require('./routes/userAUTHroutes'))
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/product', require('./routes/productRoutes'))
app.use("/api/course",require("./routes/studentRoutes/studentcourseRoutes"))
const mobileprodect = require("./model/mobileModel")
app.use("/api/subject",require("./routes/studentRoutes/studentsubRoutes"))
app.use("/api/country",require("./routes/studentRoutes/studentcountryRouter"))
const storage = multer.diskStorage({
    destination: "./backend/IMG/",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`)
    }
})
let uploard = multer({
    storage: storage
})


app.post("/uploard", uploard.single("img"), async (req, res) => {
    const data = await mobileprodect.create({
        mobile: req.body.mobile,
        brand: req.body.brand,
        price:req.body.price,
        img: `http://localhost:8000/uploard/${req.file.filename}`
    });
    res.send(data)
    // res.json({
    //     sucess : 1,
    //     file_url : `http://localhost:8000/uploard/${req.file.filename}`
    // })
})

const ConnectDB = require('./config/db');
// const { diskStorage } = require('multer');
ConnectDB()

app.listen(port, () => {
    console.log(`port is colled${port}`);
})



console.log(process.env.MONGO_URL);



module.exports = uploard



























// const fileuplord = multer({
//    storage: multer.diskStorage({
//     destination : function (req,file,cb){
//              cb(null,"IMG")
//     },
//     filename: function (req,file,cb){
//         cb(null,file.fieldname+".jpg")
//     }
//    })
// }).single("data")

// app.post("/",fileuplord,(req,res)=>{
//     res.send("fileuplourd")
// });