Cod.MainMenu = function (game) {

	this.game = game;
	this.creditsShow = false;

	this.music = null;
	this.playButton = null;

    this.cities = [];
    this.heights = [ 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 10, 10, 12, 14, 14 ];


};

Cod.MainMenu.prototype = {

	create: function () {

		// this.music = this.add.audio('titleMusic');
		// this.music.play();

        this.add.image(0, 0, 'sky');
//        this.land = this.add.sprite(0, 336, 'land');
//        this.add.image(390, 360, 'photonstorm');
        //this.add.image(0, 0, 'carta_1');
        
//        this.add.bitmapText(550,550,"BlackwoodCastleShadow","0 1 2 3 4 5 6 7 8 9",12);

//        this.input.onDown.addOnce(this.startGame, this);

		this.j1LeftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.j1RightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.j11Key = this.game.input.keyboard.addKey(Phaser.Keyboard.F);
		this.j12Key = this.game.input.keyboard.addKey(Phaser.Keyboard.G);
		this.j13Key = this.game.input.keyboard.addKey(Phaser.Keyboard.H);

		this.j2LeftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.j2RightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.j21Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
		this.j22Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
		this.j23Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_3);

		this.creditsKey = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
		this.creditsKey.onDown.add(this.showCredits,this);

		this.j1LeftKey.onDown.add(this.startGameWAR,this);
		this.j1RightKey.onDown.add(this.startGameTHUNDER,this);

		this.j2LeftKey.onDown.add(this.startGameWAR,this);
		this.j2RightKey.onDown.add(this.startGameTHUNDER,this);

	    this.mm_sound = this.game.add.audio('mm_sound');
	    this.mm_sound.loopFull();
//        this.startGame();

		this.credits = this.game.add.image(0,0,'credits');
		this.credits.visible = this.creditsShow;
	},

	update: function () {

	},

	startGameWAR: function (pointer) {
		this.credits.visible = false;
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.game.scale.startFullScreen(false,false);

		// this.music.stop();

		//	And start the actual game
		this.mm_sound.stop();
		this.state.start('Game');


	},

	startGameTHUNDER: function (pointer) {
		this.credits.visible = false;
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.game.scale.startFullScreen(false,false);


		// this.music.stop();

		//	And start the actual game
		this.mm_sound.stop();
		this.state.start('GameThunder');


	},

	showCredits: function () {
		if(this.creditsShow){
			this.creditsShow = false;
		}else{
			this.creditsShow = true;
		}
		this.credits.visible = this.creditsShow;

	}

};
