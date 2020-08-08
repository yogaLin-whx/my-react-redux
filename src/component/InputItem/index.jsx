import React from 'react';
import { connect } from 'react-redux';

class InputItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleAddItem = () => {
        this.props.handleAddItem(this.state.inputValue);
    }

    render() {
        return (
            <>
                <input placeholder="inset todo item" onChange={this.handleChange.bind(this)} /><button onClick={this.handleAddItem}>Add</button>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => ({
    handleAddItem: (content) => dispatch({ type: "addItem", content: content })
})

export default connect(mapStateToProps, mapDispatchToProps)(InputItem);
