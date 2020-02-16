const initialState = []

export const customersReducers = (state = initialState, action) => {
    switch(action.type) {
        case "SET_CUSTOMERS" : {
            return [...state, ...action.payload]
        }
        default: {
            return [...state]
        }
    }
}