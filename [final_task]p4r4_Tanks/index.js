import Input from './src/input.js';
import View from './src/view.js';
import Game from './src/game.js';
import Sprite from './src/sprite.js';
let is_start = false;
const start_button = document.querySelector('.start_button');
const start_box = document.querySelector('.start_box');
const canvas = document.querySelector('canvas');
const sprite = new Sprite('./assets/images/sprite_x48.png');

var bg_music = new Audio('./assets/sounds/background_music.wav');


const game = new Game({
    input: new Input(),
    view: new View(canvas, sprite)
});




console.log(game);

start_button.addEventListener('click', function() {
    start_box.style.display = "none";
    canvas.style.display = "flex";
    let bg_music = new Audio('./assets/sounds/background_music.wav');
    bg_music.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    bg_music.play();

    game.init().then(() => game.start());
});