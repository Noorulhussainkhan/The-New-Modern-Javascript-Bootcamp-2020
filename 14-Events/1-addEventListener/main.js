
/* 
    -- FIRST SELECT THE ELEMET WHICH WE WANT TO ADD EVENT << Then add event to it
    -- WE CAN ADD EVENTS HOW MANY WE WANT TO THE SINGLE ELEMENT
    -- WE CAN WRITE ARROW OF REGULAR FUNCTIONS...
 */

const btn = document.querySelector('button')

// CLICK EVENT
btn.addEventListener('click', function () {
    alert('You Clicked Me')
})

// MOUSEOVER EVENT
btn.addEventListener('mouseover', function () {
    btn.innerText = 'STOP TOUCHING ME!!'
})

// MOUSEOUT EVENT
btn.addEventListener('mouseout', function () {
    btn.innerText = 'Click Me!'
})

// SCROLL EVENT
window.addEventListener('scroll', function () {
    console.log('STOP SCROLLING')
})