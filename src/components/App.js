import { Component } from 'react';
import Layout from './Layout/Layout';
import Section from './Section/Section';
import FormPhone from './FormPhone/FormPhone';
import Contacts from './Contacts/Contacts';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

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

  addContactPhone = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(state => {
      return { contacts: [...state.contacts, contact].reverse() };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <Layout>
        <h1>Home Work #2.2</h1>
        <Section title="Phonebook">
          <FormPhone addContactPhone={this.addContactPhone} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Contacts contacts={contacts} />
          </Section>
        )}
      </Layout>
    );
  }
}

export default App;
