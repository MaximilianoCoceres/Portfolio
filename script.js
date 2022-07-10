const botonLuz = document.querySelector('.lamp-bottom')
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

