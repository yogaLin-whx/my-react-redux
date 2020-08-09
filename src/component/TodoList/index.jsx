import React from 'react';
import TodoItem from '../TodoItem';

class TodoList extends React.Component {

    handleDeleteItem = (index) => {
        this.props.deleteItem(index);
    }

    handleMark = (index) => {
        this.props.mark(index);
    }

    render() {
        return (
            <>
                {
                    this.props.itemList.map((item, index) => {
                        return <TodoItem item={item} key={item.index} index={item.index} deleteItem={this.handleDeleteItem} mark={this.handleMark} />
                    })
                }
            </>
        );
    }
}

export default TodoList;