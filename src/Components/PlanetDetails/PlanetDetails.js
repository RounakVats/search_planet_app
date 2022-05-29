import React from 'react'
import { useSelector } from 'react-redux';
import {Divider} from 'primereact/divider';

export default function PlanetDetails({planets}) {
    const color = useSelector(state=> state && state.color ? Object.values(state.color) : []);
    const shape = useSelector(state=> state && state.shape ? Object.values(state.shape) : []);

    const fetchColor = (id) =>{
        let returnColor = "";
        if(color){
            for (let element of color) {
                if(element.id===id){
                    returnColor = element.name;
                    break;
                }
            }
        }
        return returnColor;
    }
    
    const fetchShape = (id) =>{
        let returnShape = "";
        if(shape){
            for (let element of shape) {
                if(element.id===id){
                    returnShape = element.name;
                    break;
                }
            }
        }
        return returnShape;
    }

    return (
        <div className='planetsDetails'>
            {
                planets && planets.map((planet, index)=>{
                    return(
                        <div key={index}>
                            <h4>{planet.name}</h4>
                            <span>{planet.name+" have "+fetchColor(planet.color)+" and "+fetchShape(planet.shape)+" shape."}</span>
                            <Divider layout="horizontal"/>
                        </div>
                    )
                })
            }
        </div>
    )
}
