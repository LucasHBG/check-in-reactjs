import React from 'react';
import Lottie from 'react-lottie';
import animation_remote_work from './assets/lotties/animation_remote_work.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation_remote_work,
  renderSettings: {
      preserveAspectRatio: "xMidYMid slice"
  }
};

export const Logo = props => {

  return <Lottie isClickToPauseDisabled={true} options={defaultOptions} height={400} width={400}/>;
};
