import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { AppCont } from './../App.styled';
import ContactsData from '../data.json'

const App = () => {
  const [contacts, setContacts] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    localData && JSON.parse(localData).length
    ? setContacts(JSON.parse(localData))
    : setContacts(ContactsData);
  }, [])

  useEffect(() => {
    contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  
  const createPerson = inputValues => {
    const isAlreadyExist = contacts.find(
      el => el.name.toLowerCase() === inputValues.name.toLowerCase()
    );
    if (isAlreadyExist)
      return alert(`${inputValues.name} is already in contacts`);

    const newPerson = {
      id: nanoid(),
      ...inputValues,
    };
    setContacts(prev => [newPerson, ...prev]);
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const filterPerson = filterText => {
    setFilter(filterText);
  };

  const getFilteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <AppCont>
      <h1>Phonebook</h1>
      <ContactForm createPerson={createPerson} />

      <h2>Contacts</h2>
      <Filter filterPerson={filterPerson} />
      {contacts&&<ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />}
    </AppCont>
  );
}

export default App