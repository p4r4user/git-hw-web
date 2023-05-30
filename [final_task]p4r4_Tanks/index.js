import Input from './src/input.js';
import View from './src/view.js';
import Game from './src/game.js';
import Sprite from './src/sprite.js';

const canvas = document.querySelector('canvas');
const sprite = new Sprite('./assets/sprite_x48.png');

const game = new Game({
    input: new Input(),
    view: new View(canvas, sprite)
});

game.init().then(() => game.start());

console.log(game);