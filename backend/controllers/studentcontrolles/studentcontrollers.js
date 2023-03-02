const student = require("../../model/studentmodel/studentsubmodel")
const countr = require("../../model/studentmodel/studentcountrymodel")
const cours = require("../../model/studentmodel/studentcoursemodel")


const addstudent = async (req, res) => {
  // const {course,country,subname} = req.body
  try {
    const { name, country, schoolname, number, coursse, gender, email, subject } = req.body
    if(!name || !country || !schoolname || !number || !coursse || !email || !subject){
      res.status(401).json("missing data ")
    }
    const countrys = await countr.findOne({})
    const courses = await cours.findOne({})
    const allstudent = await student.findOne({})
    JSON.stringify(countrys)
    JSON.stringify(courses)
    JSON.stringify(allstudent)
    console.log(countrys.CountryCode);
    console.log(courses.course.basiccourse);
    console.log(countrys.CountrySchool.School[0])
    console.log(allstudent);
  
  
  
  
    if (countrys.CountryName == country && countrys.CountrySchool.School[0] == schoolname && allstudent.subname == subject && courses.course.basiccourse[0] == coursse) {
      const data = await student.create({
        name,
        country,
        schoolname,
        number,
        coursse,
        gender,
        email,
        subject,
      })
  
      res.status(200).json(data)
    } else {
      res.status(404).json("not found")
    }
  
  } catch (error) {
    res.status(404).json(error)
  }
 
}


module.exports = { addstudent, }