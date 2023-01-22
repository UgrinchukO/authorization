const popUp = document.getElementById('popup')
const openPopUp = document.getElementById('popup_open')
const closePopUp = document.getElementById('popup_close')


openPopUp.addEventListener('click', function (e) {
    e.preventDefault()
    popUp.classList.add('active')
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})


const users = [{
    name: "Jonh",
    email: "jonh@gmail.com",
    role: "user",
    pass: "123456789"
},
    {
        name: "Admin",
        email: "admin@gmail.com",
        role: "admin",
        pass: "9876543210"
    }]

function login(email, pass) {
    let inputLogin = document.getElementById('login')
    let inputPassword = document.getElementById('password')

    let checkUser = users.find(user => user.email)
    let checkPass = users.find(user => user.pass)

    if (inputLogin.value === checkUser.email
        &&
        inputPassword.value === checkPass.pass) {
        console.log('correct')
    }
    console.log("incorrect")
}

//throw error wrong pass
login('jonh@gmail.com', '0123')


//throw error user not found
login('jonh123@gmail.com', '0123')

//throw hello name + role
login('jonh123@gmail.com', '123456789')

//throw  name, welcome to admin panel,
login('admin@gmail.com', '9876543210')