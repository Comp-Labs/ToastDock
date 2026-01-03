import React, { useState } from 'react';
import Alert from './Alert';
import HUD from './HUD';
import Banner from './Banner';
import Example from './Test';

type Props = {
  position: 'center' | 'top' | 'bottom';
}
export default function ToastDock({ position }: Props) {
  // let transformStyle = {};

  // if (position === 'center') {
  //   transformStyle = { transform: 'translate(-50%, -50%)' };
  // } else if (position === 'top') {
  //   transformStyle = { transform: 'translate(-50%, 0)' };
  // } else if (position === 'bottom') {
  //   transformStyle = { transform: 'translate(-50%, 100%)' };
  // }
  return (
    // <div style={{ ...transformStyle }}></div>
    <Example />
  )
}
