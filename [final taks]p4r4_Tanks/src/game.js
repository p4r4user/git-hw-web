import stages from './stages.js';
import Stage from './stage.js';

export default class Game {
    constructor({ input, view }) {
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
        this.view.update(this.stage, this.player1, this.player2);
        this.frames = 0;

        this.lastFrame = currentFrame;

        requestAnimationFrame(this.loop);
    }

    onGameOver() {
        alert("😜😜😜Game Over...again...");
        window.close();
        
    }

    onWin(){
        alert("Як довгий потік, що розмиває скелі, так і навчання довгим шляхом осягає мудрість. Нехай ми віддамося йому, начебто носові долину, і допоможемо йому витеснити шлях до глибини нашого розуму. Тільки тоді ми збагнемо справжню мудрість, як блискавка, що освітлює небесні вершини.");
        window.close();
    }
}