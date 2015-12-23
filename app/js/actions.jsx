/*
 *  ACTION TYPES
 */
 
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
 
/*
 *  ACTION CREATORS
 */ 
 
let nextItemId = 0;

export function addItem(text){
    return {
        type: ADD_ITEM,
        id: nextItemId++,
        value: text
    };
}

export function updateItem(id, text){
    return {
        type: UPDATE_ITEM,
        id: id,
        value: text
    };
}

export function deleteItem(id){
    return {
        type: DELETE_ITEM,
        id: id
    };
}