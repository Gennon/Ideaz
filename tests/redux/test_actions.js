import { expect } from 'chai'
import * as actions from '../../app/js/actions'

describe('Testing actions', () => {
  it('should be able to add a new item', () => {
    const text = 'User should be able to log in';
    const expectedAction = {
        type: actions.ADD_ITEM,
        id: 0,
        value: text
    };
    expect(actions.addItem(text)).to.deep.equal(expectedAction);
  });
  
  
  it('should be able to update an item', () => {
    const id = 0;
    const text = 'User should be able to log in';
    const expectedAction = {
        type: actions.UPDATE_ITEM,
        id: id,
        value: text
    };
    expect(actions.updateItem(id, text)).to.deep.equal(expectedAction);
  });
  
  it('should be able to delete an item', () => {
    const id = 0;
    const expectedAction = {
        type: actions.DELETE_ITEM,
        id: id
    };
    expect(actions.deleteItem(id)).to.deep.equal(expectedAction);
  });
})