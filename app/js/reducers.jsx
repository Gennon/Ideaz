import { ADD_ITEM } from './actions'

const initialState = {
    items: []
};

function items(state = [], action){
    switch(action.type){
        case ADD_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    value: action.value
                }
            ]
        default:
            return state;
    }
}

export default function ideazApp(state = initialState, action) {
    return {
        items: items(state.items, action)
    }
}