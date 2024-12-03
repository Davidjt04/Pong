class Pelota{
    velocidad;
    vectorDireccion;
    posY;
    posX;
    radio;

    //Constructor
    constructor(velocidad,vectorDireccion,posY,posX,radio){
        this.velocidad = velocidad;
        this.vectorDireccion = vectorDireccion;
        this.posY = posY;
        this.posX = posX;
        this.radio = radio;
    }
}

//Funciones de la pelota

//Pintar la pelota
function pintarPelota(){
    const canvas = document.getElementById("tablero");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    //ponemos la posicion y el radio 
    ctx.arc(posX, posY, radio, 0 , 2 * Math.PI);
    //pinto
    ctx.stroke();
}

function rebotePelota(){
    
}



