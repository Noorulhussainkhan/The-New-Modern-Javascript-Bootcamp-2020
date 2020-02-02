const input = document.querySelector('#username')

input.addEventListener('keydown', (e) => {
    console.log('KEY DOWN');
})

input.addEventListener('keyup', (e) => {
    console.log('KEY UP');
})

input.addEventListener('keypress', (e) => {
    console.log('KEY PRESS');
})