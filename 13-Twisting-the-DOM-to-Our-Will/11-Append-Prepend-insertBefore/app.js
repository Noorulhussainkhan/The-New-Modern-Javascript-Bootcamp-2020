const parentUl = document.querySelector('ul')
const newLi = document.createElement('li')
newLi.innerText = 'I am a new Li'
const firstLi = document.querySelector('li.todo')
parentUl.insertBefore(newLi, firstLi)