import {useDispatch, useSelector} from "react-redux";
import ActorLi from "./components/ActorLI";
import {getActors, randomRating, updateRating} from "./redux/actions";
import {useEffect, useState} from "react";

function App() {

    const actors = useSelector(state => state);
    const dispatch = useDispatch();
    const [updated, setUpdated] = useState(0);
    const [isRandomlyRating, setIsRandomlyRating] = useState(false);

    useEffect(() => {
        dispatch(getActors());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        let interval = null;
        if (isRandomlyRating) {
            interval = setInterval(() => {
                let randomIndex = Math.floor(Math.random() * actors.length);
                let randomRating = Math.floor(Math.random() * 10 + 1);
                dispatch(updateRating(randomIndex, randomRating));
            }, 300);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRandomlyRating, dispatch]);

    function randomRatingHandler() {
        setUpdated(updated + 1);
        dispatch(randomRating());
    }

    return (
        <div className="App container bg-secondary bg-opacity-25 rounded">
            <nav className="navbar navbar-light bg-secondary rounded">
                <div className="container">
                    <h1><i className="bi bi-star-fill text-warning"> Ratings</i></h1>
                </div>
            </nav>
            <div className="text-center">
                <button className="btn btn-outline-secondary m-1" onClick={randomRatingHandler}>RANDOM RATING ONCE
                </button>
                <button className="btn btn-outline-secondary m-1"
                        onClick={() => setIsRandomlyRating(!isRandomlyRating)}>
                    {isRandomlyRating ? "STOP RANDOM RATING" : "START RANDOM RATING"}
                </button>
            </div>

            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Change</th>
                </tr>
                </thead>
                <tbody>
                {actors && actors.map((a, index) => {
                    return <ActorLi
                        a={a}
                        key={index}
                        index={index}
                        setUpdated={setUpdated}
                        updated={updated}
                        isRandomlyRating={isRandomlyRating}
                    />
                })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
