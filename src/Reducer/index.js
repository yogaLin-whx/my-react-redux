const initialize = {
    itemList: [],
    generateValue: 0
}
function reducer(state = initialize, action) {
    switch (action.type) {
        case ("addItem"):
            return { itemList: [...state.itemList, { id: state.generateValue, content: action.content, status: false }], generateValue: state.generateValue + 1 }
        case ("deleteItem"):
            console.log(state.generateValue);
            return { itemList: state.itemList.filter((item, index) => item.id !== action.index), generateValue: state.generateValue }
        case ("mark"):
            console.log(action.index + "mark");
            return {
                itemList: state.itemList.map((item, index) => {
                    if (item.id === action.index) {
                        item.status = !item.status;
                        return item;
                    } else {
                        return item
                    }
                }),
                generateValue: state.generateValue
            }
        default:
            return state
    }
}

export default reducer;