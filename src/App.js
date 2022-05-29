import './App.css';
import FilterPanel from './Components/FilterPanel/FilterPanel';
import { useEffect } from 'react';
import axios from 'axios';
import { ACTIONS } from './Reducer/actions';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

function App() {
  const dispatch = useDispatch()
  let urlParams = window.location.search;

  useEffect(()=>{
    getSize();
    getShape();
    getColor();
  });

  const setActive = (data) =>{
    return data.map((d)=>{
      d.active = checkStatus(d.id);
      return d;
    })
  }
  const checkStatus = (dId) =>{
    let status = false;
    urlParams = urlParams.substring(1);
    const filters = urlParams.split("&");
    for (let index = 0; index < filters.length; index++) {
      if(filters[index].charAt(0)==="q"){
          continue;
      }else{
        const check = filters[index].split("=");
        if(dId===check[1]) {
          status = true;
        }
      }
    }
    return status;
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
    <Router>
      <Routes>
        <Route path="/" element={<FilterPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
