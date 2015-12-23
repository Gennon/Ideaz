import React from 'react';
import { Input, Button } from 'react-bootstrap';

class ItemInput extends React.Component{
    
    static defaultProps = {
        placeholder: "Write something crazy",
        submitString: "Add"
    }
    
    static propTypes = {
        placeholder: React.PropTypes.string,
        submitString: React.PropTypes.string,
        onSubmitClick: React.PropTypes.func
    }
    
    state = {
        value: '',
    }
    
    render() {
        return (
            <form>
                <Input type="text" ref="input" standalone
                       value={this.state.value} 
                       placeholder={this.props.placeholder} 
                       onChange={this.handleChange} 
                />
                <Button type="submit" 
                        value={this.props.submitString} 
                        onClick={this.handleClick}
                >
                {this.props.submitString}
                </Button>
            </form>
        );
    }
    
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    handleClick = (event) => {
        event.preventDefault();
        this.props.onSubmitClick(this.state.value);
        this.setState({value: ''});
    }
}

export default ItemInput;