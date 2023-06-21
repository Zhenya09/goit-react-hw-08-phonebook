import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import style from './ContactForm.module.css';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const normalizedFind = name.toLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
    if (name && number) {
      dispatch(
        addContact({
          name,
          number,
        })
      );
      event.target.reset();
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          className={style.input}
          placeholder="Add a name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={event => setName(event.target.value)}
        ></input>
      </label>
      <input
        type="tel"
        name="phone"
        className={style.input}
        placeholder="Add a number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        onChange={event => setNumber(event.target.value)}
      ></input>

      <button type="submit" className={style.btn}>
        Add
      </button>
    </form>
  );
};

export default ContactForm;
