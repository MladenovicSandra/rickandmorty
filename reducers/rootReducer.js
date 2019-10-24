import { combineReducers } from 'redux'
import locationsReducer from './locationsReducer'
import characterReducer from './charactersReducer'

const rootReducer = combineReducers({
    characters: characterReducer,
    locations: locationsReducer
})

export default rootReducer