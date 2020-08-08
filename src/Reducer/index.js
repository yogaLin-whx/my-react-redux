const initialize = {
    itemList: []
}
function reducer(state = initialize, action) {
    switch (action.type) {
        case ("addItem"):
            console.log(action.type);
            console.log(action.content);
            return { itemList: [...state.itemList, { content: action.content }] }
        default:
            return state
    }
}

export default reducer;