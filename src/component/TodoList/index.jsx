import React from 'react';
import TodoItem from '../TodoItem';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.itemList.map((item, index) => {
                        return <TodoItem item={item} key={index} />
                    })
                }
            </>
        );
    }
}



const mapStateToProps = state => {
    return {
        itemList: state.itemList
    }
}

export default connect(mapStateToProps)(TodoList);