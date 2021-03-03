const time = 4000;
let currentImageIndex = 0;
const images = document.querySelectorAll("#slider img");
const dots = document.querySelectorAll("#dots span");
const max = images.length;
const dotsMax = dots.length;
const btnLogin = document.getElementById('login');
const btnRegister = document.getElementById('register');
const inputsRegister = document.getElementById('input-register');
const inputsLogin = document.getElementById('input-login');

console.log(inputsLogin)

function nextImage() {

  images[currentImageIndex].classList.remove("selected");
  dots[currentImageIndex].classList.remove("dot");

  currentImageIndex++

  if (currentImageIndex >= max && currentImageIndex >= dotsMax)
    currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected");
  dots[currentImageIndex].classList.add("dot");
};

function start() {
  setInterval(() => {
    // troca de image
    nextImage()
  }, time)
};

window.addEventListener("load", start);

// console.log(btnLogin.classList)
// console.log(body)

const removeCLassLogin = () => {
  btnLogin.classList.remove('border')
  btnRegister.classList.add('border')
  btnLogin.classList.add('animation-login')
  btnRegister.classList.add('animation-register')
  inputsRegister.classList.remove('none')
  inputsLogin.classList.add('none')
};

const removeCLassRegister = () => {
  btnRegister.classList.remove('border')
  btnLogin.classList.add('border')
  btnLogin.classList.add('back-login')
  btnRegister.classList.add('back-register')
  inputsRegister.classList.add('none')
  inputsLogin.classList.remove('none')

  setTimeout(() => {
    btnLogin.classList.remove('animation-login')
    btnRegister.classList.remove('animation-register')
    btnLogin.classList.remove('back-login')
    btnRegister.classList.remove('back-register')
  }, 3000)


};