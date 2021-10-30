import {GET_ACTORS, RANDOM_RATING, SORT_BY_RATING, UPDATE_RATING} from "./actions";

const initialState = [
    {actorName: "Brad Pit", rating: 1},
    {actorName: "Edward Norton", rating: 1},
    {actorName: "Benissio Del Toro", rating: 1},
    {actorName: "Jason Stathem", rating: 1},
    {actorName: "Ray Liotta", rating: 1},
    {actorName: "Will Smith", rating: 1},
    {actorName: "Tommy Lee Jones", rating: 1},
    {actorName: "George Cloney", rating: 1},
    {actorName: "Tcheky Karyo", rating: 1},
    {actorName: "Vincent Cassel", rating: 1},
];

export const reducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_RATING:
            state[action.payload.index].rating = action.payload.newRating;
            return state;
        case RANDOM_RATING:
            for (let i = 0; i < state.length; i++) {
                state[i].rating = Math.floor(Math.random() * 10 + 1);
            }
            return state;
        case SORT_BY_RATING:
            state.sort((a, b) =>
                (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0));
            return state;
        case GET_ACTORS:
            return [...initialState];
        default:
            return state;
    }
}