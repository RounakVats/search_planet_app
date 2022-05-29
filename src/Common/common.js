import axios from "axios";

export const fetchPlanets = async() => {
    return axios.get(`http://localhost:3004/planets`);
    
}
const getFilterIDs = (filter, filterName) =>{
    let returnFilterIDs = "";
    filter && Object.values(filter).map((fil)=>{
        if(fil.active){
            if(returnFilterIDs==="")
                returnFilterIDs = returnFilterIDs+filterName+"="+fil.id;
            else
                returnFilterIDs = returnFilterIDs+"&"+filterName+"="+fil.id;
        }
    })
    return returnFilterIDs;
}
export const fetchPlanetsWithFilter = (color, shape,size) =>{ 
    let append = "?"
    const colorFilter = getFilterIDs(color, "color")
    if(colorFilter!=="")append = append + colorFilter;
    const shapeFilter = getFilterIDs(shape, "shape")
    if(shapeFilter!=="")append = append === '?' ? append + shapeFilter : append + "&" + shapeFilter;
    const sizeFilter = getFilterIDs(size, "size")
    if(sizeFilter!=="")append = append === '?' ? append + sizeFilter : append + "&" + sizeFilter;

    return axios.get(`http://localhost:3004/planets${append}`);
}