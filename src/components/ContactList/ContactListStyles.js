import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  padding: 0;
`;

export const ContactListItem = styled.li`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const DeleteButton = styled.button`
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
