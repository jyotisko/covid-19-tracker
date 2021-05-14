import { createContext, useEffect, useState } from 'react';
import { instance as axios, requests } from './../utils/requests';
import catchAsync from './../utils/catchAsync';

export const DataContext = createContext();

export const DataProvider = (props) => {

  const [country, setCountry] = useState('worldwide');

  const [state, setState] = useState({
    worldWideData: {},
    countriesData: [],
    currentDataType: 'cases',
    historicalData: {},
    currentCountryHistoricalData: {},
    currentCountry: country,
    casesTypeColors: {
      cases: {
        hex: '#cc1034',
        multiplier: 200
      },
      recovered: {
        hex: '#7dd71d',
        multiplier: 300
      },
      deaths: {
        hex: '#383838',
        multiplier: 500
      }
    }
  });

  useEffect(() => {
    catchAsync(async () => {
      const { data } = await axios.get(requests.getWorldWideData);
      setState(prevState => ({ ...prevState, worldWideData: data }));
    });
  }, []);

  useEffect(() => {
    catchAsync(async () => {
      const { data } = await axios.get(requests.getAllCountryData);
      setState(prevState => ({ ...prevState, countriesData: data }));
    });
  }, []);

  useEffect(() => {
    catchAsync(async () => {
      const { data } = await axios.get(requests.getHistoricalData);
      setState(prevState => ({ ...prevState, historicalData: data }));
    });
  }, []);

  useEffect(() => {
    catchAsync(async () => {
      setState(prevState => ({ ...prevState, currentCountryHistoricalData: {} }));
      if (!country) return;
      const { data } = await axios.get(requests.getHistoricalCountryData.replace('{%country%}', country === 'worldwide' ? 'all' : country));
      setState(prevState => ({ ...prevState, currentCountryHistoricalData: country === 'worldwide' ? data : data.timeline }));
    });
  }, [country]);

  return (
    <DataContext.Provider value={{ state, setState, country, setCountry }}>
      {props.children}
    </DataContext.Provider>
  )
};

