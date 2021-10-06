class Tablero {
    constructor(inicioX, inicioY, cantFichas, context){ 
        this.inicioX = inicioX; //posicion inicial de x para dibujar
        this.inicioY = inicioY; //posicion inicial de y para dibujar
        this.cantFichas = cantFichas; //objetivo que desea el usuario (4, 5..etc)
        this.ctx = context;
        this.celda = new Celda(80,80,"img/tablero.png"); //instancia de una celda que va a representar el fondo del tablero
        this.matriz = [];
        this.carga = true;
    }

    crearMatriz(){
        let x = this.getX();
        let y = this.getY();
        let ancho = this.celda.getAncho(); 
        let alto = this.celda.getAlto();

        for(let i = 0; i <this.cantFichas + 3; i++){ //+3 y +2 en los for son para que el tablero se ajuste dependiendo de la cantidad de fichas 
            this.matriz[i] = [];
            for(let j = 0; j < this.cantFichas + 2; j++){
                this.matriz[i][j] = 0;
                this.celda.drawCelda(x, y, ctx); //dibujo la celda
                y = y + alto; //posicion final de la y se convierte en posicion inicial de la proxima celda en y
            }
            y = this.getY(); //reseteo el valor de y a su valor inicial
            x = x + ancho; // posicion final de la x se convierte en posicion inicial de la proxima celda en x
        }
    }
    drawTablero(){
        let x = this.getX();
        let y = this.getY();
        let ancho = this.celda.getAncho(); 
        let alto = this.celda.getAlto();

        for(let i = 0; i <this.cantFichas + 3; i++){ 
            for(let j = 0; j < this.cantFichas + 2; j++){
                if(this.carga){
                    this.celda.drawCelda(x, y, ctx); 
                }else{
                    this.celda.cargarCelda(x, y, ctx); 
                }
                y = y + alto; 
            }
            y = this.getY(); 
            x = x + ancho; 
        }
    }

    setCarga(valor){
        this.carga = valor;
    }
   

    //getters y setters 
    getX(){
        return this.inicioX;
    }
    getY(){
        return this.inicioY;
    }
    // getAncho(){
    //     // @ts-ignore
    //     return this.ancho;
    // }
    // getAlto(){
    //     // @ts-ignore
    //     return this.alto;
    // }

    // Nosotros tenemos el tablero con 7x6
    // Para saber dónde va cada ficha, tendríamos que hacer una matriz copia con el tablero y sus ocupaciones e ir actualizando
}

