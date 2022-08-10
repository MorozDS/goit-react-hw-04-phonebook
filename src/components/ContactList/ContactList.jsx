import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, handleClick }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} id={contact.id} className={s.item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => handleClick(contact.id)}
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};
