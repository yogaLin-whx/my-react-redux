import React from 'react';
import {connect} from 'react-redux';

class TodoItem extends React.Component {

    

    handleDeleteItem= () => {
        console.log(this.props.index);
        this.props.deleteItem(this.props.index);
    }


    render() {
        return (
            <>
                <label>{this.props.item.content}</label><button onClick={this.handleDeleteItem}>delete</button><br />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch =>({
    deleteItem:(index) => dispatch({type:"deleteItem",index:index})
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);