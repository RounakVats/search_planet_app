import React, {useState, useEffect} from 'react'
import {Checkbox} from 'primereact/checkbox';

export default function FilterPanel() {
    const [selectedColor, setColor] = useState([]);
    const [selectedShape, setShape] = useState([]);
    const [selectedSize, setSize] = useState([]);
    // const history = useHistory();

    useEffect(()=>{
        // history.push('/'+{selectedColor})
    }, [selectedColor]);

    const commonMethod = (selected, e) =>{
        let selectedValues = [...selected];

        if (e.checked)
            selectedValues.push(e.value);
        else
            selectedValues.splice(selectedValues.indexOf(e.value), 1);

        return selectedValues;
    }
    
    const onColorChange = (e) => {
        setColor(commonMethod(selectedColor, e));
    }
    const onShapeChange = (e) => {
        setShape(commonMethod(selectedShape, e));
    }
    const onSizeChange = (e) => {
        setSize(commonMethod(selectedSize, e));
    }
    return (
        <>
            <div className="p-fluid">
                <h4>Color</h4>
                <div className="field-checkbox">
                    <Checkbox inputId="color1" name="color" value="Red" onChange={onColorChange} checked={selectedColor.includes("Red")}/>
                    <label htmlFor="color1">Red</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="color2" name="color" value="Green" onChange={onColorChange}  checked={selectedColor.includes("Green")}/>
                    <label htmlFor="color2">Green</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="color3" name="color" value="Blue" onChange={onColorChange}  checked={selectedColor.includes("Blue")}/>
                    <label htmlFor="color3">Blue</label>
                </div>
            </div>
            <div className="p-fluid">
                <h4>Shape</h4>
                <div className="field-checkbox">
                    <Checkbox inputId="shape1" name="shape" value="Small" onChange={onShapeChange}  checked={selectedShape.includes("Small")}/>
                    <label htmlFor="shape1">Small</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="shape2" name="shape" value="Medium" onChange={onShapeChange} checked={selectedShape.includes("Medium")}/>
                    <label htmlFor="shape2">Medium</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="shape3" name="shape" value="Large" onChange={onShapeChange} checked={selectedShape.includes("Large")}/>
                    <label htmlFor="shape3">Large</label>
                </div>
            </div>
            <div className="p-fluid">
                <h4>Size</h4>
                <div className="field-checkbox">
                    <Checkbox inputId="size1" name="size" value="Round" onChange={onSizeChange} checked={selectedSize.includes("Round")}/>
                    <label htmlFor="size1">Round</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="size2" name="size" value="Oval" onChange={onSizeChange} checked={selectedSize.includes("Oval")}/>
                    <label htmlFor="size2">Oval</label>
                </div>
            </div>
        </>
    )
}
