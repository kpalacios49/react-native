// import { CATEGORIES } from ''

import { SELECT_CATEGORY } from "../actions/category.action";

const initialState = {
    categories: [
        {
            "id": 1,
            "name": "breads",
            "description": "nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate"
        },
        {
            "id": 2,
            "name": "Croissants",
            "description": "lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a,"
        },
        {
            "id": 3,
            "name": "Cakes",
            "description": "magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum,"
        },
        {
            "id": 4,
            "name": "Sweeties",
            "description": "nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris."
        },
    ],
    selected: null,
}

const CategoryReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SELECT_CATEGORY: 
            const indexCategory = state.categories.findIndex(cat => cat.id === action.categoryID)
            if (indexCategory === -1) return state
            return {...state, selected: state.categories[indexCategory]}
        default:
            return state
    }
}

export default CategoryReducer;