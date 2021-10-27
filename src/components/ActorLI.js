import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {updateRating} from "../redux/actions";

const ActorLi = ({index, a,setUpdated,updated}) => {
    const [rating, setRating] = useState(false);
    const [newRate, setNewRate] = useState(0);
    const dispatch = useDispatch();

    const saveHandler = () => {
        if(newRate !== 0){
            dispatch(updateRating(index,newRate));
            setRating(false);
            setUpdated(updated+1);
        }
    }

    switch (rating) {
        case false:
            return (
            <tr>
                <th scope="row">{index+1}</th>
                <td>{a.actorName}</td>
                <td>{a.rating}</td>
                <td><button className="btn btn-outline-secondary" onClick={()=>setRating(true)}>Change Rate</button></td>
            </tr>
            );
        case true:
            return (
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <th>{a.actorName}</th>
                    <th>Select new Rate:</th>
                    <th><select className="form-select" onChange={(e) => setNewRate(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select></th>
                    <th><button className="btn btn-outline-secondary" onClick={saveHandler}>Save</button></th>
                </tr>
            )
        default:
            return (
                <tr><th>...loading</th></tr>
            )
    }
};

export default ActorLi;