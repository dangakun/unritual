Core = function ( ga ) {
  this.game = ga;
  this.fg = new FuncionesGenerales(this.game);
};
Core.prototype.traerVidaColor = function ( cuanto ) {
  cuanto = Math.ceil(cuanto);
//  console.info(cuanto);
  if(cuanto >= 75){
    return this.fg.getColorByNumberFG(11);
  }
  if( (cuanto >= 50) && (cuanto <= 74) ){
    return this.fg.getColorByNumberFG(7);
  }
  if( (cuanto >= 25) && (cuanto <= 49) ){
    return this.fg.getColorByNumberFG(8);
  }
  if(cuanto <= 24){
    return this.fg.getColorByNumberFG(6);
  }
};