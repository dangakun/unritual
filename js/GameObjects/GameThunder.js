Cod.GameThunder = function (game) {
    this.game = game;

    this.land;
    this.cities;
    this.plane;
    this.bomb;
    this.score;
    this.scoreText;

    this.map;
    this.layer;

    this.emitterGreen;
    this.emitterPink;
    this.emitterBlue;
    this.gameLost;
    this.gameWon;
    this.speed;
    this.droppedThisRun;
    this.heights;
    
    this.lineH = new Phaser.Line();
    this.lineV = new Phaser.Line();
    
    this.hgo;// = new ManoGO(this.game);
    this.mgo;// = new MazoGO(game);
    
    this.ganador = 0;
    this.turno = 1;
    this.pasar_turno = false;

    this.j;
    this.j2;
    this.e;

    this.style1 = { font: "Fixedsys500c",fontSize:'50px', fill: "#29ad1f", align: "left" };
    this.style2 = { font: "Fixedsys500c",fontSize:'50px', fill: "#e4dc59", align: "left" };

    this.styleGOWIN =  { font: "REGATA",fontSize:'50px', fill: "#418bd6", align: "center" };
    this.styleGOLOST = { font: "REGATA",fontSize:'50px', fill: "#ca27b8", align: "center" };

    this.sec = new Array();

    this.thunder = new Array();
    this.thunder.push(0);
    this.thunder.push('thunder_green');
    this.thunder.push('thunder_pink');
    this.thunder.push('thunder_blue');

    this.contSec = 0;
    this.wining = false;

};

Cod.GameThunder.prototype = {

  create: function () {
    this.EscapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    this.fg = new FuncionesGenerales(this.game);
    this.registry = new Registry();

    this.wining = false;

  this.emitterGreen = this.game.add.emitter(0, 0, 500);
  this.emitterGreen.makeParticles('particle_image_green', [0, 1, 2, 3, 4, 5]);
  this.emitterGreen.setScale(0.1, 10, 0.1, 10, 0, Phaser.Easing.Quintic.Out);
  this.emitterGreen.minParticleSpeed.setTo(-900, -900);
  this.emitterGreen.maxParticleSpeed.setTo(900, 900);
  this.emitterGreen.gravity = 5;

  this.emitterPink = this.game.add.emitter(0, 0, 500);
  this.emitterPink.makeParticles('particle_image_pink', [0, 1, 2, 3, 4, 5]);
  this.emitterPink.setScale(0.1, 10, 0.1, 10, 0, Phaser.Easing.Quintic.Out);
  this.emitterPink.minParticleSpeed.setTo(-900, -900);
  this.emitterPink.maxParticleSpeed.setTo(900, 900);
  this.emitterPink.gravity = 5;

  this.emitterBlue = this.game.add.emitter(0, 0, 500);
  this.emitterBlue.makeParticles('particle_image_blue', [0, 1, 2, 3, 4, 5]);
  this.emitterBlue.setScale(0.1, 10, 0.1, 10, 0, Phaser.Easing.Quintic.Out);
  this.emitterBlue.minParticleSpeed.setTo(-900, -900);
  this.emitterBlue.maxParticleSpeed.setTo(900, 900);
  this.emitterBlue.gravity = 5;


    REGISTRY.addGame(this.game);
    REGISTRY.addFG(this.fg);
    REGISTRY.build();

this.sec = new Array();
this.contSec = 0;
    for (var i = 0; i <= 10; i++) {
        this.sec.push(this.fg.randomNumber(1,3));
    };

//        console.dir(this.sec);
//    console.info( window.innerWidth);

    this.textGO = this.add.text(105, 160, "", this.styleGOLOST);

//console.info('map.width: '+this.map.widthInPixels);
//console.info( this.text1);

  this.stage.backgroundColor = '#101010';

  thunder1_sound = this.game.add.audio('trueno1');
  thunder2_sound = this.game.add.audio('trueno2');
  thunder3_sound = this.game.add.audio('trueno3');

  this.j11Key = this.game.input.keyboard.addKey(Phaser.Keyboard.F);
  this.j12Key = this.game.input.keyboard.addKey(Phaser.Keyboard.G);
  this.j13Key = this.game.input.keyboard.addKey(Phaser.Keyboard.H);

  this.j21Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
  this.j22Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
  this.j23Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_3);


  this.j11Key.onDown.add(this.setThunder,this,0,'j11');
  this.j12Key.onDown.add(this.setThunder,this,0,'j12');
  this.j13Key.onDown.add(this.setThunder,this,0,'j13');

  this.j21Key.onDown.add(this.setThunder,this,0,'j21');
  this.j22Key.onDown.add(this.setThunder,this,0,'j22');
  this.j23Key.onDown.add(this.setThunder,this,0,'j23');
//console.info(this.sec.lenght);

this.tg = this.game.add.image(0,0, 'thunder_green');
this.tp = this.game.add.image(0,0, 'thunder_pink');
this.tb = this.game.add.image(0,0, 'thunder_blue');

this.tg.visible = false;
this.tp.visible = false;
this.tb.visible = false;

  this.timer = this.game.time.create(false);
  this.timer.loop(800, this.hideThunder, this);

  this.timer2 = this.game.time.create(false);
  this.timer2.loop(2000, this.showThunder, this);
  this.timer2.start(0);

  this.timer3 = this.game.time.create(false);
  this.timer3.loop(1000, this.showTimer, this);
  this.timer3.start(0);
    this.game.add.image(0, 0, 'textInsDiosTrueno');

  },

    showTimer: function (){
//        console.info('timer: '+ this.game.time.totalElapsedSeconds());
    },

    setThunder: function (tecla,cual){
//        console.info("cual: "+cual);
        switch(cual){
            case 'j11':
                this.j1T = 1;
            break;
            case 'j12':
                this.j1T = 2;
            break;
            case 'j13':
                this.j1T = 3;
            break;
            case 'j21':
                this.j2T = 1;
            break;
            case 'j22':
                this.j2T = 2;
            break;
            case 'j23':
                this.j2T = 3;
            break;
        }
//        console.info("setThunder_j1T: "+this.j1T);
//        console.info("setThunder_j2T: "+this.j2T);
    },

    showThunder: function (){
        if(this.contSec >= 1){
            this.checkGameOver();
        }
        this.contSec++;
        this.j1T = 0;
        this.j2T = 0;
        this.tg.visible = false;
        this.tp.visible = false;
        this.tb.visible = false;
        switch(this.sec[this.contSec]){
            case 1:
                this.tg.visible = true;
            break;
            case 2:
                this.tp.visible = true;
            break;
            case 3:
                this.tb.visible = true;
            break;
        }
        this.showParticles(this.sec[this.contSec]);
        this.timer.start();
    },

    hideThunder: function(){
        this.tg.visible = false;
        this.tp.visible = false;
        this.tb.visible = false;
    },

    checkGameOver: function (){
/*
        console.info("j1T: "+this.j1T);
        console.info("j2T: "+this.j2T);
        console.info("checkGameOver: "+this.sec[this.contSec]);
*/
//        console.info("this.sec.lenght: "+this.sec.lenght);
//        console.info("this.contSec: "+this.contSec);
        if ( (this.j1T == this.sec[this.contSec]) && (this.j2T == this.sec[this.contSec]) ){
            this.wining = true;
//            console.info("BIEN");
        }else{
//            console.info("MALLLLLLLLLLLLLLLLLLLL");
            this.wining = false;
            this.gameOver(0);
        }
        if(this.contSec >= 10){
            this.winning = true;
            this.gameOver(1);
        }
    },

  update: function () {
  },

showParticles: function(donde){
        switch(donde){
            case 1:
                this.emitterGreen.x = 200;
                this.emitterGreen.y = 350;
                this.emitterGreen.start(true, 300, null, 50);
                thunder1_sound.play();
            break;
            case 2:
                this.emitterPink.x = 640;
                this.emitterPink.y = 220;
                this.emitterPink.start(true, 300, null, 50);
                thunder2_sound.play();
            break;
            case 3:
                this.emitterBlue.x = 1100;
                this.emitterBlue.y = 450;
                this.emitterBlue.start(true, 300, null, 50);
                thunder3_sound.play();
            break;
        }
    },

    gameOver: function (whoWin,whoLost) {

        this.timer.stop();
        this.timer2.stop();
        this.timer3.stop();
    
        this.game.add.sprite(0, 0, 'background');
        switch(whoWin){
            case 0:
                var whoText = "GAME OVER\n\nBoth Player LOST!!!\n\nPress Esc to exit";
                this.textGO = this.add.text(105, 160, whoText, this.styleGOLOST);
            break;
            case 1:
                var whoText = "GAME OVER\n\nBoth Players WON!!!\n\nPress Esc to exit";
                this.textGO = this.add.text(105, 160, whoText, this.styleGOWIN);
            break;
        }

        this.EscapeKey.onDown.add(this.quitGame,this);

    },

  quitGame: function () {

    this.state.start('MainMenu');

  },
  
    render : function() {

    }

};
