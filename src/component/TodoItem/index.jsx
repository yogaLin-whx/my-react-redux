import React from 'react';

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
                <label onClick={this.handleMark} style={{ textDecorationLine: this.props.item.status ? 'line-through' : 'none' }}>
                    {this.props.item.content}</label><button onClick={this.handleDeleteItem}>delete</button><br />
            </>
        )
    }
}

export default TodoItem;