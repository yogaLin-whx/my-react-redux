const initialize = {
    itemList: []
}
function reducer(state = initialize, action) {
    switch (action.type) {
        case ("addItem"):
            console.log(action.type);
            console.log(action.content);
            return { itemList: [...state.itemList, { content: action.content }] }
        case("deleteItem"):
            console.log(action.index);
            return {itemList: state.itemList.filter((item,index) => index !== action.index)}
        default:
            return state
    }
}

export default reducer;