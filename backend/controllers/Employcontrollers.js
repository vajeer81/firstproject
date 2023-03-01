
const Employ = require("../model/Employmodel")

const getemp = async (req, res) => {
    const data = await Employ.find({})
    res.send(data)
};

const findid = async(req,res)=>{
    const data = await Employ.findById(req.params._id);
    res.send(data)
}


const postemp = async (req, res) => {

    try {
        const { Employid, Employname, Employnumber, Employdob, Employment, Employaddress, Employemail } = req.body
        const data = await Employ.create({
            Employaddress,
            Employdob,
            Employment,
            Employnumber,
            Employemail,
            Employid, Employname
        })
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

const putemp = async (req, res) => {
    const data = await Employ.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    let updatedata = await Employ.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    res.status(201).json(updatedata)
}

const deletemp = async (req, res) => {
    const data = await Employ.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    await data.remove()
    res.status(201).json({ massage: "data is delete" })

}


module.exports = { getemp, postemp, putemp, deletemp,findid  }