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


function validateUser(loginEmail, password) {

    let checkUser = users.find( ({ email }) => email === loginEmail )

    if (checkUser) {
        if(checkUser.pass === password) {
            console.log('login success, user:', checkUser);
            return `login success, user: ${checkUser}`
        } else {
            console.log('wrong pass, repeat!')
            return 'wrong pass'
        }
    } else {
        return 'user not found'
    }
}

function login() {
    let log = document.getElementById('login').value
    let pass = document.getElementById('password').value
    return validateUser(log, pass)
}

//throw error wrong pass
login('jonh@gmail.com', '0123')


//throw error user not found
login('jonh123@gmail.com', '0123')

//throw hello name + role
login('jonh123@gmail.com', '123456789')

//throw  name, welcome to admin panel,
login('admin@gmail.com', '9876543210')