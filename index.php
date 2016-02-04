<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>un ritual - Global Game Jam 2016 - Image Campus - Argentina</title>
        <meta name="description" content="un ritual - Global Game Jam 2016 - Image Campus - Argentina" />
        <meta name="keywords" content="un ritual, Global Game Jam 2016, Image Campus, Argentina, phaser, html5, game" />
        <meta name="author" content="daniel avendano - marte dubuc" />
        <link rel="shortcut icon" href="gfx/favicon.ico">
        <!--<base href="../unritual/"></base>-->
        <base href=""></base>
        <?php
//            $path = '../../phaser';
//            require('../../phaser/build/config.php');
        ?>
        
<style>
body{background-color: black;}
/*         url('fonts/Fixedsys500c/Fixedsys500c.woff2') format('woff2'),*/
@font-face {
    font-family: 'Fixedsys500c';
    src: url('fonts/Fixedsys500c/Fixedsys500c.eot');
    src: url('fonts/Fixedsys500c/Fixedsys500c.eot') format('embedded-opentype'),
         url('fonts/Fixedsys500c/Fixedsys500c.woff') format('woff'),
         url('fonts/Fixedsys500c/Fixedsys500c.ttf') format('truetype'),
         url('fonts/Fixedsys500c/Fixedsys500c.svg#Fixedsys500c') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'REGATA';
    src: url('fonts/REGATA/REGATA.eot');
    src: url('fonts/REGATA/REGATA.eot') format('embedded-opentype'),
         url('fonts/REGATA/REGATA.woff2') format('woff2'),
         url('fonts/REGATA/REGATA.woff') format('woff'),
         url('fonts/REGATA/REGATA.ttf') format('truetype'),
         url('fonts/REGATA/REGATA.svg#regataregular') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'AncientGod';
    src: url('fonts/AncientGod/ancientgod-webfont.eot');
    src: url('fonts/AncientGod/ancientgod-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/AncientGod/ancientgod-webfont.woff2') format('woff2'),
         url('fonts/AncientGod/ancientgod-webfont.woff') format('woff'),
         url('fonts/AncientGod/ancientgod-webfont.ttf') format('truetype'),
         url('fonts/AncientGod/ancientgod-webfont.svg#ancient_godbold') format('svg');
    font-weight: normal;
    font-style: normal;
}
</style>

<script type="text/javascript">
/*
var nombre_mazo = '{nombre}';
var objetivo_mazo = {objetivo};
var mazo_jug = {mazo_jug};
var mazo_ene = {mazo_ene};
*/
</script>

    <script type="text/javascript" src="js/GameObjects/phaser-2.4.4/build/phaser.min.js"></script>
<!--    <script type="text/javascript" src="js/GameObjects/phaser-2.3.0/src/Phaser.js"></script>-->


<!--//Game Objects - Graphic Objets-->
<!--
    <script src="js/GameObjects/Skills.js"></script>
    <script src="js/GameObjects/HudPlayer.js"></script>
    <script src="js/GameObjects/HudManager.js"></script>
    <script src="js/GameObjects/Weapon.js"></script>
    <script src="js/GameObjects/WeaponFactory.js"></script>
    <script src="js/GameObjects/Slot.js"></script>
-->
    <script src="js/GameObjects/Bullet.js"></script>
    <script src="js/GameObjects/Bullets.js"></script>


<!--//Weapons -->
<!--    <script src="js/GameObjects/P226.js"></script>-->


<!--//Clases-->
    <script src="js/GameObjects/Player.js"></script>
    <script src="js/GameObjects/PlayerThunder.js"></script>
    <script src="js/GameObjects/Registry.js"></script>
    <script src="js/GameObjects/Core.js"></script>
    <script src="js/GameObjects/FuncionesGenerales.js"></script>


<!--//Core-->
    <script src="js/GameObjects/Boot.js"></script>
    <script src="js/GameObjects/Preloader.js"></script>
    <script src="js/GameObjects/MainMenu.js"></script>
    <script src="js/GameObjects/Game.js"></script>
    <script src="js/GameObjects/GameThunder.js"></script>

    </head>
    <body>
    <p id="fontloader" style="font-family:'roman_sd';width:1px;height:1px;margin:0;">COD</p>
    <div id="game"></div>
    <div id="orientation"></div>
    <script type="text/javascript">
    
    (function () {
      
    
        var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game');
//        var game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'game');
    
        game.state.add('Boot', Cod.Boot);
        game.state.add('Preloader', Cod.Preloader);
        game.state.add('MainMenu', Cod.MainMenu);
        game.state.add('Game', Cod.Game);
        game.state.add('GameThunder', Cod.GameThunder);
    
        game.state.start('Boot');
    
    })();
    </script>
    </body>
</html>