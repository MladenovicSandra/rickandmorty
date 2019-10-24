
export const fetchLocationsSuccess = (data) => {
    return {
        type: 'FETCH_LOCATIONS_SUCCESS',
        data: data
    }
}
export const fetchLocationsLoading = () => {
    return {
        type: 'FETCH_LOCATIONS_LOADING'
    }
}
export const fetchLocationsFail = () => {
    return {
        type: 'FETCH_LOCATIONS_FAIL'
    }
}
export const fetchLocations = () => {
    return (dispatch) => {
        dispatch(fetchLocationsLoading())
        fetch(
            'https://rickandmortyapi.com/api/location/',
            {method: 'get'}
        )
        .then(res => res.json())
        .then(data => {
            dispatch(fetchLocationsSuccess(data.results))
        })
        .catch(() => {
            dispatch(fetchLocationsFail())
        })
    }
}