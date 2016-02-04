Bullet = function (game) {
  Phaser.Sprite.call(this, game, (game.world.width-165-PADDING), (game.world.height-200-PADDING), 'bullet_image');
  this.game = game;
//  console.info('__const Bullet');
  game.add.existing(this);
};

Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.currentWeapon = function() {
//  return this.weapon[this.cw];
};