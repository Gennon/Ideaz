import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';

class Main extends React.Component{
  render() {
    return (
    <div>
        <Hello />
    </div>
    );
  }
};

ReactDOM.render(<Main />, document.querySelector('.container'));
