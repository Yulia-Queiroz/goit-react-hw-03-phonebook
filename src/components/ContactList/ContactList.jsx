import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactListStyled = styled.ul`
  padding: 0;
`;

const ContactListItem = styled.li`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ContactName = styled.span`
  font-weight: bold;
`;

const DeleteButton = styled.button`
  background-color: #ff4f4f;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #ff3333;
  }
`;

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
