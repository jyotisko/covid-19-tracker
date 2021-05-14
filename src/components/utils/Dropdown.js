import './../styles/Dropdown.scss';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { DataContext } from '../../context/DataContext';

const Dropdown = () => {
  const { state, country: currentCountry } = useContext(DataContext);
  const history = useHistory();

  const handleCountryChange = e => {
    const value = e.target.value;
    if (!value) return;
    return history.push(`/country/${value}`);
  };

  return (
    <div className='select-dropdown'>
      <select value={currentCountry} onChange={handleCountryChange}>
        {
          state.countriesData.map((country, i) => {
            return (
              <option key={i} value={country.country.toLowerCase()}>{country.country}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default Dropdown;