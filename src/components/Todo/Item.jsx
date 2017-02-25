import React from 'react';

const Item = props => (
  <li>
    {props.name}
    {props.done ||
      <span>OK</span>
    }
  </li>
);

Item.propTypes = {
  name: React.PropTypes.string.isRequired,
  done: React.PropTypes.bool.isRequired,
};

export default Item;
