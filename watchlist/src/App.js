import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StockDetailPage from './pages/StockDetailPage';
import StockOverviewPage from './pages/StockOverviewPage';
import { WatchListContextProvider } from './context/watchListContext';


function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StockOverviewPage />}>
          <Route path='/detail/:symbol' element={<StockDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
