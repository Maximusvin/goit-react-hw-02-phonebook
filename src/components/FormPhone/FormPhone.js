import { Component } from 'react';
import s from './FormPhone.module.css';

class FormPhone extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContactPhone(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            name="number"
            type="tel"
            value={number}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default FormPhone;
