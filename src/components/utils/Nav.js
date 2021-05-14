import './../styles/Nav.scss';
import logo from './../../assets/logo.svg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Nav = () => {

  const { country: countryFromParams } = useParams();
  const [country, setCountry] = useState('');

  useEffect(() => {
    countryFromParams ? setCountry(countryFromParams) : setCountry('Worldwide');
  }, [countryFromParams]);

  return (
    <nav className='nav'>
      <div className='left'>
        <img src={logo} alt='Covid-19 Tracker Logo' />
      </div>
      <div className='right'>
        <h3>{country} Report</h3>
      </div>
    </nav>
  );
}

export default Nav;