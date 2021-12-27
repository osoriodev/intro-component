const logup = document.querySelector('.logup')

const logupElements = [
  {
    field: document.getElementById('firstname'),
    icon: document.getElementById('firstname-icon'),
    message: document.getElementById('firstname-message')
  },
  {
    field: document.getElementById('lastname'),
    icon: document.getElementById('lastname-icon'),
    message: document.getElementById('lastname-message')
  },
  {
    field: document.getElementById('email'),
    icon: document.getElementById('email-icon'),
    message: document.getElementById('email-message')
  },
  {
    field: document.getElementById('password'),
    icon: document.getElementById('password-icon'),
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
  element.icon.classList.add('logup__icon--warning')
  element.message.classList.add('logup__message--warning')
  inputs[element.field.name] = false
}

const hideError = element => {
  element.field.classList.remove('logup__input--warning')
  element.icon.classList.remove('logup__icon--warning')
  element.message.classList.remove('logup__message--warning')
  inputs[element.field.name] = true
}

const isAnEmail = email => re.test(email)

const validateForm = () => {
  logupElements.forEach(element => {
    if (element.field.name === 'email') {
      if (element.field.value === '') {
        element.message.innerText = 'Email cannot be empty'
        displayError(element)
      } else if (!isAnEmail(element.field.value)) {
        element.message.innerText = 'Looks like this is not an email'
        displayError(element)
      } else {
        hideError(element)
      }
    } else {
      if (element.field.value === '') displayError(element)
      else hideError(element)
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
