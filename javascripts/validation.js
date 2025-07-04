const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname')
const lastname_input = document.getElementById('lastname')
const emailInput = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const passwordConfirm = document.getElementById('password-confirm')
const errormessage = document.getElementById('error-message')
form.addEventListener('submit', (e) => {
  // e.preventDefault()


  let errors = [];

  if (firstname_input) {
    //if we have a first name it means we are in the create account page

    errors = getSignupFormErrors(firstname_input.value, lastname_input.value, emailInput.value, password_input.value, passwordConfirm.value)
  }
  else {
    //it means we are in the login page

    errors = getLoginFormsErrors(emailInput.value, password_input.value)
  }

  if (errors.length > 0) {
    e.preventDefault()
    errormessage.innerText = errors.join('. ')

  }

})

function getSignupFormErrors(firstname, lastname, email, password, repeatpassword) {
  let errors = []

  if (firstname === '' || firstname === null) {
    errors.push('Firstname is required')
    firstname_input.parentElement.classList.add('incorrect')
  }
  if (lastname === '' || lastname === null) {
    errors.push('Lastname is required')
    lastname_input.parentElement.classList.add('incorrect')
  }
  if (email === '' || email === null) {
    errors.push('Email is required')
    emailInput.parentElement.classList.add('incorrect')
  }
  if (password === '' || password === null) {
    errors.push('password is required')
    password_input.parentElement.classList.add('incorrect')

  }
  if (repeatpassword === '' || repeatpassword === null) {
    errors.push('enter password again')
    passwordConfirm.parentElement.classList.add('incorrect')

  }

  if (password.length < 8) {
    errors.push('Password is too short')
    password_input.parentElement.classList.add('incorrect')
  }
  if (password !== repeatpassword) {
    errors.push('Password does not match')
    password_input.parentElement.classList.add('incorrect')
    passwordConfirm.parentElement.classList.add('incorrect')
  }


  return errors;

}

function getLoginFormsErrors(email, password) {

  const errors = []

  if (email === '' || email === null) {
    errors.push('Email is required')
    emailInput.parentElement.classList.add('incorrect')
  }
  if (password === '' || password === null) {
    errors.push('password is required')
    password_input.parentElement.classList.add('incorrect')

  }

  if (password.length < 8) {
    errors.push('Password is too short')
    password_input.parentElement.classList.add('incorrect')
  }
  return errors;
}


const allInputs = [firstname_input, lastname_input, emailInput, password_input, passwordConfirm].filter(input => input != null);

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.parentElement.classList.contains('incorrect')) {
      input.parentElement.classList.remove('incorrect')
      errormessage.innerHTML = ''
    }
  })
})