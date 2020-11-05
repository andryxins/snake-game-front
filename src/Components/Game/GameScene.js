import Phaser from 'phaser';
import getUserFromLS from '../../libs/getUserFromLS';
import GameOverScene from './GameOverScene';
import gameConfig from './game.config';

let snake;
let food;
let cursors;
let roundScores;
let level;
let scoresInfo;
let timer;

//  Direction consts
const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  async init() {
    roundScores = 0;
    const user = await getUserFromLS();
    level = user.level;
  }

  preload() {
    this.cameras.main.setBackgroundColor('#24252A');
    this.game.scene.add('GameOverScene', GameOverScene);
    this.load.image('food', './coin.png');
    this.load.image('player', './player.png');
  }

  create() {
    const Food = new Phaser.Class({
      Extends: Phaser.GameObjects.Image,

      initialize: function Food(scene, x, y) {
        Phaser.GameObjects.Image.call(this, scene);

        this.setTexture('food');
        this.setPosition(x * 16, y * 16);
        this.setOrigin(0);

        this.total = 0;

        scene.children.add(this);
      },

      eat: function () {
        this.total++;
      },
    });

    const Snake = new Phaser.Class({
      initialize: function Snake(scene, x, y, speed) {
        this.headPosition = new Phaser.Geom.Point(x, y);

        this.body = scene.add.group();

        this.head = this.body.create(x * 10, y * 10, 'player');
        this.head.setOrigin(0);

        this.alive = true;

        this.speed = speed;

        this.moveTime = 0;

        this.tail = new Phaser.Geom.Point(x, y);

        this.heading = RIGHT;
        this.direction = RIGHT;
      },

      update: function (time) {
        if (time >= this.moveTime) {
          return this.move(time);
        }
      },

      faceLeft: function () {
        if (this.direction === UP || this.direction === DOWN) {
          this.heading = LEFT;
        }
      },

      faceRight: function () {
        if (this.direction === UP || this.direction === DOWN) {
          this.heading = RIGHT;
        }
      },

      faceUp: function () {
        if (this.direction === LEFT || this.direction === RIGHT) {
          this.heading = UP;
        }
      },

      faceDown: function () {
        if (this.direction === LEFT || this.direction === RIGHT) {
          this.heading = DOWN;
        }
      },

      move: function (time) {
        switch (this.heading) {
          case LEFT:
            this.headPosition.x = Phaser.Math.Wrap(
              this.headPosition.x - 1,
              0,
              38,
            );
            break;

          case RIGHT:
            this.headPosition.x = Phaser.Math.Wrap(
              this.headPosition.x + 1,
              0,
              38,
            );
            break;

          case UP:
            this.headPosition.y = Phaser.Math.Wrap(
              this.headPosition.y - 1,
              0,
              18,
            );
            break;

          case DOWN:
            this.headPosition.y = Phaser.Math.Wrap(
              this.headPosition.y + 1,
              0,
              18,
            );
            break;
          default:
            break;
        }

        this.direction = this.heading;

        Phaser.Actions.ShiftPosition(
          this.body.getChildren(),
          this.headPosition.x * 16,
          this.headPosition.y * 16,
          1,
          this.tail,
        );

        const hitBody = Phaser.Actions.GetFirst(
          this.body.getChildren(),
          { x: this.head.x, y: this.head.y },
          1,
        );

        if (hitBody) {
          this.alive = false;

          return false;
        } else {
          this.moveTime = time + this.speed;

          return true;
        }
      },

      grow: function () {
        const newPart = this.body.create(this.tail.x, this.tail.y, 'player');

        newPart.setOrigin(0);
      },

      collideWithFood: function (food) {
        if (this.head.x === food.x && this.head.y === food.y) {
          this.grow();

          food.eat();

          if (this.speed > 20 && food.total % 5 === 0) {
            this.speed -= 5;
          }

          return true;
        } else {
          return false;
        }
      },

      updateGrid: function (grid) {
        this.body.children.each(function (segment) {
          const bx = segment.x / 16;
          const by = segment.y / 16;

          grid[by][bx] = false;
        });

        return grid;
      },
    });

    food = new Food(this, 3, 4);

    snake = new Snake(this, 8, 8, 100 - level * 5);
    timer = setTimeout(() => {
      snake.alive = false;
      this.scene.start('GameOverScene', { resault: roundScores });
    }, gameConfig.timeForGame);

    cursors = this.input.keyboard.createCursorKeys();

    scoresInfo = this.add.text(500, 50, `${roundScores}`, {
      fill: '#0f0',
    });
  }

  update(time, delta) {
    if (!snake.alive) {
      this.scene.start('GameOverScene');
      return;
    }

    if (cursors.left.isDown) {
      snake.faceLeft();
    } else if (cursors.right.isDown) {
      snake.faceRight();
    } else if (cursors.up.isDown) {
      snake.faceUp();
    } else if (cursors.down.isDown) {
      snake.faceDown();
    }

    if (snake.update(time)) {
      if (snake.collideWithFood(food)) {
        roundScores += 10;
        scoresInfo.setText(`${roundScores}`);
        this.repositionFood();

        if (roundScores >= gameConfig.scoresToWin) {
          clearTimeout(timer);
          this.scene.start('GameOverScene', { resault: roundScores });
        }
      }
    }
  }

  repositionFood() {
    const testGrid = [];

    for (let y = 0; y < 17; y++) {
      testGrid[y] = [];

      for (let x = 0; x < 37; x++) {
        testGrid[y][x] = true;
      }
    }

    snake.updateGrid(testGrid);

    const validLocations = [];

    for (let y = 0; y < 17; y++) {
      for (let x = 0; x < 37; x++) {
        if (testGrid[y][x] === true) {
          validLocations.push({ x: x, y: y });
        }
      }
    }

    if (validLocations.length > 0) {
      const pos =
        validLocations[Math.floor(Math.random() * validLocations.length)];

      food.setPosition(pos.x * 16, pos.y * 16);

      return true;
    } else {
      return false;
    }
  }
}
