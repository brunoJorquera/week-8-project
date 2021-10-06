const msBtn = document.getElementById("ms-btn")
const blBtn = document.getElementById("bl-btn")
const samBtn = document.getElementById("sam-btn")
const listContainer = document.getElementById("list-display")
const vacationForm = document.getElementById("add-list-form")
const locoBtn = document.getElementById("loco-btn")
const randomList = document.getElementById("rando-sect")

const deleteBtn = document.getElementById("delete-btn")

msBtn.addEventListener('click', (e) => {
    e.preventDefault()
    axios.get("/manitou-springs")
        .then(res => {

            const vacationElement = document.createElement('li')

            vacationElement.textContent = res.data
            listContainer.append(vacationElement)

            vacationElement.addEventListener('click', deleteItem)
            vacationElement.setAttribute("id", "chimichanga")
        })
        .catch(err => console.log(err))
})

blBtn.addEventListener('click', (e) => {
    e.preventDefault()
    axios.get("/belton-lake")
        .then(res => {

            const vacationElement = document.createElement('li')

            vacationElement.textContent = res.data
            listContainer.append(vacationElement)

            vacationElement.addEventListener('click', deleteItem)
            vacationElement.setAttribute("id", "chimichanga")
        })
        .catch(err => console.log(err))
})

samBtn.addEventListener('click', (e) => {
    e.preventDefault()
    axios.get("/samana")
        .then(res => {

            const vacationElement = document.createElement('li')
  
            vacationElement.textContent = res.data
            listContainer.append(vacationElement)
      
            vacationElement.addEventListener('click', deleteItem)
            vacationElement.setAttribute("id", "chimichanga")
        })
        .catch(err => console.log(err))
})

locoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    axios.get("/loco")
        .then(res => {
            randomList.innerHTML = ''
            const vacationElement = document.createElement('p')
            vacationElement.textContent = res.data
            randomList.append(vacationElement)
            randomList.addEventListener('click', deleteItem)
            vacationElement.setAttribute('id', 'elimination')
        })
        .catch(err => console.log(err))
})

function deleteItem(e){
    e.preventDefault()
    e.target.remove()
}