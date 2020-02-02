
// (((((((((((__EXAMPLE-ONE__)))))))))))
// const btn = document.querySelector('button')

// setTimeout(() => {
//     btn.style.transform = 'translateX(100px)'
//     setTimeout(() => {
//         btn.style.transform = 'translateX(200px)'
//         setTimeout(() => {
//             btn.style.transform = 'translateX(300px)'
//             setTimeout(() => {
//                 btn.style.transform = 'translateX(400px)'
//                 setTimeout(() => {
//                     btn.style.transform = 'translateX(500px)'
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// (((((((((((__EXAMPLE-TWO__)))))))))))
const btn = document.querySelector('button')

const moveX = (element, amount, delay, callback, onSuccess, onFailure) => {
    setTimeout(() => {
        const bodyBoundary = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right
        const currLeft = element.getBoundingClientRect().left
        if (elRight + amount > bodyBoundary) {
            onFailure()
        } else {
            element.style.transform = `translateX(${currLeft + amount}px)`
            onSuccess()
        }
    }, delay)
}

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 200, 1000, () => {
//         moveX(btn, 300, 1000, () => {
//             moveX(btn, 400, 1000), () => {
//                 moveX(btn, 500, 1000)
//             }
//         })
//     })
// })

moveX(btn, 100, 1000, () => {
    // Success
    moveX(btn, 400, 1000, () => {
        // Success
        moveX(btn, 700, 1000, () => {
            console.log('REALLY, WE STILL HAVE SCREEN LEFT?');
        }, () => {
            alert("CAN'T MOVE FURTHER")
        })
    }, () => {
        // Fail
        alert('CANNOT MOVE FURTHER!')
    })
}, () => {
    // Fail
    alert('CANNOT MOVE FURTHER!')
})