import Phaser from 'phaser';
import getUserFromLS from '../../libs/getUserFromLS';
import updateUserInLS from '../../libs/updateUserInLS';
import GameScene from './GameScene';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }
  preload() {
    this.cameras.main.setBackgroundColor('#24252A');
    this.game.scene.add('GameScene', GameScene);
  }
  async create() {
    this.add
      .text(150, 200, 'Continue', {
        fill: '#0f0',
      })
      .setInteractive()
      .on('pointerdown', this.onContinueHandler.bind(this));
    this.add
      .text(300, 200, 'Start New Game', {
        fill: '#0f0',
      })
      .setInteractive()
      .on('pointerdown', this.onStartNewGameHandler.bind(this));

    const { scores } = await getUserFromLS();
    this.add.text(500, 50, `${scores}`, {
      fill: '#0f0',
    });
  }

  onContinueHandler() {
    this.scene.start('GameScene');
  }

  async onStartNewGameHandler() {
    const user = await getUserFromLS();

    await updateUserInLS({ ...user, scores: 0, level: 1 });
    this.scene.start('GameScene');
  }
}
