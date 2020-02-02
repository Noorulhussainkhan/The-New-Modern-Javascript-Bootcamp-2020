const range = document.querySelector('input[type="range"]')
// console.log(range);

console.log(range.getAttribute('max'))
console.log(range.getAttribute('min'))
console.log(range.getAttribute('type'))
console.log(range.getAttribute('lol')) // null
range.setAttribute('min', '-500')
console.log(range)
console.log(range.value)
range.setAttribute('type', 'radio')
console.log(range)
