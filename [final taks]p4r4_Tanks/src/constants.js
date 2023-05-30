
export const NUMBER_OF_UNITS = 13; //?Величина карти (к-стьХк-сть)

export const TILE_SIZE = 24; //?Розмірність клітинки
export const UNIT_SIZE = 48; //?Розмірність 1го юніта
export const STAGE_SIZE = NUMBER_OF_UNITS * UNIT_SIZE; //?Розмір рівня у юнітах



//?Словник напрямків - клавіш керувань
export const Key = {
    UP: 'KeyW',
    RIGHT: 'KeyD',
    DOWN: 'KeyS',
    LEFT: 'KeyA',
    SPACE: 'Space'
};

//?Словник напрямків
export const Direction = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
};


//? Словник типів місцевості
export const TerrainType = {
    BASE: 0,
    BRICK_WALL: 1,
    STEEL_WALL: 2,
    TREE: 3,
    WATER: 4,
    ICE: 5
};


//
export const BASE_POSITION = [6 * UNIT_SIZE, 12 * UNIT_SIZE]; //?Позиція бази (По центру, на самій нижній лінії)
export const BASE_WIDTH = UNIT_SIZE; //?Ширина бази
export const BASE_HEIGHT = UNIT_SIZE; //?Висота бази
export const BASE_SPRITES = [
    [19 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [20 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const BRICK_WALL_SPRITES = [
    [16 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // повна
    [18 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // 1/2
    [16.5 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // 1/2
    [17 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // 1/2
    [17.5 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // 1/2
    [16 * UNIT_SIZE,  4* UNIT_SIZE, TILE_SIZE, TILE_SIZE], // 1/4
  
];
export const BRICK_WALL_SPRITE_MAP = {
    '0': 5,
    '1': 10,
    '2': 11,
    '4': 12,
};


//! TRAP_WALL_SPRITES, TRAP_WALL_SPRITE_MAP,


 export  const TRAP_WIDTH = UNIT_SIZE;
 export const TRAP_HEIGHT =  UNIT_SIZE;


 export const TRAP_WALL_SPRITES = [
     [19 * UNIT_SIZE, 3 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
 ];
export const BULLET_WIDTH = 12;
export const BULLET_HEIGHT = 12;
export const BULLET_SPEED = 4;
export const BULLET_SPRITES = [
    [20 * UNIT_SIZE + 4, 6 * UNIT_SIZE + 12, BULLET_WIDTH, BULLET_HEIGHT],
    [21.5 * UNIT_SIZE + 4, 6 * UNIT_SIZE + 12, BULLET_WIDTH, BULLET_HEIGHT],
    [21 * UNIT_SIZE + 4, 6 * UNIT_SIZE + 12, BULLET_WIDTH, BULLET_HEIGHT],
    [20.5 * UNIT_SIZE + 4, 6 * UNIT_SIZE + 12, BULLET_WIDTH, BULLET_HEIGHT]
];

export const BULLET_EXPLOSION_WIDTH = UNIT_SIZE;
export const BULLET_EXPLOSION_HEIGHT = UNIT_SIZE;
export const BULLET_EXPLOSION_ANIMATION_SPEED = 50;
export const BULLET_EXPLOSION_SPRITES = [
    [16 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [17 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [18 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const ENEMY_TANK_SPEED = 3;
export const ENEMY_TANK_TURN_TIMER_THRESHOLD = 200;
export const ENEMY_TANK_START_POSITIONS = [
    [4 * UNIT_SIZE, 0],
    [0 * UNIT_SIZE, 0],
    [8 * UNIT_SIZE, 0],
];
export const ENEMY_TANK_SPRITES = [
    [
        [8 * UNIT_SIZE, 15 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [9 * UNIT_SIZE, 15 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [14 * UNIT_SIZE, 15 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [15 * UNIT_SIZE, 15 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [12 * UNIT_SIZE, 15 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [13 * UNIT_SIZE, 15 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [10 * UNIT_SIZE, 15 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [11 * UNIT_SIZE, 15 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
    ],
    [
        [8 * UNIT_SIZE, 12 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [9 * UNIT_SIZE, 12 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [14 * UNIT_SIZE, 12 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [15 * UNIT_SIZE, 12 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [12 * UNIT_SIZE, 12 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [13 * UNIT_SIZE, 12 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [10 * UNIT_SIZE, 12 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [11 * UNIT_SIZE, 12 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
    ],
    [
        [8 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [9 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [14 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [15 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [12 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [13 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [10 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [11 * UNIT_SIZE, 8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
    ],
    [
        [8 * UNIT_SIZE, 13 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [9 * UNIT_SIZE, 13 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [14 * UNIT_SIZE, 13 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [15 * UNIT_SIZE, 13 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [12 * UNIT_SIZE, 13 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [13 * UNIT_SIZE, 13 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [10 * UNIT_SIZE, 13 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [11 * UNIT_SIZE, 13 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
    ]
];

export const PLAYER1_TANK_POSITION = [4 * UNIT_SIZE, 12 * UNIT_SIZE];
export const PLAYER1_TANK_SPRITES = [
    [0 * UNIT_SIZE, 9 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [1 * UNIT_SIZE, 9 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [6 * UNIT_SIZE, 9 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [7 * UNIT_SIZE, 9 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [4 * UNIT_SIZE, 9* UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [5 * UNIT_SIZE, 9 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [2 * UNIT_SIZE, 9 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [3 * UNIT_SIZE, 9 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]

];

export const TANK_WIDTH = UNIT_SIZE;
export const TANK_HEIGHT = UNIT_SIZE;
export const TANK_SPEED = 1.5;
export const TANK_TURN_THRESHOLD = 8;
export const TANK_ANIMATION_FRAME = 20;

export const TANK_EXPLOSION_ANIMATION_SPEED = 100;
export const TANK_EXPLOSION_SPRITES = [
    [16 * UNIT_SIZE,8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [17 * UNIT_SIZE,8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [18 * UNIT_SIZE,8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [19 * UNIT_SIZE,8 * UNIT_SIZE, UNIT_SIZE * 2, UNIT_SIZE * 2],
    [21 * UNIT_SIZE, 8* UNIT_SIZE, UNIT_SIZE * 2, UNIT_SIZE * 2],
    [16 * UNIT_SIZE,8 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const STEEL_WALL_SPRITES = [
    [16 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // 1/4
    [16 * UNIT_SIZE, 1 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // full
];