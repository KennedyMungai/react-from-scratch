import './App.css';
import {BrowserRouter, route, routes} from 'react-router-dom';
import StockDetailPage from './pages/StockDetailPage';
import StockOverviewPage from './pages/StockOverviewPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <routes>
          <route path='/' elememt={<StockOverviewPage />}>

          </route>
        </routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
