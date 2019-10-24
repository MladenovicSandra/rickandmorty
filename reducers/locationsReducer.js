const initData = {
    locations: [],
    loading: false,
    fail: false
}

const locationsReducer = (state = initData, action) => {
    switch(action.type) {
        case 'FETCH_LOCATIONS_SUCCESS': {
            return({
                ...state,
                locations: action.data,
                loading: false,
                fail: false
            })
        }
        case 'FETCH_LOCATIONS_LOADING': {
            return({
                ...state,
                loading: true,
                fail: false
            })
        }
        case 'FETCH_LOCATIONS_FAIL': {
            return({
                ...state,
                fail: true,
                loading: false
            })
        }
    }
    return state
}
export default locationsReducer