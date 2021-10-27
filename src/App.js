import {useDispatch, useSelector} from "react-redux";
import ActorLi from "./components/ActorLI";
import {randomRating} from "./redux/actions";
import {useEffect, useState} from "react";

function App() {

    const actors = useSelector(state => state);
    const dispatch = useDispatch();
    const [updated, setUpdated] = useState(0);

    const [isRandomlyRating, setIsRandomlyRating] = useState(false);

    useEffect(() => {
    }, [updated]);


    function randomRatingHandler() {
        setUpdated(updated + 1);
        dispatch(randomRating());
    }


    return (
        <div className="App container">
            <nav className="navbar navbar-light bg-secondary">
                <div className="container">
                    <h1><i className="bi bi-star-fill text-warning"> Ratings</i></h1>
                </div>
            </nav>
            <div className="text-center">
                <button className="btn btn-outline-secondary m-1" onClick={randomRatingHandler}>RANDOM RATING ONCE</button>
                <button className="btn btn-outline-secondary m-1" onClick={() => setIsRandomlyRating(!isRandomlyRating)}>
                    {isRandomlyRating ? "STOP RANDOM RATING" : "START RANDOM RATING"}
                </button>
            </div>

            <table className="table">
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
                    return <ActorLi a={a} key={index} index={index} setUpdated={setUpdated} updated={updated}/>
                })}
                </tbody>
            </table>

        </div>
    );
}

export default App;
