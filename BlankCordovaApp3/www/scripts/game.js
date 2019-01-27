enchant();
window.onload = function () {
    var game = new Game(window.screen.height, window.screen.width);
    game.keybind(32, 'a');
    game.spriteSheetWidth = 256;
    game.spriteSheetHeight = 16;
    game.itemSpriteSheetWidth = 64;
    game.preload(['sprites.png', 'items.png']);
    game.items = [{ price: 1000, description: "Hurter",    id: 0 },
                  { price: 5000, description: "Drg. Paw",  id: 1 },
                  { price: 5000, description: "Ice Magic", id: 2 },
                  { price:   60, description: "Chess Set", id: 3 }]
    game.fps = 15;
    game.spriteWidth  = 16;
    game.spriteHeight = 16;
    game.scale = 1.0;

    var map = new Map(game.spriteWidth, game.spriteHeight);
    var foregroundMap = new Map(game.spriteWidth, game.spriteHeight);

    var setMaps = function () {
        map.image = game.assets['sprites.png'];
        map.loadData(mapData);
        foregroundMap.image = game.assets['sprites.png'];
        foregroundMap.loadData(foregroundData);
        var collisionData = [];
        for (var i = 0; i < foregroundData.length; i++) {
            collisionData.push([]);
            for (var j = 0; j < foregroundData[0].length; j++) {

            }
        };
    }
}