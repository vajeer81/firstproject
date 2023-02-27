
const { json } = require("express")
const country = require("../../model/studentmodel/studentcountrymodel")


const getcountry = async (req,res)=>{
    const data = await country.find()
    res.send(data)
}

const addcountry = async(req,res)=>{
    const {CountryName,CountryCode,CountrySchool}= req.body
    const data = await country.create({
        CountryCode,
        CountryName,
        CountrySchool
    })
    if(!data){
        res.status(404).send("not data found")
    }
    // json.toString(data)

    res.status(true).json({data})
}


const countrypost  = async (req,res)=>{
    const {CountryCode,CountryName} = req.body
       
    const data = await country.findOne({CountryName})
    JSON.stringify(data)
    if(!data){
                res.status(404).json({error:"please valid data "})
            }
    console.log(data)
    
    if (data.CountryCode ||  data.CountryName){
        res.status(201).json({
            CountrySchool: data.CountrySchool
      
          })
    

        }    
} 




module.exports = {
    getcountry,
    addcountry,
    countrypost
}