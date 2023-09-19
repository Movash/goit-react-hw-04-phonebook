import React from 'react';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, handleDelete }) => (
  <List>
    {contacts.map(el => (
      <li key={el.id}>
        {el.name}: {el.number}
        <button type="button" onClick={() => handleDelete(el.id)}>
          Delete
        </button>
      </li>
    ))}
  </List>
);

export default ContactList;


