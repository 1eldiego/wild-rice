import React from 'react';

const Item = props => (
  <li>
    {props.name}
    {props.done ||
      <button onClick={() => props.completeTodo()}>Terminado</button>
    }
    {!props.done ||
      <span>OK</span>
    }
  </li>
);

Item.propTypes = {
  name: React.PropTypes.string.isRequired,
  done: React.PropTypes.bool.isRequired,
  completeTodo: React.PropTypes.func.isRequired,
};

export default Item;
