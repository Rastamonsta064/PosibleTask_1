export const UPDATE_RATING = "UPDATE_RATING";
export const RANDOM_RATING = "RANDOM_RATING";
export const SORT_BY_RATING = "SORT_BY_RATING";
export const GET_ACTORS = "GET_ACTORS";


export const updateRatingAction = (index, newRating) => ({
    type: UPDATE_RATING,
    payload: {index, newRating}
})

export const randomRatingAction = () => ({
    type: RANDOM_RATING
})

export const sortByRatingAction = () => ({
    type: SORT_BY_RATING
})

export const getActors = () => ({
    type: GET_ACTORS
})


export const randomRating = () => {
    return (dispatch) => {
        dispatch(randomRatingAction());
        dispatch(sortByRatingAction());
    }
}

export const updateRating = (index, newRating) => {
    return (dispatch) => {
        dispatch(updateRatingAction(index, newRating));
        dispatch(sortByRatingAction());
    }
}