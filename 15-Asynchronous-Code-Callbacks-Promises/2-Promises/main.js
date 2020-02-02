/*
   -- TO CREATE A PROMISE FIRST WE HAVE TO WRITE A (NEW PROMISE) KEYWORD
   -- AS A PERAMETER WE HAVE TO FUNCTIONS(RESOLVE & REJECT)
 */

const willGetYouDog = new Promise((resolve, reject) => {
    const rand = Math.random()
    if (rand < 0.5) {
        resolve()
    } else {
        reject()
    }
})

// THIS CODE WILL RUN IF OUR PROMISE HAVE RESOLVE
willGetYouDog.then(() => {
    console.log("YAY WE GOT A DOG");
})

// THIS CODE WILL RUN IF OUR PROMISE HAVE REJECT
willGetYouDog.catch(() => {
    console.log(":( NO DOG");
})