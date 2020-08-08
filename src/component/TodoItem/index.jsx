import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <>
                <label>{this.props.item.content}</label>
            </>
        )
    }
}

export default TodoItem;