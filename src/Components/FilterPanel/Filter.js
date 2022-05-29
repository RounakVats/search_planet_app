import React from 'react'
import {Checkbox} from 'primereact/checkbox';

function Filter({filter, filterName, onchangeMethod}) {
    return(
        <div>
            <h4>{filterName}</h4>
            {filter && Object.values(filter).map((fil, index)=>{
                return(
                    <div className="field-checkbox" key={index}>
                        <Checkbox 
                            inputId={filterName+index} 
                            name={filterName} value={index} 
                            onChange={onchangeMethod} 
                            checked={fil.active}
                        />
                        <label htmlFor={filterName+index}>{fil.name}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default Filter