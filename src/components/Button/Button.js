import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, ButtonWrapper,
} from './button.style';

const Button = ({ disabled, text }) => {
  const onClick = () => {
    // !disabled && onClick();
    console.log('clickclick');
  };
  return (
    <ButtonWrapper
      className={`buttonWrapper ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
    >
      {text && (
        <Text>{text}</Text>
      )}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  // onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: 'Button',
  disabled: false,
};

export default Button;
