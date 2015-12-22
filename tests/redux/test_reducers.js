import { expect } from 'chai'
import reducer from '../../app/js/reducers'
import * as actions from '../../app/js/actions'

describe('Testing reducers', () => {
    
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({ items: []})
  });

  it('should handle ADD_ITEM', () => {
    expect(
      reducer({}, {
        type: actions.ADD_ITEM,
        id: 0,
        value: 'User should be able to log in'
      })
    ).to.deep.equal(
        { 
            items: [{
                        value: 'User should be able to log in',
                        id: 0
                    }]    
        }
    );
  });
})