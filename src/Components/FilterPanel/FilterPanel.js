import React, {useEffect, useState} from 'react'
import {Checkbox} from 'primereact/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../../Reducer/actions';
import { Divider } from 'primereact/divider';
import PlanetDetails from '../PlanetDetails/PlanetDetails';
import {fetchPlanets, fetchPlanetsWithFilter} from '../../Common/common';

export default function FilterPanel() {
    const color = useSelector(state=> state && state.color ? state.color : null);
    const size = useSelector(state=> state && state.shape ? state.size : null);
    const shape = useSelector(state=> state && state.shape ? state.shape : null);
    const dispatch = useDispatch();
    const [planets, setplanets] = useState([]);
    const [stateCheck, setstateCheck] = useState(false);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = () =>{
        fetchPlanets()
        .then((res)=>{
            setplanets(res.data)
        })
        .catch(()=>{
            console.log("Some error");
        })
    }
    const fetchDataWithFilter = () =>{
        fetchPlanetsWithFilter(color,shape,size)
        .then((res)=>{
            setplanets(res.data);
        })
        .catch(()=>{
            console.log("Some error");
        })
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
    const returnFilterData = (filter, filterName, onchangeMethod) =>{
        return(
            filter && Object.values(filter).map((fil, index)=>{
                return(
                    <div className="field-checkbox" key={index}>
                        <Checkbox inputId={filterName+index} name={filterName} value={index} onChange={onchangeMethod} checked={fil.active}/>
                        <label htmlFor={filterName+index}>{fil.name}</label>
                    </div>
                )
            })
        )
    }

    return (
        <div>
            <div className="card">
                <div className="grid">
                    <div className="col-2 align-items-center justify-content-center" style={{padding:"0vh 3vw"}}>
                        <div className="p-fluid">
                            <h4>Color</h4>
                            {returnFilterData(color, "color", onColorChange)}
                        </div>
                        <div className="p-fluid">
                            <h4>Size</h4>
                            {returnFilterData(size, "size", onSizeChange)}
                        </div>
                        <div className="p-fluid">
                            <h4>Shape</h4>
                            {returnFilterData(shape, "shape", onShapeChange)}
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
