import React from 'react';
import css from './Contacts-list.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, selectUserContacts } from 'redux/contactsReducer';
const Contactslist = () => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li className={css.list_item} key={contact.id}>
            <h3 className={css.contact_wrap}>
              <span>Name: {contact.name}</span>
              <span>{contact.number}</span>
            </h3>
            <button
              className={css.button}
              onClick={() => handleDeleteContact(contact.id)}
              aria-label="Delete contact"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Contactslist;
