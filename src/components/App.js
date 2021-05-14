import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { DataProvider } from './../context/DataContext';
import Home from './home/Home';
import CountryInfo from './countryInfo/CountryInfo';
import NotFound from './notFoundPage/NotFound';


const App = () => {
  return (
    <Router>
      <DataProvider>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/country/:country' component={CountryInfo} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
        <Toaster toastOptions={{ className: 'toast' }} />
      </DataProvider>
    </Router>
  );
}

export default App;
