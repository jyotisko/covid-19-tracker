import './../styles/container.scss';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { DataContext } from './../../context/DataContext';
import InfoBox from './../utils/InfoBox';
import Nav from './../utils/Nav';
import Map from './../utils/Map';
import TableAndChart from './../utils/TableAndChart';
import Dropdown from './../utils/Dropdown';

const CountryInfo = () => {
  const { state, setCountry } = useContext(DataContext);
  const { country: countryFromParams } = useParams();
  const country = state.countriesData.filter(country => country.country.toLowerCase() === countryFromParams.toLowerCase());

  setCountry(country[0]?.country?.toLowerCase());

  return (
    <div className='container'>
      <Nav />
      {
        country?.length > 0 ? (
          <>
            <Dropdown />
            <InfoBox data={country[0]} />
            <Map mapCenter={[country[0].countryInfo.lat, country[0].countryInfo.long]} />
            <TableAndChart chartData={state.currentCountryHistoricalData} />
          </>
        ) : ''
      }
    </div>
  );
}

export default CountryInfo;