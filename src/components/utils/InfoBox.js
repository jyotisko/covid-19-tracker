import './../styles/InfoBox.scss';
import { useContext, useEffect } from 'react';
import numeral from 'numeral';
import { DataContext } from '../../context/DataContext';

const InfoBox = ({ data }) => {

  const formatNumber = number => numeral(number).format('0.00 a').toUpperCase();
  const calculatePercentage = number => ((number / data.cases) * 100).toFixed(1);

  const { setState } = useContext(DataContext);

  useEffect(() => {
    const handleClick = e => {
      const infobox = e.target.closest('.infobox');
      if (!infobox) return;
      const type = infobox.dataset.type;
      if (!type) return;
      setState(prevState => ({ ...prevState, currentDataType: type }));
    };

    const infoboxContainer = document.querySelector('.infobox-container');
    infoboxContainer.addEventListener('click', e => handleClick(e));
    return infoboxContainer.removeEventListener('click', e => handleClick(e));
  }, []);

  return (
    <section className='infobox-container'>
      <div className='infobox infobox--1 infobox--total' data-type='cases'>
        <h1>Total cases</h1>
        <h3>{formatNumber(data.cases)}</h3>
        <h5>{data.todayCases} cases today</h5>
      </div>

      <div className='infobox infobox--2 infobox--active' data-type={null}>
        <h1>Active cases</h1>
        <h3>{formatNumber(data.active)} <span>{calculatePercentage(data.active)}%</span></h3>
      </div>

      <div className='infobox infobox--3 infobox--recovered' data-type='recovered'>
        <h1>Total Recovered</h1>
        <h3>{formatNumber(data.recovered)} <span>{calculatePercentage(data.recovered)}%</span></h3>
        <h5>{data.todayRecovered} recovered today</h5>
      </div>

      <div className='infobox infobox--4 infobox--death' data-type='deaths'>
        <h1>Total Death</h1>
        <h3>{formatNumber(data.deaths)} <span>{calculatePercentage(data.deaths)}%</span></h3>
        <h5>{data.todayDeaths} deaths today</h5>
      </div>
    </section>
  );
}

export default InfoBox;