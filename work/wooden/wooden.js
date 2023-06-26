const superHeaderNextButton = document.querySelector('#superHeaderNextButton')
// const superHeaderButton2 = document.querySelector('#superHeaderButton2')
// const superHeaderButton3 = document.querySelector('#superHeaderButton3')
const superHeaderButton = document.querySelector('#superHeaderButton')
const float = document.querySelectorAll('.buttonName')
const nextSlide = ()=>{
    for(i=0; i<float.length;i++){
        if(float[i].getAttribute('class').includes('active')){
            if(float[i]===float[float.length-1]){
                float[0].classList.add('active')
                float[i].classList.remove('active')
            } else {
                float[i+1].classList.add('active')
                float[i].classList.remove('active')
            }
            break
        }
    }
}
const previousSlide=()=>{
    for(i=0; i<float.length;i++){
        if(float[i].getAttribute('class').includes('active')){
            if(float[i]===float[0]){
                float[float.length-1].classList.add('active')
                float[0].classList.remove('active')
            } else {
                float[i-1].classList.add('active')
                float[i].classList.remove('active')
            }
            break
        }
    }
}
superHeaderButton.addEventListener('click', previousSlide)
superHeaderNextButton.addEventListener('click', nextSlide)
// superHeaderButton2.addEventListener('click', nextSlide)
// superHeaderButton3.addEventListener('click', nextSlide)