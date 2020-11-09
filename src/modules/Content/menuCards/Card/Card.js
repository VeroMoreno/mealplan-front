import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper } from './card.style';

const Card = (props) => {
  const { name } = props;
  return (
    <CardWrapper
      className="CardWrapper"
    >
      <div className="article__name">
        <h2>{name}</h2>
      </div>
    </CardWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
