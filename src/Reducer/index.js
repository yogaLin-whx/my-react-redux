const initialize = {
    itemList: []
}
function reducer(state = initialize, action) {
    switch (action.type) {
        case ("addItem"):
            return { itemList: [...state.itemList, { content: action.content, status: false }] }
        case ("deleteItem"):
            return { itemList: state.itemList.filter((item, index) => index !== action.index) }
        case ("mark"):
            return {
                itemList: state.itemList.map((item, index) => {
                    if (index === action.index) {
                        item.status = !item.status;
                        console.log("status" + item.status);
                        return item;
                    } else {
                        return item
                    }
                })
            }
        default:
            return state
    }
}

export default reducer;