import React from 'react';
import InputItem from '../InputItem';
import TodoList from '../TodoList';
import {connect} from 'react-redux';

class TodoContainer extends React.Component {
    
    handleAddItem = (content) => {
        this.props.addItem(content);
    }

    handleDeleteItem = (index) => {
        this.props.deleteItem(index);
    }
    
    handleMark = (index) => {
        this.props.mark(index);
    }


    render() {
        return (
            <>
                <InputItem  addItem={this.handleAddItem}/><br />
                <TodoList deleteItem={this.handleDeleteItem}  mark={this.handleMark}  itemList={this.props.itemList}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return { itemList: state.itemList }
}

const mapDispatchToProps = dispatch => ({
    addItem: (content) => dispatch({ type: "addItem", content: content }),
    deleteItem: (index) => dispatch({ type: "deleteItem", index: index }),
    mark: (index) => dispatch({ type: "mark", index: index })
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoContainer);