/*
 *  ACTION TYPES
 */
 
 export const ADD_ITEM = 'ADD_ITEM';
 
 
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