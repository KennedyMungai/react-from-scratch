import './App.css';
import Favourites from './components/Favourites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './context';


function App() {
  return (
    <main>
      <Search />
      {/* <Favourites /> */}
      <Meals />
      {/* <Modal /> */}
    </main>
  );
}

export default App;
