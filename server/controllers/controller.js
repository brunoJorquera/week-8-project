const vacations = [
    'Manitou Springs',
    'Belton Lake',
    'Samana'
]
let globalId = 1
const contact = []

module.exports = {
    getManitou: (req,res) => {
        res.status(200).send(vacations[0])
    },
    getBelton: (req,res) => {
        res.status(200).send(vacations[1])
    },
    getSamana: (req,res) => {
        res.status(200).send(vacations[2])
    },
    getLoco: (req,res) => {
        const randIndex = Math.floor(Math.random() * vacations.length)
        let vacation = vacations[randIndex]
        res.status(200).send(vacation)
    },
    postContact: (req,res) =>{
        const {name, email, phone, comments} = req.body
        let newContact = {
            id: globalId,
            name,
            email,
            phone,
            comments
        }
        if(!name || !email || !phone || !comments){
            return res.status(400).send('Missing Field')
        } else{
            contact.push(newContact)
            globalId++
            return res.status(200).send(contact)
        }
    }
}