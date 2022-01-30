import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Button({ text, onClick, type }) {
  return (
    <button
    className={ "init-button" }
    onClick={ onClick }
    id={ type }
  >
    { text }
  </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  clicked: PropTypes.bool,
}.isRequired;

export default Button;
