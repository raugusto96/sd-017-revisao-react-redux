import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Button extends React.Component {
  render() {
    const { text, onClick, type } = this.props;
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
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
}.isRequired;

export default Button;
