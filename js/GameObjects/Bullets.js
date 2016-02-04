Bullets = function (game) {
  Phaser.Group.call(this, game);

  this.game = game;

  for (var i = 0; i >= 12; i++) {
    var b = new Bullet(game);
    this.add(b);
  }
//  game.add.existing(this);
};

Bullets.prototype = Object.create(Phaser.Group.prototype);
Bullets.prototype.constructor = Bullets;

Bullets.prototype.update222 = function() {
//  console.dir('player update()');
}