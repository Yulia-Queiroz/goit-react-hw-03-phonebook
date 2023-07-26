import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  Label,
  Span,
  Input,
  SubmitButton,
} from './ContactFormStyles';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addName = evt => {
    return this.setState({ name: evt.currentTarget.value });
  };

  addNumber = evt => {
    return this.setState({ number: evt.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Label>
          <Span> Name</Span>

          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.addName}
            required
          />
        </Label>
        <Label>
          <Span> Number</Span>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.addNumber}
            required
          />
        </Label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormContainer>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
