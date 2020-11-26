import s from './Contacts.module.css';

const Filter = () => {
  return (
    <div className={s.filter}>
      <label>
        Find contacts by name
        <input type="text" />
      </label>
    </div>
  );
};

const Contacts = ({ contacts }) => {
  const contactList = contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
      </li>
    );
  });

  return (
    <div className={s.contacts}>
      <Filter />
      <ul>{contactList}</ul>
    </div>
  );
};

export default Contacts;
