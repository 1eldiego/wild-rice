import React from 'react';

const AddItem = props => (
  <li>
    <form
      onSubmit={(event) => {
        props.addTodo(event.target.value);
        event.preventDefault();
      }}
    >
      <input
        type="text"
        value={props.typeText}
        onChange={props.addText}
      />
      <button type="submit">Agregar</button>
    </form>
  </li>
);

AddItem.propTypes = {
  addTodo: React.PropTypes.func.isRequired,
  typeText: React.PropTypes.string.isRequired,
  addText: React.PropTypes.func.isRequired,
};

export default AddItem;
