import React from 'react';
import { connect } from 'react-redux';

class TodoItem extends React.Component {


    handleMark = () => {
        this.props.mark(this.props.index);
    }

    handleDeleteItem = () => {
        this.props.deleteItem(this.props.index);
    }


    render() {
        return (
            <>
                <label onClick={this.handleMark} style={{ textDecorationLine: this.props.item.status ? 'line-through' : 'none' }}>{this.props.item.content}</label><button onClick={this.handleDeleteItem}>delete</button><br />
            </>
        )
    }
}

const mapStateToProps = state => {
    return { itemList: state.itemList }
}

const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch({ type: "deleteItem", index: index }),
    mark: (index) => dispatch({ type: "mark", index: index })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);