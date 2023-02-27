const courses =  require("../../model/studentmodel/studentcoursemodel")


const getcourse = async (req,res)=>{
    const data = await courses.find({})
    res.send(data)
}




const addcourse = async(req,res)=>{
    const {course} = req.body
     const data = await courses.create({
        course
     }) 
     res.send(data)
}


module.exports = {getcourse,addcourse};

