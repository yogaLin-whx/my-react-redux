import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TodoContainer from '../TodoContainer';
import DoneList from '../DoneList';

class ItemMenu extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Link to="/">TodoItem</Link><br/>
                    <Link to="/done">DoneItem</Link><br />
                    <Route exact path="/" component={TodoContainer} />
                    <Route exact path="/done" component={DoneList} />
                </BrowserRouter>
            </>
        )
    }
}

export default ItemMenu;