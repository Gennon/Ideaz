import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Hello from './components/hello';
import ItemInput from './components/item_input';

class Main extends React.Component{
  render() {
    return (
    <div>
        <Hello />
        <ItemInput onSubmitClick={this.handleClick}/>
    </div>
    );
  }
  
  handleClick = (text) => {
      alert(text);
  }
  
};

ReactDOM.render(<Main />, document.querySelector('.container'));
