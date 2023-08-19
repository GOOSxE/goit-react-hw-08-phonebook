import React from 'react';
import css from './Contact-form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk, selectUserContacts } from 'redux/contactsReducer';
const ContactForm = () => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const contactData = {
      name: form.elements.contactName.value,
      number: form.elements.contactNumber.value,
    };
    if (contacts.find(contact => contact.name === contactData.name)) {
      alert(`${contactData.name} is already in contacts!`);
      return;
    }
    dispatch(addContactThunk(contactData));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className={css.label}>
        <p className={css.title}>Name: </p>
        <input
          className={css.input}
          maxLength={17}
          type="text"
          name="contactName"
          required
        ></input>
      </label>
      <label className={css.label}>
        <p className={css.title}>Number: </p>
        <input
          className={css.input}
          maxLength={22}
          type="tel"
          name="contactNumber"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
