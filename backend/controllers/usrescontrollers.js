const users = require("../model/usermodel")

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

        if (!profile || !student || !employ || !product) {
            let data = await users.create({
                name,
                number,
                email,
            })
            res.status(200).json(data);
        } else {
            res.status(400).json({ error: "some thing is worng" })
        }

    } catch (error) {
        res.status.json(error)
    }

}


const findpost = async (req, res) => {
    try {
        // const {profile,student,employ,product} = req.body
        let data = await users.findById(req.params._id)
        if(!data){
            res.status(404).json({error:"data is missing"})
        }
       let result = await users.findByIdAndUpdate(req.params._id,req.body,{new:true})
       if(!result){
        res.status.json({error:"not update"})
       }
        res.status(201).json(result)

    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = {postuser,findpost};