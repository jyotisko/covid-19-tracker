import { useContext, useState } from 'react';
import { BiSort } from 'react-icons/bi';
import { DataContext } from '../../context/DataContext';

const Table = () => {

  const { state } = useContext(DataContext);
  const [sortOrder, setSortOrder] = useState('descending');

  const handleSort = () => setSortOrder(prevState => prevState === 'ascending' ? 'descending' : 'ascending');
  const sort = (countries) => {
    if (!countries || countries.length === 0) return countries;
    return countries.sort((a, b) => {
      if (sortOrder === 'descending') {
        if (a.cases > b.cases) return -1;
        if (a.cases < b.cases) return 1;
        else return 1;
      } else {
        if (a.cases > b.cases) return 1;
        if (a.cases < b.cases) return -1;
        else return -1;
      }
    });
  };

  sort(state.countriesData);

  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Cases</th>
          </tr>
        </thead>
        <tbody>
          {state.countriesData.map((country, i) => {
            return (
              <tr key={i}>
                <td>{country.country}</td>
                <td>{country.cases}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div onClick={handleSort} className='sort-btn'>
        <BiSort />
      </div>
    </div>
  );
}

export default Table;