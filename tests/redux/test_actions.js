import { expect } from 'chai'
import * as actions from '../../app/js/actions'

describe('Testing actions', () => {
  it('should create an action to add a new item', () => {
    const text = 'User should be able to log in';
    const expectedAction = {
        type: actions.ADD_ITEM,
        id: 0,
        value: text
    };
    expect(actions.addItem(text)).to.deep.equal(expectedAction);
  });
})