const vacations = [
    'Manitou Springs',
    'Belton Lake',
    'Samana'
]

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
    }
}