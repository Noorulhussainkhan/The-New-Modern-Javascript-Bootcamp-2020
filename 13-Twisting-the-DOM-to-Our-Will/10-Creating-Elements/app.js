
    // CREATING ELEMENT
    const newH2 = document.createElement('h2');
    // ADDING TEXT IN ELEMENT
    newH2.innerText = 'I like animals'
    // ADDING CLASS TO THE ELEMENT
    newH2.classList.toggle('special')
    // SELECTING ELEMENT TO APPEND/PREPEND WITH
    const section = document.querySelector('section')
    // APPENDING OUR ELEMENT TO SECTION
    section.append(newH2)
    
console.log(newH2);