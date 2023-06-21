const all = document.querySelectorAll('.all')
console.log(all);
const secondDiscount = document.querySelector('.secondDiscount')
const thirdDiscount = document.querySelector('.thirdDiscount')
const next = document.querySelector('#next')
const prev = document.querySelector('#previous')
// =====================Header slider start==================================
// ==========================================================================
const buttonPress = (type)=>{
    for(i=0;i<all.length;i++){
        if(all[i].getAttribute('class').includes('active')){
            if(type==='next'){
                if(all[all.length-1].getAttribute('class').includes('active')){
                    all[0].classList.add('active')
                    all[all.length-1].classList.remove('active')
                } else {
                    all[i+1].classList.add('active')
                    all[i].classList.remove('active')
                }
            } else if(type==='prev'){
                if(all[i]=== all[0]){
                    all[all.length-1].classList.add('active')
                    all[i].classList.remove('active')
                } else{
                    all[i-1].classList.add('active')
                    all[i].classList.remove('active')
                }
            }
            break
        }
    }
}
next.addEventListener('click', ()=>buttonPress('next'))
prev.addEventListener('click', ()=>buttonPress('prev'))
// =====================Header slider end==================================
// ==========================================================================
