import './App.css';
import FilterPanel from './Components/FilterPanel/FilterPanel';
import {Divider} from 'primereact/divider';
import SearchBar from './Components/SearchBar/SearchBar';
import PlanetDetails from './Components/PlanetDetails/PlanetDetails';

function App() {
  return (
    <>
      <SearchBar/>
      <div className='content'>
        <div className="card">
          <div className="grid">
            <div className="col-2 align-items-center justify-content-center" style={{padding:"0vh 3vw"}}>
              <FilterPanel/>
            </div>
            <div className="col-1">
              <Divider layout="vertical"/>
            </div>
            <div className="col-9 flex align-items-center justify-content-center">
              <PlanetDetails/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
