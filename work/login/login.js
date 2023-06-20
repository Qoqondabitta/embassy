// console.log(forma);
const forma = document.forms.login
const boxHolder = document.querySelector('#boxHolder')
const boxItem = document.querySelectorAll('.boxItems')
const character = document.querySelector('#character')
forma[0].onblur = (event)=>{
    if (event.target.value.length===0) {
        character.innerHTML = 'The blank should not be empty! Enter your email address.'
        character.style.color = 'red'
        character.style.fontSize = '25px'
    } else if(!event.target.value.includes('@')) {
        character.innerHTML = `Email Address should include "@". "${event.target.value}" does not include "@"`
        character.style.color = 'red'
        character.style.textAlign = 'center'
        if(event.target.value.length>15){
            character.style.fontSize = '20px'
            character.style.width = '650px'
        } else {
            character.style.fontSize = '25px'
        }
    } 
    
}
forma[0].onfocus = ()=>{
    character.innerHTML = null
}

