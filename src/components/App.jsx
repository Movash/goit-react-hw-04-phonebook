import { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { AppCont } from './../App.styled';
import ContactsData from '../data.json'

export class App extends Component {
  state = {
    contacts: ContactsData,
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData && JSON.parse(localData).length) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  createPerson = inputValues => {
    const isAlreadyExist = this.state.contacts.find(
      el => el.name.toLowerCase() === inputValues.name.toLowerCase()
    );
    if (isAlreadyExist)
      return alert(`${inputValues.name} is already in contacts`);

    const newPerson = {
      id: nanoid(),
      ...inputValues,
    };
    this.setState(prev => ({
      contacts: [newPerson, ...prev.contacts],
    }));
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  filterPerson = filterText => {
    this.setState({ filter: filterText });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <AppCont>
        <h1>Phonebook</h1>
        <ContactForm createPerson={this.createPerson} />

        <h2>Contacts</h2>
        <Filter filterPerson={this.filterPerson} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        />
      </AppCont>
    );
  }
}

