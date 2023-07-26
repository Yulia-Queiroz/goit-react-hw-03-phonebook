import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const ContainerStyled = styled.div`
  margin-left: 20px;
`;

const MainTitle = styled.h1`
  text-transform: uppercase;
`;

const Title = styled.h2`
  text-transform: uppercase;
`;

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContact = (name, number) => {
    const isContactExists = this.state.contacts.some(
      contact => contact.name === name
    );

    if (isContactExists) {
      Notify.warning(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <ContainerStyled>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addContact} />

        <Title>Contacts</Title>
        <Filter
          filterValue={this.state.filter}
          onFilterChange={this.handleFilter}
        />
        <ContactList
          visibleContacts={visibleContacts}
          onBtnClick={this.handleDeleteContact}
        />
      </ContainerStyled>
    );
  }
}

export default App;
