import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {updateRating} from "../redux/actions";
import StarsRatingComponent from "./StarsRatingComponent";

const ActorLi = ({index, a, setUpdated, updated, isRandomlyRating}) => {
    const [rating, setRating] = useState(false);
    const [newRate, setNewRate] = useState(0);
    const dispatch = useDispatch();

    const saveHandler = () => {
        if (newRate !== 0) {
            dispatch(updateRating(index, newRate));
            setRating(false);
            setUpdated(updated + 1);
        }
    }

    const cancelHandler = () => {
        setRating(false);
        setUpdated(updated + 1);
    }

    switch (rating) {
        case false:
            return (
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{a.actorName}</td>
                    <td>{isRandomlyRating ?
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        : <StarsRatingComponent rating={a.rating} />}
                    </td>
                    <td>{isRandomlyRating ?
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        <button className="btn btn-outline-secondary" onClick={() => setRating(true)}>Change Rate
                        </button>
                    }
                    </td>
                </tr>
            );
        case true:
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <th>{a.actorName}</th>
                    <th>Select new Rate:</th>
                    <th><select value={a.rating} className="form-select" onChange={(e) => setNewRate(e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select></th>
                    <th>
                        <button className="btn btn-outline-secondary mx-1" onClick={saveHandler}>
                            <i className="bi bi-save-fill"></i>
                        </button>
                        <button className="btn btn-outline-secondary" onClick={cancelHandler}>
                            <i className="bi bi-x-square-fill"></i>
                        </button>
                    </th>
                </tr>
            )
        default:
            return (
                <tr>
                    <th>...loading</th>
                </tr>
            )
    }
};

export default ActorLi;