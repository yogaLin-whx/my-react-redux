import React from 'react';

class InputItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleAddItem = () => {
        if(this.state.inputValue !== ''){
            this.props.addItem(this.state.inputValue);
            this.setState({
                inputValue: ''
            })
        }
    }

    render() {
        return (
            <>
                <input placeholder="inset todo item" onChange={this.handleChange.bind(this)} value={this.state.inputValue}/><button onClick={this.handleAddItem}>Add</button>
            </>
        )
    }
}

export default InputItem;
