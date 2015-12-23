import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './actions'

const initialState = {
    items: []
};


function item(state = {}, action){
    switch(action.type){
        case ADD_ITEM:
            return {
                id: action.id,
                value: action.value
            }
        case UPDATE_ITEM:
            if(state.id !== action.id){
                return state;
            }
            return {
                id: action.id,
                value: action.value
            }
        case DELETE_ITEM:
            return state.id !== action.id;
        default:
            return state;           
    }
}

function items(state = [], action){
    switch(action.type){
        case ADD_ITEM:
            return [
                ...state,
                item({}, action)
            ]
        case UPDATE_ITEM:
            return state.map(i =>
                item(i, action)
            );
        case DELETE_ITEM:
            return state.filter(i =>
                item(i, action)
            );
        default:
            return state;
    }
}

export default function ideazApp(state = initialState, action) {
    return {
        items: items(state.items, action)
    }
}