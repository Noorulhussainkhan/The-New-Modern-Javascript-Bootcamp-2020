const firstLi = document.querySelector('li')

    // ************* PARENT ELEMENTS *************
// console.log(firstLi);
// console.log(firstLi.parentElement); // Parent Element >> ul
// console.log(firstLi.parentElement.parentElement); // Parent Element >> body
// console.log(firstLi.parentElement.parentElement.parentElement); // Parent Element >> html
// console.log(firstLi.parentElement.parentElement.parentElement.parentElement); // Parent Element >> null

    // ************* CHILDREN *************
// const ul = document.querySelector('ul')
// console.log(ul.children)
// console.log(ul.children[0])
// console.log(ul.children[0].innerText)


    // ************* NEXT ELEMENT SIBLING *************
// console.log(firstLi.nextElementSibling) // Next Element >> li
// console.log(firstLi.nextElementSibling.nextElementSibling) // Next Element >> li.special

    // ************* PREVIOUS *************
// const thirdLi = firstLi.nextElementSibling.nextElementSibling
// console.log(thirdLi)
// console.log(thirdLi.previousElementSibling)
// console.log(thirdLi.previousElementSibling.previousElementSibling)