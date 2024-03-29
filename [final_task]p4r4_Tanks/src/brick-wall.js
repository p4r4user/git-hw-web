import { Direction, BRICK_WALL_SPRITES, BRICK_WALL_SPRITE_MAP } from './constants.js';
import Wall from './wall.js';

var brick_hit_sound = new Audio('./assets/sounds/bullet_brick_hit.wav');
    brick_hit_sound.volume = 0.75;

export default class BrickWall extends Wall {
    constructor(args) {
        super(args);

        this.sprites = BRICK_WALL_SPRITES;
        this.state = 0b0000;

        this.isDestroyed = false;
    }

    get sprite() {
        return this.sprites[BRICK_WALL_SPRITE_MAP[this.state]];
    }

    update({ world }) {
        if (this.isDestroyed) {
            world.objects.delete(this);
        }
    }

    hit(bullet) {
        play_bullet_brick_hit_sound();
        if (this.isDestroyed) return;

        
            this.isDestroyed = true;
        

        switch (bullet.direction) {
            case Direction.UP:
                this.state = this.state | 0b0001;
                break;
            case Direction.RIGHT:
                this.state = this.state | 0b0010;
                break;
            case Direction.DOWN:
                this.state = this.state | 0b0100;
                break;
            case Direction.LEFT:
                this.state = this.state | 0b1000;
                break;
        }
    }
}

function play_bullet_brick_hit_sound(){
    brick_hit_sound.currentTime = 0;
    brick_hit_sound.play();
}