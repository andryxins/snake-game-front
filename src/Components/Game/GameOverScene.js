import Phaser from 'phaser';
import getUserFromLS from '../../libs/getUserFromLS';
import updateUserInLS from '../../libs/updateUserInLS';
import { postResault } from '../../ApiRequests/ApiRequests';
import GameScene from './GameScene';
import gameConfig from './game.config';

let isWin;
let scores;

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }
  init(data) {
    isWin = data.resault >= gameConfig.scoresToWin;
    scores = data.resault;
  }

  preload() {
    this.cameras.main.setBackgroundColor('#24252A');
    this.game.scene.add('GameScene', GameScene);
  }
  create() {
    if (isWin) {
      return this.saveGameResault()
        .then(() => this.winDisplay())
        .catch((e) => console.log(e));
    } else {
      return this.loseDisplay();
    }
  }

  winDisplay() {
    this.add
      .text(310, 50, `You win :-)`, {
        fill: '#0f0',
        fontSize: 40,
      })
      .setOrigin(0.5);

    this.add
      .text(300, 200, `Next Level`, {
        fill: '#0f0',
        fontSize: 20,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', this.nextLevelHandler.bind(this));
  }

  loseDisplay() {
    this.add
      .text(300, 50, `You lose :-(`, {
        fill: '#0f0',
        fontSize: 40,
      })
      .setOrigin(0.5);

    this.add
      .text(300, 200, `Restart`, {
        fill: '#0f0',
        fontSize: 20,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', () => this.scene.start('GameScene'));
  }

  async nextLevelHandler() {
    await this.saveGameResault();
    this.scene.start('GameScene');
  }

  async saveGameResault() {
    const user = await getUserFromLS();

    const updatedUser = {
      ...user,
      level: (user.level += 1),
      scores: (user.scores += scores),
    };

    await postResault(updatedUser)
      .then(() => updateUserInLS(updatedUser))
      .catch((e) => console.log(e));
  }
}
