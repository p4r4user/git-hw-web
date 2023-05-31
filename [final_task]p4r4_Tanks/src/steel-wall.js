import { STEEL_WALL_SPRITES } from './constants.js';
import Wall from './wall.js';

var steel_hit_sound = new Audio('./assets/sounds/bullet_steel_hit.wav');
steel_hit_sound.volume = 0.75;
export default class SteelWall extends Wall {
    constructor(args) {
        super(args);

        this.sprites = STEEL_WALL_SPRITES;
    }

    hit(bullet) {
        play_steel_brick_hit_sound();
        if (this.isDestroyed) return;
    }
}
function play_steel_brick_hit_sound(){
    steel_hit_sound.currentTime = 0;
    steel_hit_sound.play();
}