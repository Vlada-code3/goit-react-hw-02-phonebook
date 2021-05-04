import React, { Component } from 'react';
import ContactsForm from './contactsForm/ContactsForm';
import ContactsList from './contactsList/ContactsList';
import { v4 as uuid } from 'uuid';
import Section from './section/Section';

import ContactsFilter from './filter/ContactsFilter';




class Contacts extends Component {
    state = {
        filter: '',
        name: '',
        number: '',
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        
    };

    addContact = contact => {
       
        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, {...contact, id: uuid() }]
            }
        })
   
    }
    
    checkDublicateName = (name) => {
    

        const isDuplicate = this.state.contacts.some((contact) => contact.name === name);

        if (isDuplicate) {
            alert(`${name} is already existed! `);
            return;
        }

    };


    onDeleteContact = (e) => {
        const { id } = e.target
        this.setState({
            contacts:this.state.contacts.filter(contact=>contact.id!==id)
        })
    }

    setFilter = (e) => {
        const { value } = e.target
        this.setState({
            filter: value
        })
    };

    getFilteredClients = () => {
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    }
    render() {
        return (
            
            <>
                <Section title="Phonebook">
                    
                   
                    <ContactsForm addContact={this.addContact} checkDublicateName={this.checkDublicateName} />
                    
                </Section>
                
                <Section title="Find contact by name">
                    <ContactsFilter filter={this.state.filter} setFilter={this.setFilter} />
                </Section>
                    
                <Section title="Contacts">
                    <ContactsList contacts={this.state.contacts} onDeleteContact={this.onDeleteContact} contacts={this.getFilteredClients()}/>
                </Section>
               

                </>

        );
    }
}

export default Contacts;