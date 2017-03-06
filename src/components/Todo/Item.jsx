import React from 'react';

const Item = props => (
  <li>
    {props.name}
    {props.done ||
      <button onClick={() => props.completeTodo(props.id)}>Terminar</button>
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
  id: React.PropTypes.string.isRequired,
};

export default Item;
