const INITIAL_STATE = {
    data: require('../../data/collection.data.json'),
    categories: require('../../data/collection-category.data.json')
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;