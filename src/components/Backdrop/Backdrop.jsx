/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const style = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  zIndex: '1',
  left: '0',
  top: '0',
  backgroundColor: 'rgba(0,0,0,0.5)',
};

const Backdrop = props => (
  props.show ? <div style={style} onClick={props.closeModal} /> : null

);

export default Backdrop;
