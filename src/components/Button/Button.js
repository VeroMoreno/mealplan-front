import React from 'react'
import {
  Text, ButtonWrapper
} from './button.style';


const Button = props => {
  console.log(props);
  const onClick = () => {
    !props.disabled && props.onClick();
    console.log('clickclick');
  }
  return (
    <ButtonWrapper
    className={`buttonWrapper ${props.disabled ? 'disabled' : ''}`}
      onClick={onClick}
    >
      {props.text && (
        <Text>{props.text}</Text>
      )}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  text: 'Button',
  disabled: false
}

export default Button;