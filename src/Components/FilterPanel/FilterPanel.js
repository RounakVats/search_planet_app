import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../../Reducer/actions';
import { Divider } from 'primereact/divider';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import PlanetDetails from '../PlanetDetails/PlanetDetails';
import './FilterPanel.css'
import { useNavigate  } from "react-router-dom";
import {fetchPlanets, fetchPlanetsWithFilter, returnQuery} from '../../Common/common';
import Filter from './Filter';

export default function FilterPanel() {
    const color = useSelector(state=> state && state.color ? state.color : null);
    const size = useSelector(state=> state && state.shape ? state.size : null);
    const shape = useSelector(state=> state && state.shape ? state.shape : null);
    const dispatch = useDispatch();
    const [planets, setplanets] = useState([]);
    const [searchValue, setsearchValue] = useState("");
    const [searchFilter, setsearchFilter] = useState("");
    let navigate = useNavigate();

    useEffect(()=>{
        let urlParams = window.location.search;
        if(urlParams && urlParams!==""){ 
            fetchDataWithFilterApiCall(urlParams);
            urlParams = urlParams.substring(1);
            const filters = urlParams.split("&");
            if(filters[0].charAt(0)==="q"){
                const search = filters[0].split("=")[1];
                setsearchValue(search);
            }
        }else{
            fetchData();
        }
    },[]);

    const fetchData = () =>{
        fetchPlanets()
        .then((res)=>{
            setplanets(res.data)
        })
        .catch((e)=>{
            setplanets([]);
            console.log("Some error occured.", e);
        })
    }
    const fetchDataWithFilter = () =>{
        const append = returnQuery(searchFilter,color,shape,size)
        navigate(`../${append}`, { replace: true });
        fetchDataWithFilterApiCall(append);
    }

    const fetchDataWithFilterApiCall = (append) =>{
        fetchPlanetsWithFilter(append)
        .then((res)=>{
            setplanets(res.data);
        })
        .catch((e)=>{
            setplanets([]);
            console.log("Some error occured.", e);
        })
    }

    const handleChange = (e) => {
        setsearchValue(e.target.value);
    }

    const handleSubmit = () => {
        setsearchFilter(searchValue);
        fetchDataWithFilter();
    }
    
    const onColorChange = (e) => {
        color[e.value].active = e.checked;
        dispatch({type:ACTIONS.COLOR, data:color});
        fetchDataWithFilter();
    }

    const onShapeChange = (e) => {
        shape[e.value].active = e.checked;
        dispatch({type:ACTIONS.SHAPE, data:shape});
        fetchDataWithFilter();
    }

    const onSizeChange = (e) => {
        size[e.value].active = e.checked;
        dispatch({type:ACTIONS.SIZE, data:size});
        fetchDataWithFilter();
    }

    return (
        <div>
            <div className='searchBar'>
                <div className="p-inputgroup">
                    <InputText placeholder="Keyword" value={searchValue} 
                        onChange={handleChange}  onKeyPress={(e)=> e.key === 'Enter' && handleSubmit()}
                    />
                    <Button icon="pi pi-search" className="p-button-info" onClick={handleSubmit}/>
                </div>
            </div>
            <div className="card content">
                <div className="grid">
                    <div className="col-2 align-items-center justify-content-center filters" style={{padding:"0vh 3vw"}}>
                        <div className="p-fluid">
                            <Filter filter={color} filterName={"Color"} onchangeMethod={onColorChange} />
                        </div>
                        <div className="p-fluid">
                            <Filter filter={size} filterName={"Size"} onchangeMethod={onSizeChange} />
                        </div>
                        <div className="p-fluid">
                            <Filter filter={shape} filterName={"Shape"} onchangeMethod={onShapeChange} />
                        </div>
                    </div>
                    <div className="col-1">
                        <Divider layout="vertical"/>
                    </div>
                    <div className="col-9">
                        <PlanetDetails
                            planets={planets}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
