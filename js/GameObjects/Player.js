//Player = function (game,regi,n,obj,pad) {
Player = function (game,id,regi,n,obj,pad) {
  Phaser.Group.call(this, game);

  this.game = game;
  this.id = id;
  this.number = id;
  this.overlaping = null;
//  this.registry = this.game.registry;
//  this.registry = REGISTRY;
  this.registry = regi;
//  console.dir(this.registry);
  this.pad = pad;
//  console.dir(this.pad);
  this.core = new Core();

  this.nombre = n;
  this.action = 0;
  this.maxAction = 100;
  this.life = 300;
  this.lifeTotal = 300;
  this.lifePer = 100;
  this.armor = 100;
  this.maxArmor = 100;
  this.x = 100;
  this.y = 100;
  this.objetivo = obj;
  this.money = 500;
  this.weaponName = 'nada';
  this.speed = 10;
  this.runSpeed = 30;
  this.maxSpeed = 50;
  this.stamina = 100;
  this.maxStamina = 100;
  this.staminaRecRate = 10;
  this.cs = 3;
  this.angle = 0;
  this.cuerpo = 0;
  this.timer = game.time.create(false);


  this.bulletTime = 0;

  this.bulletsPerShot = 10;
  this.bullets = game.add.group();
  this.bullets.enableBody = true;
  this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
  this.bullets.createMultiple(1, 'bullet_image');
  this.bullets.setAll('anchor.x', 0.5);
  this.bullets.setAll('anchor.y', 0.5);
/*

  for (var i = 0; i < this.mag; i++) {
//    //console.info("adentro del FORRRRRR");
    var b = new Bullet(game);
    b.name = 'bullet' + i;
    b.exists = false;
    b.visible = false;
    b.checkWorldBounds = true;
    b.events.onOutOfBounds.add(this.killBullet, this);
    this.bullets.add(b);
  }
  console.dir(this.bullets);
*/

//  game.add.existing(this.lifeBar);
  game.physics.enable(this, Phaser.Physics.Arcade);
//console.info(this.id);
if(this.id == 1){
  this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
  this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
  this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
  this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
  this.FirstKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
  this.SecondKey = game.input.keyboard.addKey(Phaser.Keyboard.G);
  this.ThirdKey = game.input.keyboard.addKey(Phaser.Keyboard.H);
}else{
  this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  this.FirstKey = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
  this.SecondKey = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
  this.ThirdKey = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_3);
}
//  this.shootMouseButton = game.pointer.justPressed;

  this.disparo_sound;
  this.golpe_sound;
  this.muerte_sound;

  this.generate();

  this.FirstKey.onDown.add(this.shoot,this);
//  this.game.add.sprite(this.x, this.y, 'player_body_'+this.number);
};

Player.prototype = Object.create(Phaser.Group.prototype);
Player.prototype.constructor = Player;

Player.prototype.generate = function () {
  this.cuerpo = this.game.add.sprite(this.x, this.y, 'player_body_'+this.number);
  this.game.physics.arcade.enable(this.cuerpo);

  this.disparo_sound = this.game.add.audio('disparo');
  this.golpe_sound = this.game.add.audio('golpe');
  this.muerte_sound = this.game.add.audio('muerte');

/*
//  this.game.add.sprite(this.x, this.y, 'player_body_'+this.number);
  this.game.add.existing(this);
  this.game.physics.arcade.enable(this);
*/
//  this.game.physics.arcade.enable(this.bullets);

//  this.game.add.existing(this);
/*
  this.x = this.x;
  this.y = this.y;
*/
//  this.anchor.setTo(0.5, 0.5);
/*
  this.allowRotation = true;
  this.angle = this.angle;
  this.drag  = 1000;
  this.maxVelocity  = 200;
*/
/**/
  this.game.add.existing(this.cuerpo);
  this.cuerpo.body.allowRotation = true;
  this.cuerpo.x = this.x;
  this.cuerpo.y = this.y;
  this.cuerpo.anchor.setTo(0.5, 0.5);
  this.cuerpo.angle = this.angle;
  this.cuerpo.body.drag.set(1000);
  this.cuerpo.body.maxVelocity.set(200);
  this.cuerpo.anchor.set(0.5);
  this.cuerpo.name = this.id;
/**/
  this.timer.loop(300, this.updateCounter, this);
  this.timer.start(3000);

/**/
  this.emitter = this.game.add.emitter(this.cuerpo.x, this.cuerpo.y, 500);

  this.emitter.makeParticles('particle_image_'+this.id, [0, 1, 2, 3, 4, 5]);

  this.emitter.setScale(0.1, 7, 0.1, 7, 6000, Phaser.Easing.Quintic.Out);

  this.emitter.minParticleSpeed.setTo(-700, -700);
  this.emitter.maxParticleSpeed.setTo(700, 700);
  this.emitter.gravity = 0;
//  this.emitter.start(false, 4000, 15);
/**/
//  this.ch = this.game.add.sprite(this.x+PADDING, this.y+PADDING, 'player_body_'+this.number);

//  this.s = new Slot(this.game,this);
//  this.weaponName = this.s.swap();
//  this.cw = this.s.weapons[this.s.cw].w;
}

Player.prototype.killBullet = function (bull,obj2){
//  ////console.clear();
//  console.info("killBullet");
//  console.info(bull);
//  console.info(obj2);
//  bull.kill();
};


Player.prototype.updateCounter = function(){
      this.takeLife(1);
}

Player.prototype.shoot = function(){

  if (this.game.time.now > this.bulletTime)
    {
        bullet = this.bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(this.cuerpo.body.x + 16, this.cuerpo.body.y + 16);
//            bullet.reset(this.x + 16, this.y + 16);
            bullet.lifespan = 5000;
            bullet.rotation = this.cuerpo.rotation;
//            bullet.rotation = this.rotation;
            this.game.physics.arcade.velocityFromRotation(this.cuerpo.rotation, 400, bullet.body.velocity);
//            this.game.physics.arcade.velocityFromRotation(this.rotation, 400, bullet.body.velocity);
            this.bulletTime = this.game.time.now + 500;
//            this.game.physics.arcade.overlap(this.bullets, this.game.layer, this.killBullet, null, this);
            this.takeLife(5);
            this.disparo_sound.play();
        }
    }
}

Player.prototype.takeLife = function(howMuch,part) {
  this.life = this.life - howMuch;
  part = typeof part !== 'undefined' ? part : 'false';
  if(part== true){
    this.particleBurst();
    this.golpe_sound.play();
  } 
//  console.info(this.life);
}


Player.prototype.update = function() {
//  console.dir('player update()');
//this.cuerpo.x = this.x;
//this.cuerpo.y = this.y;
//  game.physics.arcade.overlap(sprite, group, collisionHandler, null, this);

//this.game.physics.arcade.collide(this.cuerpo, this.game.layer);

    if (this.upKey.isDown){
      this.timer.stop(false);
      this.game.physics.arcade.accelerationFromRotation(this.cuerpo.rotation, 200, this.cuerpo.body.acceleration);
//      this.game.physics.arcade.accelerationFromRotation(this.rotation, 200, this.acceleration);
    }else{
//      this.timer.loop(3000, this.updateCounter, this);
      this.timer.start(3000);
      this.cuerpo.body.acceleration.set(0);
//      this.acceleration  = 0;
    }
    if (this.leftKey.isDown){
        this.timer.stop(false);
        this.cuerpo.body.angularVelocity = -300;
//        this.angularVelocity = -300;
    }else if (this.rightKey.isDown){
        this.timer.stop(false);
        this.cuerpo.body.angularVelocity = 300;
//        this.angularVelocity = 300;
    }else{
//        this.timer.start();
        this.cuerpo.body.angularVelocity = 0;
//        this.angularVelocity = 0;
    }

//    console.info(this.cuerpo.x);
//    console.info(this.cuerpo.y);

//console.info("this.x: "+this.cuerpo.rotation+" - this.y: "+this.cuerpo.y);
//Player Shoot
  if ( (this.FirstKey.isDown) ){
    this.shoot();
  }
};

Player.prototype.stopSounds = function(pointer){
  this.disparo_sound.stop();
  this.golpe_sound.stop();
  if(this.life <= 0){
    this.muerte_sound.play();
  }
//  this.muerte_sound.stop();
}

Player.prototype.particleBurst = function(pointer) {
    //  Position the emitter where the mouse/touch event was
    this.emitter.x = this.cuerpo.x;
    this.emitter.y = this.cuerpo.y;
    //  The first parameter sets the effect to "explode" which means all particles are emitted at once
    //  The second gives each particle a 2000ms lifespan
    //  The third is ignored when using burst/explode mode
    //  The final parameter (10) is how many particles will be emitted in this single burst
    this.emitter.start(true, 2000, null, 10);

};