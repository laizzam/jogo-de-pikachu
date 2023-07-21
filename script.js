const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const wing = document.querySelector('.wing');
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
     
    }, 500);
    }
const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft
    console.log(pipePosition)
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');

    console.log(marioPosition);
if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'Cute-Pikachu-PNG-Clipart.png';
        mario.style.width = '120px'
        mario.style.marginLeft = '1px'

 }

    const wingPosition = wing.offsetLeft

     if(wingPosition <= 120 && wingPosition > 0 && marioPosition < 80) {
        wing.style.left = `${wingPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'Cute-Pikachu-PNG-Clipart.png';
        mario.style.width = '120px'
        mario.style.marginLeft = '1px'
     }
}, 10);
document.addEventListener("keydown", jump);

function reiniciar() {
    window.location.reload();
}
