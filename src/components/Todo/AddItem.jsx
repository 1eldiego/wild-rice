import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    this.props.addTodo(this.state.name);
    this.state.name = '';
    event.preventDefault();
  }

  render() {
    return (
      <li>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <button type="submit">Agregar</button>
        </form>
      </li>
    );
  }
}

AddItem.propTypes = {
  addTodo: React.PropTypes.func.isRequired,
};

export default AddItem;
