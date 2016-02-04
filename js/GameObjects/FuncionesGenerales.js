FuncionesGenerales = function ( ga ) {
  this.game = ga;
};
    /**
     * devuelve un numero que es la posicion de la pantalla en ese porcentaje
     * si quiero saber cual es la X que esta en la mitad de la pantalla: posisionPantallaX(50);
     * por default devuelve la mitad de la pantalla lo que es igual a hacer (this.game.world.height/2);
     * @param Number percent el porcentaje de la pantalla a devolver
     * @return  Number
     */
    FuncionesGenerales.prototype.posisionPantallaX = function ( cuanto ) {
      cuanto = cuanto || 50;
      return Math.floor( ( ( cuanto * this.game.world.width ) / 100 ) );
    }
    /**
     * devuelve un numero que es la posicion de la pantalla en ese porcentaje
     * si quiero saber cual es la Y que esta en la mitad de la pantalla: posisionPantallaY(50);
     * por default devuelve la mitad de la pantalla lo que es igual a hacer (this.game.world.width/2);
     * @param Number percent el porcentaje de la pantalla a devolver
     * @return  Number
     */
    FuncionesGenerales.prototype.posisionPantallaY = function ( cuanto ) {
      cuanto = cuanto || 50;
      return Math.floor( ( ( cuanto * this.game.world.height) / 100 ) );
    }
    /** 
    * Generates a truly "random" number
    * @return Random Number
    */ 
    FuncionesGenerales.prototype.randomNumber = function ( low, high ) {
      low = low || 0;
      high = high || 1;
      return Math.floor(Math.random() * (1+high-low)) + low;
    }
    /**
     * devulve un color (uint) de los 6 posibles de FlxG, si el parametro es true entonces NO devuelve ni Blanco ni Negro
     * [1- negro] - [2- blanco] - [3- azul] - [4- verde] - [5- rosa] - [6- rojo]
     * @param safe boolean por default puede devolver el color blanco o negro
     * @return color uint del color
     */
    FuncionesGenerales.prototype.getRandomColorFG = function ( safe ) {
      safe = safe || false;
      var col = 0x0000FFFF;//amarillo
      var n = randomNumber(1, 6);
      if (safe == true) {
        n = randomNumber(3, 6);
      }
      switch(n) {
        case 1:
          col = 0x00000000;//negro
        break;
        case 2:
          col = 0x00ffffff;//blanco
        break;
        case 3:
          col = 0x000000ff;//azul
        break;
        case 4:
          col = 0x0000ff00;//verde
        break;
        case 5:
          col = 0x00ff00ff;//rosa
        break;
        case 6:
          col = 0x00ff0000;//rojo
        break;
      }
      return col;
    }
    /**
     * devulve un color demasiado random
     * @return color uint del color
     */
    FuncionesGenerales.prototype.getRandomColorRGB = function () {
      var col = 0x0000FFFF;//amarillo
      var r = randomNumber(0, 255);
      var g = randomNumber(0, 255);
      var b = randomNumber(0, 255);
//      col = FlxU.makeColor(r, g, b);
      return col;
    }
    /**
     * devulve un color con los RGB
     * @param red uint el numero del color ROJO, entre 0 y 255
     * @param green uint el numero del color VERDE, entre 0 y 255
     * @param blue uint el numero del color AZUL, entre 0 y 255
     * @return color uint del color
     */
    FuncionesGenerales.prototype.getColorRGB = function ( red, green, blue ) {
      var col = 0x0000FFFF;//amarillo
      var r = 127;
      var g = 127;
      var b = 127;
      if (red >= 0 && red <= 255)
        r = red;
      if (green >= 0 && green<= 255)
        g = green;
      if (blue >= 0 && blue <= 255)
        b = blue;
//      col = FlxU.makeColor(r, g, b);
      return col;
    }
    /**
     * devulve un color (uint) mas los 6 posibles de FlxG:
     * [1: negro] - [2: blanco] - [3: azul] - [4: verde] - [5: rosa] - [6: rojo] - [7- amarrillo] - [8- naranja] - [9- celeste] - [10- azul oscuro] - [11- verde claro] - [12- verde oscuro] - [13- violeta]
     * @param n number el numero del color  [1- negro] - [2- blanco] - [3- azul] - [4- verde] - [5- rosa] - [6- rojo]
     * [7- amarrillo] - [8- naranja] - [9- celeste] - [10- azul oscuro] - [11- verde claro] - [12- verde oscuro] - [13- violeta]
     * @return color uint del color
     */
    FuncionesGenerales.prototype.getColorByNumberFG = function ( n, alpha ) {
      n = n || 0;
      a = (alpha === undefined) ? false : alpha;
      var col = 0x00FFFF;//amarillo
      switch(n) {
        case 1:
//          col = 0x00000000;//negro
          col = 0x000000;//negro
        break;
        case 2:
//          col = 0x00ffffff;//blanco
          col = 0xffffff;//blanco
        break;
        case 3:
//          col = 0x000000ff;//azul
          col = 0x0000ff;//azul
        break;
        case 4:
//          col = 0x0000ff00;//verde
          col = 0x00ff00;//verde
        break;
        case 5:
//          col = 0x00ff00ff;//rosa
          col = 0xff00ff;//rosa
        break;
        case 6:
//          col = 0x00ff0000;//rojo
          col = 0xff0000;//rojo
        break;
        case 7:
//          col = 0xffffcc00;//amarrillo
          col = 0xffcc00;//amarrillo
        break;
        case 8:
//          col = 0xffff9933;//naranja
          col = 0xff9933;//naranja
        break;
        case 9:
//          col = 0xff66CCFF;//celeste
          col = 0x66CCFF;//celeste
        break;
        case 10:
//          col = 0xff000099;//azul oscuro
          col = 0x000099;//azul oscuro
        break;
        case 11:
//          col = 0xff009900;//verde claro
          col = 0x009900;//verde claro
        break;
        case 12:
//          col = 0xff006600;//verde oscuro
          col = 0x006600;//verde oscuro
        break;
        case 13:
//          col = 0xff990099;//violeta
          col = 0x990099;//violeta
        break;
        case 13:
//          col = 0xff660066;//violeta oscuro
          col = 0x660066;//violeta oscuro
        break;
      }
      if(a == true){
//        col = "0x00"+col;
      }else{
//        col = "0x"+col;
      }
/*
      console.info(col);
      console.dir(col);
*/
      return col;
    }
