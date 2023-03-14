const users = require("../model/usermodel")
const EightData = require("../../apidata/img")



const findapi = async(req,res)=>{
    res.status(200).json(EightData)
} 


const getuser = async (req, res) => {
    try {
        let data = users.find({})
        if (!data) {
            res.status(404).json({ error: "user not found" })
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}



const postuser = async (req, res) => {
    try {
        const { name, number, email, profile, student, employ, product } = req.body
        if (!name || !number || !email || !profile || !student || !employ || !product) {
            res.status(400).json({ error: "somthing is missing" })
        }

            let data = await users.create({
                name,
                number,
                email,
                product,
                profile,
                student,
                employ
            })
            res.status(200).json(data);
 

    } catch (error) {
        res.status.json(error)
    }

}


const findpost = async (req, res) => {
    try {
        // const {profile,student,employ,product} = req.body
        let data = await users.findById(req.params._id)
        if (!data) {
            res.status(404).json({ error: "data is missing" })
        }

        let result = await users.findByIdAndUpdate(req.params._id, req.body, { new: true })
        if (!result) {
            res.status.json({ error: "not update" })
        }
        res.status(201).json(result)

    } catch (error) {
        res.status(404).json(error)
    }
}



const deleteusre = async (req, res) => {
    try {
        const data = await users.findById(req.params._id)
        if (!data) {
            res.status(400).json({ error: "id is missimg" })
        }
        await data.remove()

    } catch (error) {
        res.status(404).json(error)
    }
}




module.exports = { postuser, findpost, deleteusre,getuser,findapi };