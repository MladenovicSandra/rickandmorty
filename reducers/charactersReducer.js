const initData = {
    characters: [],
    loading: false,
    fail: false
}

const charactersReducer = (state = initData, action) => {
    switch(action.type){
        case 'FETCH_CHARACTERS_LOADING': {
            return {...state, 
                loading: true,
                fail: false
            }
        }
        case 'FETCH_CHARACTERS_FAIL': {
            return {...state, 
                loading: false,
                fail: true
            }
        }
        case 'FETCH_CHARACTERS_SUCCESS': {
            return {...state, 
                characters: action.data,
                loading: false,
                fail: false
            }
        }
    }
    return state
}
export default charactersReducer