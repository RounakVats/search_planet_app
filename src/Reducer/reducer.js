import { ACTIONS } from "./actions";
const initialState ={
    color:[],
    size:[],
    shape:[]
};

export function reducer(state={initialState}, action){
    switch(action.type){
        case ACTIONS.SHAPE:
            state={...state}
            state.shape = {...action.data}
            return state;
        case ACTIONS.SIZE:
            state={...state}
            state.size = {...action.data}
            return state;
        case ACTIONS.COLOR:
            state={...state}
            state.color = {...action.data}
            return state;
        default:
            return null;
    }
}