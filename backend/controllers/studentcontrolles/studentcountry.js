const { json } = require("express")
const country = require("../../model/studentmodel/studentcountrymodel")


const getcountry = async (req, res) => {
    try {
        const data = await country.find()
        if (!data) {
            res.status(404).json({ error: "data is not found" })
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }

}

const addcountry = async (req, res) => {
    try {

        const { CountryName, CountryCode, CountrySchool } = req.body
        if (!CountryCode || !CountryName || !CountrySchool) {
            res.status(400).json("missing filds")
        }
        const data = await country.create({
            CountryCode,
            CountryName,
            CountrySchool
        })
        if (!data) {
            res.status(404).send("not data found")
        }

        res.status(200).json({ status: true, data })
    } catch (error) {
        res.status(404).json(error)
    }



}


const countrypost = async (req, res) => {
try {
    const { CountryName } = req.body

    const data = await country.findOne({ CountryName })
    JSON.stringify(data)
    if (!data) {
        res.status(404).json({ error: "please valid data " })
    }
    console.log(data)

    if (data.CountryCode || data.CountryName) {
        res.status(201).json({
            CountrySchool: data.CountrySchool

        })
    }
} catch (error) {
    res.status(404).json(error)
}

    
}




module.exports = {
    getcountry,
    addcountry,
    countrypost
}