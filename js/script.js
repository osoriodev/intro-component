const logup = document.querySelector('.logup')

const logupElements = [
  {
    field: document.getElementById('firstname'),
    message: document.getElementById('firstname-message')
  },
  {
    field: document.getElementById('lastname'),
    message: document.getElementById('lastname-message')
  },
  {
    field: document.getElementById('email'),
    message: document.getElementById('email-message')
  },
  {
    field: document.getElementById('password'),
    message: document.getElementById('password-message')
  }
]

const logupBtn = document.querySelector('.logup__btn')

const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/

const inputs = {
  firstname: false,
  lastname: false,
  email: false,
  password: false
}

const displayError = element => {
  element.field.classList.add('logup__input--warning')
  element.message.classList.add('logup__error--active')
  inputs[element.field.name] = false
}

const hideError = element => {
  element.field.classList.remove('logup__input--warning')
  element.message.classList.remove('logup__error--active')
  inputs[element.field.name] = true
}

const isAnEmail = email => re.test(email)

const validateForm = () => {
  logupElements.forEach(element => {
    if (!(element.field.name === 'email')) {
      if (element.field.value === '') {
        displayError(element)
      } else {
        hideError(element)
      }
    } else {
      if (element.field.value === '') {
        element.message.innerText = 'Email cannot be empty'
        displayError(element)
      } else if (!isAnEmail(element.field.value)) {
        element.message.innerText = 'Looks like this is not an email'
        displayError(element)
      } else {
        hideError(element)
      }
    }
  })

  if (inputs.firstname && inputs.lastname && inputs.email && inputs.password) {
    logup.reset()
  }
}

logupBtn.addEventListener('click', e => {
  e.preventDefault()
  validateForm()
})
