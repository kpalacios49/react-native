// import { CATEGORIES } from ''

import { FILTER_BREAD, SELECT_BREAD } from "../actions/bread.action";

const initialState = {
    breads: [
        {
            "id": 1,
            "categoryID": 1,
            "name": "En tira",
            "description": "nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate"
        },
        {
            "id": 2,
            "categoryID": 1,
            "name": "Arabe",
            "description": "lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a,"
        },
        {
            "id": 3,
            "categoryID": 3,
            "name": "Selva negra",
            "description": "magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum,"
        },
        {
            "id": 4,
            "categoryID": 3,
            "name": "Lemon pie",
            "description": "nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris."
        },
    ],
    filteredBread: [],
    selected: null,
}

const BreadReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case FILTER_BREAD: 
            const filteredBread = state.breads.filter( br => br.categoryID == action.categoryID )
            return {...state, filteredBread}
        case SELECT_BREAD:
            const indexBread = state.filteredBread.findIndex(cat => cat.id === action.breadID)
            if (indexBread === -1) return state
            return {...state, selected: state.filteredBread[indexBread]}
        default: 
            return state

    }
}

export default BreadReducer;