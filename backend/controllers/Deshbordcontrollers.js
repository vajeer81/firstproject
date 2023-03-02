const Employ = require("../model/Employmodel");
const stdudents = require("../model/studentmodel/studentmodel");
const prodect = require("../model/prodectsmodel")
const allapi = async (req, res) => {
try {
  let prodects = await prodect.find({})
  let student = await stdudents.find({})
  let employ = await Employ.find({})
    arr = [
      employ = {
        image:"https://wallpaperaccess.com/full/4322025.jpg",
        name:"emaploy",
        data:employ
      },
  student={
         image:"https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
         name:"student",
         data: student
      },
      prodects={
        image:"https://stickybranding.com/wp-content/uploads/2019/11/How-to-name-your-product.jpg",
         name:"product",
         data: prodects
      }

    ]
  
  res.status(200).json(arr)
} catch (error) {
  res.status(404).json(error)
}

}


module.exports = { allapi }