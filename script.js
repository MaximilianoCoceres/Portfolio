const botonLuz = document.querySelector('.btn')
const luzEncendida = document.querySelector('.lamp-light')
const contenedor = document.querySelector('.contenedor')

encenderLuz=()=>{
    luzEncendida.classList.toggle('open')
    if(botonLuz.contains.toggle('open')){
        luzEncendida.classList.add('open');
    }else{
        luzEncendida.classList.remove('open');
    }
}

botonLuz.addEventListener('click', encenderLuz);



mostrarPersonaje=()=>{
    contenedor.classList.toggle('open')
    if(luzEncendida.contains.toggle('open')){
        contenedor.classList.add('open')
    }else{
        contenedor.classList.remove('open')
    }
}

botonLuz.addEventListener('click',mostrarPersonaje);

let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let audio = document.querySelector('#audio');
btn.onclick= function(){
    body.classList.toggle('on');
    audio.play();
}