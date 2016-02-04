//Registry = function ( game, fg ) {
Registry = function ( ) {
//  console.info("construc registry");
  this.players = new Array();
  this.sounds = new Array();
/*
  this.game = game;
  this.fg = fg;


  this.weaponsLocations = game.add.group();
  var P226 = game.add.sprite(300, 240, 'weapon_P226');
  var AK47 = game.add.sprite(300, 140, 'weapon_AK47');
  P226.height = 10;
  P226.width = 10;
  AK47.height = 10;
  AK47.width = 10;
  this.weaponsLocations.add(P226);
  this.weaponsLocations.add(AK47);

  game.physics.enable(this.weaponsLocations, Phaser.Physics.Arcade);
  
  game.add.existing(this.weaponsLocations);
*/
};
Registry.prototype.constructor = Registry;
Registry.prototype.addGame = function (game) {
  this.game = game;
};
Registry.prototype.addFG = function (fg) {
  this.fg = fg;
};
Registry.prototype.build = function () {
  console.debug("REGISTRY build");
  this.players = new Array(0,1,2,3);
//console.info('build registry functiuon');
//console.dir(this.fg);
 // this.players[0] = new Player(this.game,"dani",1,pad);
  //console.dir(this.players);
//  this.players.push(new Player(this.game,"dani",1,pad));

  this.sounds['next_weapon']       = this.game.add.audio('sound_next_weapon');
  this.sounds['reload']     = this.game.add.audio('sound_reload');
  this.sounds['shot']       = this.game.add.audio('sound_shot');
  this.sounds['empty_shot'] = this.game.add.audio('sound_empty_shot');
  this.sounds['action']     = this.game.add.audio('sound_action');

  this.weaponsLocations = this.game.add.group();
/*
  var P226 = this.game.add.sprite(300, 240, 'weapon_P226');
  var AK47 = this.game.add.sprite(300, 140, 'weapon_AK47');
  P226.nombre = "P226";
  AK47.nombre = "AK47";
  P226.height = 10;
  P226.width = 10;
  AK47.height = 10;
  AK47.width = 10;
  this.weaponsLocations.add(P226);
  this.weaponsLocations.add(AK47);
*/
/*
  this.wlxy = new Array();
  for (var i = 0; i < this.weaponsLocations.length; i++) {
    this.wlxy[this.weaponsLocations.children[i].x+"_"+this.weaponsLocations.children[i].y] = this.weaponsLocations.children[i];
  }
  console.dir(this.wlxy);
*/
  this.game.physics.enable(this.weaponsLocations, Phaser.Physics.Arcade);
  
  this.game.add.existing(this.weaponsLocations);
};
Registry.prototype.addPlayer = function (p) {
  this.players.push(p);
};