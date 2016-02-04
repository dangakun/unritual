Cod.Game = function (game) {
    this.game = game;

    this.land;
    this.cities;
    this.plane;
    this.bomb;
    this.score;
    this.scoreText;

    this.map;
    this.layer;

    this.emitter;
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
    //  var j = new Player('{nombre}',{objetivo},'mazo');
    //  var e = new Player('PC',{objetivo},'mazo');
//    this.j = new Player(nombre_mazo,objetivo_mazo,'mazo');
//    this.e = new Player('PC',objetivo_mazo,'mazo');
    this.j;
    this.j2;
    this.e;

    this.style1 = { font: "Fixedsys500c",fontSize:'50px', fill: "#418bd6", align: "left" };
    this.style2 = { font: "Fixedsys500c",fontSize:'50px', fill: "#ca27b8", align: "left" };

    this.styleIns = { font: "AncientGod",fontSize:'20px', fill: "#ffffff", align: "left" };
    this.styleGO = { font: "REGATA",fontSize:'50px', fill: "#28cc2c", align: "center" };
this.gameFinish = false;
};

Cod.Game.prototype = {

    create: function () {
this.gameFinish = false;
    this.game.add.image(0, 0, 'textInsDiosGuerra');
    this.EscapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);

    this.physics.startSystem(Phaser.Physics.ARCADE);

//    this.game.load.image('background','imagenes/backgrounds/blurred_colors-wide.jpg');
//    background = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
    
    this.fg = new FuncionesGenerales(this.game);
//    this.registry = new Registry(this.game,this.fg);
    this.registry = new Registry();

//    this.load.tilemap('map_dios_guerra', 'assets/tilemaps/csv/mapa_dios_guerra.csv', null, Phaser.Tilemap.CSV);
    this.map = this.add.tilemap('map_dios_guerra', 32, 32);
    this.map.addTilesetImage('tiles_dios_guerra');
    this.layer = this.map.createLayer(0);
    this.layer.resizeWorld();
    this.map.setCollisionBetween(1, 1);

//     this.layer.debug = true;
/*
    this.registry = new Registry();
    this.registry.addGame(this.game);
    this.registry.addFG(this.fg);
*/
    REGISTRY.addGame(this.game);
    REGISTRY.addFG(this.fg);
    REGISTRY.build();
//    this.game.registry = this.registry;
//    this.add.bitmapText(550,550,"NumberFont","0 1 2 3 4 5 6 7 8 9",48);

//    console.info(this.game.width);
//    console.info(this.game.height);
    this.game.input.gamepad.start();
    pad = this.game.input.gamepad.pad1;
    pad2 = this.game.input.gamepad.pad2;
//    this.j = new Player(this.game,this.registry,"dani",1,pad);
//    this.j = new Player(this.game,"dani",1,pad);
//    this.registry.build();
//    REGISTRY.build();
//    this.j = new Player(this.game,0,REGISTRY,"dani",1,pad);


    this.j = new Player(this.game,1,this.registry,"izq",2,pad);
    this.j2 = new Player(this.game,2,this.registry,"der",1,pad2);

    this.oculto = this.game.add.sprite(270, 100, 'oculto');
    this.oculto2 = this.game.add.sprite(350, 500, 'oculto');

    this.j.cuerpo.x  = 90; this.j.cuerpo.y  = 350;
    this.j2.cuerpo.x = 960; this.j2.cuerpo.y = 355;
    this.j.cuerpo.rotation = 3.14;
//    this.j.cuerpo.x = 90;
//    this.j.cuerpo.y = 350;

    console.info( window.innerWidth);

    this.text1 = this.add.text(1, 1, "Life: 75", this.style1);
    this.text2 = this.add.text(1, 50, "Life: 75", this.style2);
//    this.textIns = this.add.text(1, 250, "Exkrotus te exige sangre.\n\nTrata de no morir en el intento.", this.styleIns);

    this.textGO = this.add.text(105, 160, "", this.styleGO);
//    text.x = window.innerWidth-text.width-10;
    this.text1.x = this.map.widthInPixels+10;
    this.text2.x = this.map.widthInPixels+10;
//    this.textIns.x = this.map.widthInPixels+10;


//console.info('map.width: '+this.map.widthInPixels);
//console.info( this.text1);

//    text.anchor.set(0.5);    

    this.physics.arcade.enable(this.j);
    this.physics.arcade.enable(this.j2);

//    this.physics.arcade.enable(this.j.cuerpo);
//    this.physics.arcade.enable(this.j2.cuerpo);
//    REGISTRY.players[0] = this.j;
//    this.registry.players[0] = this.j;
//    console.dir(this.j);
    REGISTRY.addPlayer(this.j);
    REGISTRY.addPlayer(this.j2);
    this.registry.addPlayer(this.j);
    this.registry.addPlayer(this.j2);

//    console.dir(this.registry);
//      this.hm = new HudManager(this.game, this.registry);
//    console.info("----");
//    consol.dir(this.j);
//      console.info("cantidad de cartas: "+this.j.deck.cantCartas());
//    this.e = new Player(this.game,'PC',objetivo_mazo);
/*
    console.info("------- J -----------");
    console.info(this.j.deck);
    console.dir(this.j.deck);
    console.info(j.deck);
    console.dir(j.deck);
    console.info("******** J ***********");
*/
//    this.game.add.group(this.hgo);
//    console.dir(this.j.deck);
//      this.game.add.existing(this.j.hnd);
//      this.game.add.existing(this.j.deck);
//    this.mgo = new MazoGO(this.game, this.j.hnd, this.j.deck);
  
//    this.stage.backgroundColor = '#2d2d2d';
//    this.stage.backgroundColor = '#595959';
    this.stage.backgroundColor = '#000000';
/*    
    console.info(this.fg.posisionPantallaX(65));
    console.info(this.fg.posisionPantallaY(5));
*/    
//    this.add.sprite(this.fg.posisionPantallaX(5),this.fg.posisionPantallaY(65),'ejer_atk');
//    l1 = new Phaser.line(0,this.fg.posisionPantallaX(65),0,this.fg.posisionPantallaY(5));
//console.info(this.fg.posisionPantallaX());
//		this.lineH.setTo(this.fg.posisionPantallaX(5),this.fg.posisionPantallaY(65),1366,635);
//		this.lineV.setTo(50,1366,50,68);
//    var l3 = this.line(0,1366,0,68);

this.text1.text = "Life: "+this.j.life;
this.text2.text = "Life: "+this.j2.life;

//this.textIns.text = "Exkrotus te exige sangre.\n\nTrata de no morir en el intento.";


  this.gameplay_sound = this.game.add.audio('dios_guerra_sound');
    this.gameplay_sound.loopFull();

    this.button = this.game.add.button(this.text1.x+5, (this.text1.y+520), 'fullscreen_button', this.fullscreenClick, this, 2, 1, 0);
//    this.button.onInputOver.add(over, this);
//    this.button.onInputOut.add(out, this);
//    this.button.onInputUp.add(up, this);

	},
    fullscreenClick: function (){
    if (this.game.scale.isFullScreen)
    {
        this.game.scale.stopFullScreen();
    }
    else
    {
        this.game.scale.startFullScreen(false,false);
    }
    },

    destroyBullets: function (obj1, obj2){
        obj1.kill();
    },

    takeLife: function (cual, cuanto){
        this.checkGameOver();
        switch(cual){
            case 1:
                this.j.takeLife(cuanto,true);
            break;
            case 2:
                this.j2.takeLife(cuanto,true);
            break;
        }
    },

    checkGameOver: function (){
        if(this.j.life <= 0){
            this.gameOver(2,1);
        }
        if(this.j2.life <= 0){
            this.gameOver(1,2);
        }
    },

    collideBulletsPlayer: function (obj1, obj2){
        obj2.kill();
        this.takeLife(obj1.name,25);
    },

	update: function () {
        if (this.gameFinish)
        {
            return;
        }
        this.checkGameOver();

this.text1.text = "Life: "+this.j.life;
this.text2.text = "Life: "+this.j2.life;
//this.textIns.text = "Exkrotus te exige sangre.\n\nTrata de no morir en el intento.";

/**/
        this.physics.arcade.collide(this.j.cuerpo, this.layer);
        this.physics.arcade.collide(this.j2.cuerpo, this.layer);

        this.physics.arcade.collide(this.j.bullets, this.layer, this.destroyBullets, null, this);
        this.physics.arcade.collide(this.j2.bullets, this.layer, this.destroyBullets, null, this);

        this.physics.arcade.collide(this.j.bullets, this.j2.cuerpo, this.collideBulletsPlayer, null, this);
        this.physics.arcade.collide(this.j2.bullets, this.j.cuerpo, this.collideBulletsPlayer, null, this);

/**/
//        this.physics.arcade.overlap(this.j.bullets, this.layer, this.destroyBullets, null, this);
//        this.physics.arcade.overlap(this.j2.bullets, this.layer, this.destroyBullets, null, this);

//        this.physics.arcade.collide(this.j.cuerpo, this.j2.cuerpo);
//        this.physics.arcade.collide(this.j.cuerpo, this.j2.cuerpo);
//        this.physics.arcade.collide(this.j2, this.layer);
//      this.hm.update();
//      this.j.update();
//      this.j2.update();


	},

    gameOver: function (whoWin,whoLost) {
        this.gameplay_sound.stop();
        this.gameFinish = true;
        this.j.stopSounds();
        this.j2.stopSounds();
        this.game.physics.arcade.isPaused = true;
        this.game.add.sprite(0, 0, 'background');
        switch(whoWin){
            case 1:
                var whoText = "GAME OVER\n\nPlayer on the Left WON!!!\n\n<<\n\nPress Esc to exit";
            break;
            case 2:
                var whoText = "GAME OVER\n\nPlayer on the Right WON!!!\n\n>>\n\nPress Esc to exit";
            break;
        }
//        var textGO = this.add.text(this.fg.posisionPantallaX(10), this.fg.posisionPantallaY(25), whoText, this.styleGO);
        this.textGO = this.add.text(105, 160, whoText, this.styleGO);
//        this.textGO.text = whoText;

//        this.input.onDown.add(this.quitGame, this);
        this.EscapeKey.onDown.add(this.quitGame,this);

//        this.game.paused = true;
    },

	quitGame: function () {

		this.state.start('MainMenu');

	},
  
  render : function() {
//    this.game.debug.geom(this.lineH);
//    this.game.debug.geom(this.lineV);
}

};
