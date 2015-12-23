import { expect } from 'chai'
import reducer from '../../app/js/reducers'
import * as actions from '../../app/js/actions'

describe('Testing reducers', () => {
    
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({ items: []})
  });

  it('should handle ADD_ITEM', () => {
      
    const initialState = {}
    
    const nextState = { 
        items: [
            {
                value: 'User should be able to log in',
                id: 0
             }
        ]    
    }
    
    const action = {
        type: actions.ADD_ITEM,
        id: 0,
        value: 'User should be able to log in'
    }
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
  it('should handle UPDATE_ITEM', () => {
      
    const initialState = {
        items: [
            {
                value: 'User should be able to log in',
                id: 0
            }
        ]     
    }
    
    const nextState = { 
        items: [
            {
                value: 'User should be able to log out',
                id: 0
            }
        ]    
    }
    
    const action = {
        type: actions.UPDATE_ITEM,
        id: 0,
        value: 'User should be able to log out'
    }
      
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
  it('should handle DELETE_ITEM', () => {
      
    const initialState = {
        items: [
            {
                value: 'User should be able to log in',
                id: 0
            }
        ]     
    }
    
    const nextState = { 
        items: []    
    }
    
    const action = {
        type: actions.DELETE_ITEM,
        id: 0
    }
      
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
})