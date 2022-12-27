const divContainer = document.createElement('div')
divContainer.classList.add('container')
const header = document.createElement('header')
header.classList.add('flex')
const divImg = document.createElement('div')
divImg.classList.add('img')
divImg.innerHTML ='<img src="./style/img/logo.png" alt="">'
const nav = document.createElement('nav')
nav.classList.add('ulDiv')
const ul = document.createElement('ul')
ul.classList.add('flex','ulx')
const li = document.createElement('li')
li.setAttribute('id', 'home')
li.innerText = 'Home'
const li2 = document.createElement('li')
li2.setAttribute('id','FAQ')
li2.innerText = 'FAQ'
const li3 = document.createElement('li')
li3.innerText = 'Contact'
const div2 = document.createElement('div')
div2.classList.add('socIcons')
div2.innerHTML = `<i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-linkedin-in"></i> `
const hamburger = document.createElement('span')
hamburger.innerHTML = ' <span class="flex spani"><i class="fa-solid fa-bars"></i>  <ul class=" ulx"> <li id="home">Home</li><li id="FAQ">FAQ</li><li>Contact</li></ul></span> '
document.body.prepend(divContainer)
divContainer.prepend(header)
ul.appendChild(li)
ul.appendChild(li2)
ul.appendChild(li3)

header.appendChild(divImg)
header.appendChild(ul)
header.appendChild(nav)
header.appendChild(hamburger)
nav.appendChild(ul)
header.appendChild(div2)
console.log(div2)


document.getElementById('FAQ').onclick = function () {
    location.href = 'FAQ.html'
}
document.getElementById('home').onclick = function () {
    location.href = 'index.html'
}

const icon = document.querySelector('.fa-bars')
let iconToggle = true
icon.addEventListener('click', (e) => {
    if (iconToggle) {
        x = e.target.nextElementSibling
        x.style.visibility = 'visible'
        iconToggle = false
    }
    else {
        x = e.target.nextElementSibling
        x.style.visibility = 'hidden'
        iconToggle = true
    }
})

let btn = document.getElementsByClassName("btn");
let i;

for (i = 0; i < btn.length; i++) {
btn[i].addEventListener("click", function() {
    let p = this.nextElementSibling;
    if (p.classList.contains("ptaganimation")) {
    p.classList.remove("ptaganimation");
    } else {
        p.classList.add("ptaganimation");
    }
});
}

let del = document.querySelectorAll('.del')
for (let i of del){
i.addEventListener('click', function ()   {
    
        x = this.parentElement;
        y = this.parentElement.previousElementSibling;
        x.classList.add('displaynone')
        y.classList.add('displaynone')
})
}
    

const form = document.querySelector('.form')
const savebut = document.querySelector('.savebut')
const output = document.querySelectorAll('.output')
const fname = document.querySelector('.fname')
const lname = document.querySelector('.lname')
const pnum = document.querySelector('.pnum')
const City = document.querySelector('.City')
const Email = document.querySelector('.Email')
const Aboutme = document.querySelector('.Aboutme')
let arr=[]

savebut.addEventListener('click', (event) => {
    event.preventDefault();
    
    if ((fname.value) && (lname.value) && (pnum.value) && (City.value) && (Email.value) && (Aboutme.value)) {
        let obj = {
            fname: fname.value.trim(),
            lname: lname.value.trim(),
            pnum: pnum.value.trim(),
            City: City.value.trim(),
            Email: Email.value.trim(),
            Aboutme: Aboutme.value.trim(),
        }
        arr.push(obj)
        localStorage.setItem('obj', JSON.stringify(arr))
        console.log(localStorage)
    }
    else {
        alert(' Please fill out the form fully')
    }
    location.reload();
})

for (let x of output) {
    key = JSON.parse(localStorage.getItem("obj"))
    if (key){
    if (x.classList.contains('fname')) {
        x.innerText +=` ${key[0].fname}`
    }
    else if (x.classList.contains('lname')) {
        x.innerText +=` ${key[0].lname}`
    }
    else if (x.classList.contains('pnum')) {
        x.innerText +=` ${key[0].pnum}`
    }
    else if (x.classList.contains('City')) {
        x.innerText +=` ${key[0].City}`
    }
    else if (x.classList.contains('Email')) {
        x.innerText +=` ${key[0].Email}`
    }
    else if (x.classList.contains('Aboutme')) {
        x.innerText +=` ${key[0].Aboutme}`
        }
    else {
        console.log('aqac gaviare')
    }
    }
    else {
        console.log('No data in array')
    }
}

const deletebtn = document.querySelector('.deleteBtn')
deletebtn.addEventListener('click', () => { 
    localStorage.clear()
    console.log(localStorage)
    location.reload()

})