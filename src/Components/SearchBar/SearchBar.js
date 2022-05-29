import React, {useState} from 'react'
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../SearchBar/SearchBar.css'

export default function SearchBar() {
    const [searchValue, setsearchValue] = useState("");

    const handleChange = (e) =>{
        setsearchValue(e.target.value);
    }

    const handleSubmit = () =>{
        console.log(searchValue);
    }

    return (
        <div className='searchBar'>
            <div className="p-inputgroup">
                <InputText placeholder="Keyword" value={searchValue} onChange={handleChange} />
                <Button icon="pi pi-search" className="p-button-info" onClick={handleSubmit}/>
            </div>
        </div>
    )
}
