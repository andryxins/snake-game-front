import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import StartScene from './StartScene';

class Game extends Component {
  state = {
    initialize: true,

    game: {
      width: 600,
      height: 300,
      type: Phaser.AUTO,
      scene: StartScene,
    },
  };

  render() {
    const { initialize, game } = this.state;
    return <IonPhaser game={game} initialize={initialize} />;
  }
}

export default Game;
