import './../styles/container.scss';
import { useContext } from 'react';
import InfoBox from '../utils/InfoBox';
import Dropdown from '../utils/Dropdown';
import Nav from '../utils/Nav';
import TableChart from '../utils/TableAndChart';
import Map from './../utils/Map';
import { DataContext } from './../../context/DataContext';

const Home = () => {
  const { state } = useContext(DataContext);

  return (
    <div className='container'>
      <Nav />
      <Dropdown />
      <InfoBox data={state.worldWideData} />
      <TableChart chartData={state.historicalData} />
      <Map />
    </div>
  );
}

export default Home;