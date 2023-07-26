import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactListStyled,
  ContactListItem,
  ContactName,
  DeleteButton,
} from './ContactListStyles';

const ContactList = ({ visibleContacts, onBtnClick }) => {
  return (
    <ContactListStyled>
      {visibleContacts.map(contact => {
        return (
          <ContactListItem key={contact.id}>
            <span>
              <ContactName>{contact.name}</ContactName>: {contact.number}
            </span>
            <DeleteButton
              type="button"
              onClick={() => onBtnClick(contact.name)}
            >
              Delete
            </DeleteButton>
          </ContactListItem>
        );
      })}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default ContactList;
