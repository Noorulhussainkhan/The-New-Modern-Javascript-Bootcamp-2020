const todo = document.querySelector('#todos .todo')

    // BAD WAY
// todo.style.color = 'gray'
// todo.style.textDecoration = 'line-through'
// todo.style.opacity = '50%'

// console.log(todo.classList)

// ********** ADDING CLASSES **********
console.log(todo.classList.add('done'))
// ********** REMOVING CLASSES **********
console.log(todo.classList.remove('done'))
// ********** TOGGLE CLASSES **********
console.log(todo.classList.toggle('done'))
