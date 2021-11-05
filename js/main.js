const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const buttonOut = document.querySelector('.button-out')
const spanUsername = document.querySelector('.user-name')

const logInForm = document.getElementById('logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')

const login = (user) => {

    let userLogin = user.login;

    if(!userLogin){
        window.alert('Введите логин!')
    } else {
        buttonAuth.style.display = 'none'

        buttonOut.style.display = 'flex'
        spanUsername.textContent = userLogin
        spanUsername.style.display = 'flex'

        modalAuth.style.display = 'none'
    }
}

const logout = () => {
    buttonAuth.style.display = 'flex'

    buttonOut.style.display = 'none'
    spanUsername.style.display = 'none'
    spanUsername.textContent = ''
}

buttonAuth.addEventListener('click', evt => {
    modalAuth.style.display = 'flex'
})

closeAuth.addEventListener('click', evt => {
    modalAuth.style.display = 'none'
})

logInForm.addEventListener('submit', ev => {
    ev.preventDefault()

    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }

    localStorage.setItem('user', JSON.stringify(user))
    login(user)
})

buttonOut.addEventListener('click', evt => {
    localStorage.removeItem('user')
    logout()
})

let user = localStorage.getItem('user');
if(user){
    login(JSON.parse(user))
}
