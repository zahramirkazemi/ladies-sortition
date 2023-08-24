import axios from 'axios';
import { useEffect, useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import PersonsTable from './persons-table';
import './styles/app.css';

const App = () => {
  
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/zahramirkazemi/sortition-apis/Persons')
    .then(response => setPersons(response.data));
  },[]);

  return (
    <div className="App">
      <div className='header'>
        <p className='temporary-message'>قرعه کشی از اول مهرماه شروع میشه...</p>
        <p className='temporary-message'>(مبلغ نهایی 50 میلیون تومن با اقساط 25 ماهه 2 میلیون تومن)</p>
      </div>
      <h3>ثبت نام کنندگان:</h3>
      <ProgressBar className="progress-bar-wrapper" labelSize='12px' bgColor='#595E9B' baseBgColor='#E1E2EF' completed={persons.length} customLabel={`${persons.length} نفر`} maxCompleted={25} />
      <PersonsTable persons={persons}/>
    </div>
  );
}

export default App;
