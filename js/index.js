

const nav = document.querySelector('.nav')

nav.addEventListener('mouseover', event => {
    event.preventDefault();
    event.target.style.color = '#FFEBCD';
    event.target.style.fontSize = '125%';
        
    nav.addEventListener('mouseout', event=> {
        event.target.style.color = 'initial';
        event.target.style.fontSize = 'initial';
    })
})

nav.addEventListener('mousedown', event =>{
    event.target.style.border = '1px dashed black'

    nav.addEventListener('mouseup', event => {
        event.target.style.border = 'none'
    })
})


const logo = document.querySelector('.logo-heading');

logo.addEventListener('dblclick', event => {
    logo.style.color = 'red';
    logo.textContent = 'I DONT LIKE THAT';

    logo.addEventListener('dblclick', event => {
        logo.style.color = 'initial';
        logo.textContent = 'Fun Bus';
  
    })
})

document.addEventListener('copy', event => {
    alert('🚨 COPYING IS NOT ALLOWED 🚨');
})


document.addEventListener("keydown", event => {
    if(event.key === "q") {
        document.body.style.backgroundColor = "red"
    }
    document.addEventListener("keyup", function(event) {
        if(event.key === "q") {
            document.body.style.backgroundColor = "blue"
            
        } else {document.body.style.backgroundColor = "initial"}
    })
    
})

document.addEventListener('auxclick', event =>{
    alert('What made you think you could right click on my site?');
})
