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

    //Funciones de la pelota

    //Pintar la pelota
    /*posX y posY van a ser siempre las mismas cuando pintamos la pelota el centro del canvas 
    por ello funcion para coger el centro*/
    centroCanvas() {
        //savo el centro del canvas
        //cojo el canvas
        let canvas  = document.getElementById("tablero");
        //cojo las coordenadas del centro y las devuelvo
        x =  canvas.width / 2;
        y =  canvas.height / 2
        return {x, y} 
    }
    
    pintarPelota(radio = 7){
        const canvas = document.getElementById("tablero");
        const ctx = canvas.getContext("2d");

        //cojo el centro para luego asignar
        const centro = this.centroCanvas();

        this.posX = centro.x;
        this.posY = centro.y;

        ctx.beginPath();

        //ponemos la posicion y el radio 
        ctx.arc(posX, posY, radio, 0 , 2 * Math.PI);
        //pinto
        ctx.stroke();
    }
    moverPelota(){
        //añadimos velocidad
        this.velocidad = 4;
        //actualizamos las coordenadas del objeto
        this.posX += this.velocidad;
        // this.posY += this.velocidad;

        // this.posY += this.velocidad;
        return posX;
    }

    animacionPelota(){
        pintarPelota();
        moverPelota();
        requestAnimationFrame(animacionPelota);
    }


    rebotePelota(){
        
    }
}





