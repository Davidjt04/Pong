class Pelota{
    velocidad;
    vectorDireccion;
    posY;
    posX;
    radio;

    //Constructor
    constructor(velocidad,vectorDireccion,posY = 20,posX = 20,radio){
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
        let x =  canvas.width / 2;
        let y =  canvas.height / 2
        return {x, y} 
    }
    
    pintarPelota(){
        this.radio = 7;
        const canvas = document.getElementById("tablero");
        const ctx = canvas.getContext("2d");

        //cojo el centro para luego asignar
        const centro = this.centroCanvas();

        // this.posX = centro.x;
        // this.posY = centro.y;

        ctx.beginPath();

        //ponemos la posicion y el radio 
        ctx.arc(this.posX, this.posY, this.radio, 0 , 2 * Math.PI);
        //pinto
        ctx.stroke();
    }
    moverPelota(){
 
        //añadimos velocidad
        this.velocidad = 2;
        //borrrar el canvas para no dejar rastro 

        //actualizamos las coordenadas del objeto
        this.posX += this.velocidad;
        // this.posY += this.velocidad;

        // this.posY += this.velocidad;
    }

    animacionPelota = () => {
        const canvas = document.getElementById("tablero");
        const ctx = canvas.getContext("2d");

        // Borra el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.pintarPelota();
        this.moverPelota();
        requestAnimationFrame(this.animacionPelota);
    };




    // rebotePelota(){
        
    // }
}





