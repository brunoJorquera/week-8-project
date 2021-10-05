const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const phone = document.querySelector('#phone').value
    const comments = document.querySelector('#comments').value

    axios.post('/contact', {name,email,phone,comments})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
})