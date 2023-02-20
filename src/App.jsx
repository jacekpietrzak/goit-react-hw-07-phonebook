import css from './App.module.css';
import { Contacts } from 'features/Contacts/Contacts';

const App = () => {
  return (
    <div className={css.App}>
      <Contacts />
    </div>
  );
};

export default App;
