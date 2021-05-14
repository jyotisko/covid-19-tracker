import './../styles/Map.scss';
import { useContext } from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { DataContext } from './../../context/DataContext';

const Map = ({ mapCenter = [0, 0] }) => {
  const { state } = useContext(DataContext);

  return (
    <section className='map-container'>
      <div id='map'>
        <MapContainer center={mapCenter} zoom={4} minZoom={2} scrollWheelZoom={false} touchZoom={false}>
          <TileLayer
            noWrap={true}
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
          />
          {
            state.countriesData?.length > 0 && state.countriesData.map((country, i) => {
              const center = [country.countryInfo.lat, country.countryInfo.long];
              const color = state.casesTypeColors[state.currentDataType].hex;
              return <Circle key={i} center={center} pathOptions={{ fillColor: color, color: color }} radius={Math.sqrt(country[state.currentDataType]) * state.casesTypeColors[state.currentDataType].multiplier} />
            })
          }
        </MapContainer>
      </div>
    </section >
  );
}

export default Map;