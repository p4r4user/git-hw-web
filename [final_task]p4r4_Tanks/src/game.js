import stages from './stages.js';
import Stage from './stage.js';

const canvas = document.querySelector('canvas');
const box = document.querySelector('.box');
const input_guide = document.querySelector('.input_guide');
const reload_btn = document.querySelector('button');
const btn_text = document.querySelector('.button_text');
const btn_sl = document.querySelector('.button_sl');
let is_game = true;
export default class Game {
    constructor({input, view}) {
        this.input = input;
        this.view = view;
        this.stages = stages;
        this.player1 = null;
        this.stage = null;
        this.stageIndex = 0;
        this.frames = 0;
        this.lastFrame = 0;

        this.loop = this.loop.bind(this);
        this.onGameOver = this.onGameOver.bind(this);
    }

    async init() {
        await this.view.init();
    }

    start() {
        this.stage = new Stage(stages[this.stageIndex]);
        this.stage.number = this.stageIndex + 1;
        this.stage.on('gameOver', this.onGameOver);
        this.stage.on("win", this.onWin);

        requestAnimationFrame(this.loop);
    }

    loop(currentFrame) {
        const frameDelta = currentFrame - this.lastFrame;

        this.stage.update(this.input, frameDelta);
        this.view.update(this.stage, this.player1);
        this.frames = 0;

        this.lastFrame = currentFrame;
        if (is_game) {
            requestAnimationFrame(this.loop);
        }
    }

    onGameOver() {
        canvas.style.display = "none";
        box.style.display = "flex";

        is_game = false;
        reload_btn.addEventListener('click', () =>
            window.location.reload() //!
        )

    }

    onWin() {
        box.style.backgroundColor = "#309164";
        canvas.style.display = "none";
        is_game = false;
        box.style.display = "flex";
        btn_text.textContent = "За черговою перемогою...";

        reload_btn.addEventListener('click', () =>
            window.location.reload() //!
        )
    }
}