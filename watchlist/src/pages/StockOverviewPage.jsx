import React from 'react';
import Autocomplete from '../components/Autocomplete';
import Stocklist from '../components/Stocklist';


const StockOverviewPage = () => {
  return (
    <div>
        <Autocomplete />
        <Stocklist />
    </div>
  )
}

export default StockOverviewPage;