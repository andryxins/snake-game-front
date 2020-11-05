import Phaser from 'phaser';
import { createBrowserHistory } from 'history';
import getUserFromLS from '../../libs/getUserFromLS';
import updateUserInLS from '../../libs/updateUserInLS';
import { postResault } from '../../ApiRequests/ApiRequests';
import GameScene from './GameScene';
import gameConfig from './game.config';

let history = createBrowserHistory();
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
    this.add
      .text(150, 200, `Top Scores`, {
        fill: '#0f0',
        fontSize: 20,
        cursor: 'pointer',
      })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', this.redirectToTopScoresPage.bind(this));

    if (isWin) {
      return this.winDisplay();
    } else {
      return this.loseDisplay();
    }
  }

  winDisplay() {
    this.add
      .text(300, 50, `You win :-)`, {
        fill: '#0f0',
        fontSize: 40,
      })
      .setOrigin(0.5);

    this.add
      .text(450, 200, `Next Level`, {
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
      .text(450, 200, `Restart`, {
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

  async redirectToTopScoresPage() {
    await this.saveGameResault();
    history.push('/stats');
    history.go();
  }
}
