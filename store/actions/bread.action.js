export const FILTER_BREAD = "FILTER_BREAD"
export const SELECT_BREAD = "SELECT_BREAD"

export const filterBread = (id) => (
    {
        type: FILTER_BREAD,
        categoryID: id,
    }
)

export const selectBread = (id) => (
    {
        type: SELECT_BREAD,
        breadID: id,
    }
)