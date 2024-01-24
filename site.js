
const h1 = document.querySelector('h1')
h1.textContent = "Aiden's lame webpage!"

const copyright = document.querySelector('footer p')
copyright.textContent = "BLA"

const link = document.querySelector('.active')
link.style.color = "#ff0000"
link.style.textDecoration = "underline"

const contactLink = document.querySelector('#contact')
contactLink.style.fontWeight = "bold"
contactLink.style.fontFamily = "georgia"
contactLink.style.textTransform = "uppercase"

const links = document.querySelectorAll('nav a')
//links.forEach(link => link.style.display = 'none') 