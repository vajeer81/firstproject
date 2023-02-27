const student = require("../../model/studentmodel/studentmodel")
const subjects = require("../../model/studentmodel/studentsubmodel")
const countr = require("../../model/studentmodel/studentcountrymodel")
const cours = require("../../model/studentmodel/studentcoursemodel")


const addstudent = async (req, res) => {
  // const {course,country,subname} = req.body
  const { name, country, schoolname, number, coursse, gender, email, subject } = req.body
  const countrys = await countr.findOne({})
  const courses = await cours.findOne({})
  const subjecting = await subjects.findOne({})
  JSON.stringify(countrys)
  JSON.stringify(courses)
  JSON.stringify(subjecting)
  console.log(countrys.CountryCode);
  console.log(courses);
  console.log(subjecting);



  if (countrys.CountryName == country && subjecting.subname == subject) {
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

    // res.send(data) 
  } else {
    res.send("not found")

  }

}


module.exports = { addstudent, }