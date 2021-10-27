import {RANDOM_RATING, SORT_BY_RATING, UPDATE_RATING} from "./actions";

const initialState = [
    {actorName: "Brad Pit",rating:0},
    {actorName:"Edward Norton",rating:0},
    {actorName:"Benissio Del Toro",rating:0},
    {actorName:"Jason Stathem",rating:0},
    {actorName:"Ray Liotta",rating:0},
    {actorName:"Will Smith",rating:0},
    {actorName:"Tommy Lee Jones",rating:0},
    {actorName:"George Cloney",rating:0},
    {actorName:"Tcheky Karyo",rating:0},
    {actorName:"Vincent Cassel",rating:0},
    ];

export const reducer = (state = initialState, action) => {
        switch(action.type){
            case UPDATE_RATING:
                state[action.payload.index].rating = action.payload.newRating;
                return state;
            case RANDOM_RATING:
                for (let i = 0; i < state.length; i++) {
                    state[i].rating = Math.floor(Math.random()*10 + 1);
                }
                return state;
            case SORT_BY_RATING:
                state.sort((a,b) =>
                        (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0));
                return state;
            default:
                return state;
        }
}