
Cod.Preloader = function (game) {

  this.background = null;
  this.preloadBar = null;

  this.ready = false;

};

Cod.Preloader.prototype = {

  preload: function () {

    this.preloadBar = this.add.sprite(0, 100, 'preloaderBar');

    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('background','imagenes/back_test.jpg');

  this.load.image('player_body_1','assets/images/player_body_izq.png');
  this.load.image('player_body_2','assets/images/player_body_der.png');

  this.load.image('bullet_image','assets/images/bullet.png');
  this.load.image('thunder_green','assets/images/thunderG.png');
  this.load.image('thunder_pink', 'assets/images/thunderP.png');
  this.load.image('thunder_blue', 'assets/images/thunderB.png');
//  this.load.image('particle_image','assets/images/particleBU.gif');
  this.load.image('particle_image_1','assets/images/particle.png');
  this.load.image('particle_image_2','assets/images/particle_2.png');

  this.load.image('fullscreen_button','assets/images/fullscreen_button.png');

  this.load.image('particle_image_green','assets/images/particle_green.png');
  this.load.image('particle_image_pink', 'assets/images/particle_pink.png');
  this.load.image('particle_image_blue', 'assets/images/particle_blue.png');
  this.load.image('textInsDiosGuerra', 'assets/images/textInsDiosGuerra.png');
  this.load.image('textInsDiosTrueno', 'assets/images/textInsDiosTrueno.png');

  this.load.image('oculto','assets/images/oculto.png');
//  this.load.tilemap('map_dios_guerra', 'assets/tilemaps/csv/mapa_dios_guerra.csv', null, Phaser.Tilemap.CSV);
  this.load.image('tiles_dios_guerra', 'assets/tilemaps/tiles/tiles_dios_guerra.png');

  this.load.audio('disparo', ['assets/audio/disparo.mp3', 'assets/audio/disparo.ogg']);
  this.load.audio('golpe',   ['assets/audio/golpe.mp3', 'assets/audio/golpe.ogg']);
  this.load.audio('muerte',  ['assets/audio/muerte.mp3', 'assets/audio/muerte.ogg']);
  this.load.audio('trueno1', ['assets/audio/Trueno_1.mp3', 'assets/audio/Trueno_1.ogg']);
  this.load.audio('trueno2', ['assets/audio/Trueno_2.mp3', 'assets/audio/Trueno_2.ogg']);
  this.load.audio('trueno3', ['assets/audio/Trueno_3.mp3', 'assets/audio/Trueno_3.ogg']);

  this.load.audio('mm_sound', ['assets/audio/un_ritual_menu.mp3', 'assets/audio/un_ritual_menu.ogg']);
  this.load.audio('dios_guerra_sound', ['assets/audio/un_ritual_gameplay.mp3', 'assets/audio/un_ritual_gameplay.ogg']);


    this.load.tilemap('map_dios_guerra', 'load_json.php?folder=maps&file=mapa_dios_guerra.csv', null, Phaser.Tilemap.CSV);
//    this.load.tilemap('map_dios_guerra', '1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,11,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,11,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,11,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,11,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,11,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,11,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,11,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,11,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1', null, Phaser.Tilemap.CSV);



    this.load.image('credits', 'images/team_ggj2016_unritual.png');
    this.load.image('land', 'images/land.png');
    this.load.image('sky', 'images/sky.png');

    this.load.image('photonstorm', 'images/photonstorm.png');
    this.load.spritesheet('particles', 'images/particles.png', 2, 2);
    this.load.spritesheet('city', 'images/city.png', 16, 16);

  },

  create: function () {

//    var jsonData = JSON.parse(game.cache.getText('P226'));
//    game.cache.text = JSON.parse(game.cache.getText('P226'));
//    game.cache._text['P226'] =  game.cache.getJSON('version');

    this.preloadBar.cropEnabled = false;

    this.state.start('MainMenu');

  },

  update: function () {

    // if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
    // {
      // this.ready = true;
      // this.state.start('MainMenu');
    // }

  }

};
