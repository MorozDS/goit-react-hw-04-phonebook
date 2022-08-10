import s from './FilterContact.module.css';
import PropTypes from 'prop-types';

export default function FilterContact({ filter, onChange }) {
      return (
      <>
        <p className={s.filterheader}>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          onChange={onChange}
          value={filter}
          className={s.input}
        />
      </>
    );
  }

 FilterContact.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };