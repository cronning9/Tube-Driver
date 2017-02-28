'use strict';

import React from 'react';

import Video from './Video';
import VideoInfo from './VideoInfo';

const PlayerPanel = () =>
  <section id="player-panel">
    <Video/>
    <VideoInfo/>
  </section>

export default PlayerPanel;
