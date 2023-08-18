import ContactForm from 'components/Contact-form/Contact-form';
import Contactslist from 'components/Contact-list/Contacts-list';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthed } from 'redux/authReducer';
import {
  requestContactsThunk,
  selectContactsError,
  selectIsContactsLoading,
  selectUserContacts,
} from 'redux/contactsReducer';
const ContactsPage = () => {
  const isAuthed = useSelector(selectIsAuthed);
  const isLoading = useSelector(selectIsContactsLoading);
  const contacts = useSelector(selectUserContacts);
  const error = useSelector(selectContactsError);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuthed) return;
    dispatch(requestContactsThunk());
  }, [dispatch, isAuthed]);
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && <p>Loading...</p>}
        {!isLoading && error ? (
          <Notification message="Oops! Something went wrong!">
            <p>Error message: {error}</p>
          </Notification>
        ) : (
          Array.isArray(contacts) && contacts.length > 0 && <Contactslist />
        )}
        {!isLoading && contacts.length === 0 && (
          <Notification message="There is no contacts jet!"></Notification>
        )}
      </Section>
    </div>
  );
};

export default ContactsPage;
