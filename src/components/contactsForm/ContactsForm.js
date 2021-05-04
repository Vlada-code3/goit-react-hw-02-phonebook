import React, { Component } from 'react';
import { ContactsLabel} from './ContactsFormStyled'
import { v4 as uuid } from 'uuid';


import PropTypes from 'prop-types';
class ContactsForm extends Component {
    // static propTypes = {
    //     handleAdd: PropTypes.func.isRequired
    // };
    state = {
        id: uuid(),
        // contacts: [],
        name: "",
        number: "",
        filter: '',
        
    }
    

    onHandleSubmit = (e) => {
        e.preventDefault()
        this.props.addContact(this.state)
        this.props.checkDublicateName(this.state.name);
        
        this.setState({
            // contacts: [],
            name: "",
            number:"",


        })
   
    };
    onHandleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value }); //___v [name] prihodit name i price
    }


    render() {
        return (
            
            <form onSubmit={this.onHandleSubmit}>

                <ContactsLabel>
                    Name
                      <input
                        type="text"
                        onChange={this.onHandleChange}
                        value={this.state.name}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </ContactsLabel>
                <ContactsLabel>
                    Number
                      <input
                        type="tel"
                        onChange={this.onHandleChange}
                        value={this.state.number}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </ContactsLabel>
                <button type="submit" >Add Contact</button>
            </form>
            
               
        );
    }
}

ContactsForm.propTypes = {
    onHandleSubmit: PropTypes.func,
    name: PropTypes.string,
    number: PropTypes.string,
}.isRequired;

export default ContactsForm;