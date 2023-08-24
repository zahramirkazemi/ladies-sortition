import './styles/persons-table.css'
import Loading from './loading';

const PersonsTable = ({ persons }) => {

  const renderTable = () => <table>
    <thead>
      <tr>
        <th>وضعیت برنده شدن</th>
        <th>نام</th>
        <th>ردیف</th>
      </tr>
    </thead>
    <tbody>
      {persons?.map(person => <tr key={person.id}>
        <td>{person.winned ? person.winned_at : '-'}</td>
        <td>{person.name}</td>
        <td>{person.id + 1}</td>
      </tr>)}
    </tbody>
  </table>

  return ( persons.length ? <div className="persons-table-container">
      {renderTable()}
    </div> : <Loading />
  );
}

export default PersonsTable;
