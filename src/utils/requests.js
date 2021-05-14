import axios from 'axios';

export const requests = {
  getWorldWideData: '/all',
  getAllCountryData: '/countries',
  getHistoricalData: '/historical/all?lastdays=120',
  getHistoricalCountryData: '/historical/{%country%}?lastdays=120'
};

export const instance = axios.create({
  baseURL: 'https://www.disease.sh/v3/covid-19',
  timeout: 10000
});


