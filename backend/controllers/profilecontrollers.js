const profile = require("../model/profilemodel")
const singup = require("../model/Singupmodel")

const getprofile = async (req, res) => {
    try {
        const data = await singup.findById(req.params._id);
    if (!data) {
        res.status(404).json({ error: "not found " })
    }
    res.status(201).json({
        fistname: data.fistname,
        lastname: data.lastname,
        email: data.email,
        gender: data.gender
    })
    } catch (error) {
        res.status(401).json(error)
    }
    
}

const postprofile = async (req, res) => {
    const data = await singup.findById(req.params._id)
    const { fistname, lastname, email, gender, img } = req.body
    if (!fistname && !lastname && !email && !gender && !img) {
        res.status(500).json({ error: "missing the data filds " })
    }
    if (data.fistname == fistname && data.lastname == lastname && data.email == email && data.gender == gender) {
        const pro = await profile.create({
            fistname,
            lastname,                           
            email,
            gender,
            img

        })
        res.send(pro)
    } else {
        res.status(400).json({ error: "detail is invalid" })
    }
}


module.exports = {
    getprofile,
    postprofile
}
