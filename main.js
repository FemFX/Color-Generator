
const hex = document.querySelector('#hex');
const btn = document.querySelector('button');
let color,random,symbol
const symbols = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
function getRandomInt(min, max) {
    random =  Math.floor(Math.random() * (max - min)) + min;
    symbol = symbols[random]
    
}

btn.addEventListener('click', ()=>{
    color = '#'
    for (let i = 0; i < 6; i++) {
        getRandomInt(1,14)
        color +=symbol
         
        
    }
    document.body.style.background = color
    hex.innerHTML = color
})
