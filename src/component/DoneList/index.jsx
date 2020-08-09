import React from 'react';
import TodoList from '../TodoList';
import { connect } from 'react-redux';

class DoneList extends React.Component {

    handleDeleteItem = (index) => {
        console.log("adfadf dsf ads f");
        this.props.deleteItem(index);
    }

    handleMark = (index) => {
        this.props.mark(index);
    }

    render() {
        return (
            <>
                <TodoList itemList={this.props.itemList} deleteItem={this.handleDeleteItem} mark={this.handleMark} />
            </>
        )
    }
}

const mapStateToProps = state => {
    return { itemList: state.itemList.filter((item) => item.status !== false) }
}

const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch({ type: "deleteItem", index: index }),
    mark: (index) => dispatch({ type: "mark", index: index })
})

export default connect(mapStateToProps, mapDispatchToProps)(DoneList);