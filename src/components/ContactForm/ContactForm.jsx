import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormContainer = styled.form`
  box-sizing: border-box;
  width: 400px;
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Span = styled.span`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

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
