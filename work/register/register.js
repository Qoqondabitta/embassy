// console.log(register);
// console.log(email);
// console.log(password);
// console.log(confirm);
const register = document.forms.register
const email = register.email
const password = register.password
const confirm = register.passwordConfirm
const boxHolder = document.querySelector('#boxHolder')
const boxItems = document.querySelectorAll('#boxItems')
const character = document.querySelector('#character')
// const strength = document.querySelector('#strength')
const btn = document.querySelector('#send')
btn.disabled = true
email.onblur = (event)=>{
    if(event.target.value.length===0){
        character.innerHTML = 'The blank should not be empty! Enter your email address.'
        character.style.color = 'red'
        character.style.fontSize = '25px'
    } else if(!event.target.value.includes('@')){
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
email.onfocus = ()=>{
    character.innerHTML = null
}
const validatePassword = (value)=>{
    if(value.length>1 && value.length>=8 
        && ( value.includes('@') || value.includes('!') ||value.includes('#') ||value.includes('$') 
        ||value.includes('%') ||value.includes('^') ||value.includes('&') ||value.includes('*') ||value.includes('(') 
        ||value.includes(')') ||value.includes('_') ||value.includes('-') ||value.includes('=') ||value.includes('+') 
        ||value.includes('/') ||value.includes('?') ||value.includes('>') ||value.includes('<') ||value.includes('.') 
        ||value.includes(',')) 
        && ( value.includes('0') || value.includes('1') || value.includes('2') || value.includes('3') || value.includes('4') 
        || value.includes('5') || value.includes('6') || value.includes('7') || value.includes('8') || value.includes('9') )  ){   
        boxItems[0].style.backgroundColor = 'blue'        
        boxItems[1].style.backgroundColor = 'blue'
        boxItems[2].style.backgroundColor = 'blue'        
        boxItems[3].style.backgroundColor = 'blue'
        btn.disabled = false
        return {message : 'Too Strong Password'}
    } if(value.length>1 && value.length>=8 
        && ( value.includes('@') || value.includes('!') ||value.includes('#') ||value.includes('$') 
        ||value.includes('%') ||value.includes('^') ||value.includes('&') ||value.includes('*') ||value.includes('(') 
        ||value.includes(')') ||value.includes('_') ||value.includes('-') ||value.includes('=') ||value.includes('+') 
        ||value.includes('/') ||value.includes('?') ||value.includes('>') ||value.includes('<') ||value.includes('.') 
        ||value.includes(',')) ){   
        boxItems[0].style.backgroundColor = 'green'        
        boxItems[1].style.backgroundColor = 'green'
        boxItems[2].style.backgroundColor = 'green'        
        boxItems[3].style.backgroundColor = 'green'
        btn.disabled = true
        return {message : 'Strong Password'}
    } else if(value.length===0){
        boxHolder.style.display = 'none'
        boxItems[0].style.backgroundColor = 'rgba(172, 165, 165, 0.715)'        
        boxItems[1].style.backgroundColor = 'rgba(172, 165, 165, 0.715)'
        boxItems[2].style.backgroundColor = 'rgba(172, 165, 165, 0.715)'        
        boxItems[3].style.backgroundColor = 'rgba(172, 165, 165, 0.715)'
        btn.disabled = true
        return {message:''}
    } else {
        boxItems[0].style.backgroundColor = 'yellow'        
        boxItems[1].style.backgroundColor = 'yellow'
        boxItems[2].style.backgroundColor = 'white'        
        boxItems[3].style.backgroundColor = 'white'
        btn.disabled = true
        return {message:'Normal Password'}
    }
}
register[2].addEventListener('input', ({target:{value}})=>{
    strength.innerText = validatePassword(value).message
    strength.style.color= 'skyblue'
    strength.style.fontSize= '25px'
    boxHolder.style.display = 'block'
    boxHolder.style.cssText = `
        display : flex;
        column-gap : 5px
    `   
})
// register[2].onblur=(){
//     boxHolder.innerHTML = null
// }