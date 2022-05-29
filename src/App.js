import './App.css';
import FilterPanel from './Components/FilterPanel/FilterPanel';
import { useEffect } from 'react';
import axios from 'axios';
import { ACTIONS } from './Reducer/actions';
import { useDispatch } from 'react-redux';
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    getSize();
    getShape();
    getColor();
  });

  const setActive = (data) =>{
    return data.map((d)=>{
      d.active = false;
      return d;
    })
  }

  const getSize = async () =>{
    let {data} =  await axios.get(`http://localhost:3004/sizes`);
    data = setActive(data)
    dispatch({type:ACTIONS.SIZE, data:data});
  }

  const getColor = async () =>{
    let {data} =  await axios.get(`http://localhost:3004/colors`);
    data = setActive(data)
    dispatch({type:ACTIONS.COLOR, data:data});
  }

  const getShape = async () =>{
      let {data} =  await axios.get(`http://localhost:3004/shapes`);
      data = setActive(data)
      dispatch({type:ACTIONS.SHAPE, data:data});
  }
  
  return (
    <div>
      <FilterPanel/>
    </div>
  );
}

export default App;
