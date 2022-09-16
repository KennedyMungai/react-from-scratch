import React from 'react';
import Autocomplete from '../components/Autocomplete';
import Stocklist from '../components/Stocklist';


const StockOverviewPage = () => {
  return (
    <div>
        <h2 className="h2">StockOverviewPage</h2>
        <Autocomplete />
        <Stocklist />
    </div>
  )
}

export default StockOverviewPage;