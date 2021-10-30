import React from 'react';

const StarsRatingComponent = ({rating}) => {

    const stars = [10];
    for (let i = 0; i < 10; i++) {
        if(i < rating){
            stars[i] = true;
        }else {
            stars[i] = false;
        }
    }

    return (
        <div>
            {stars.map((star, index) => {
                if(star){
                  return <i key={index} className="bi bi-star-fill m-1 text-warning"></i>
                } else {
                    return <i key={index} className={"bi bi-star m-1 text-warning"}></i>
                }

            })}
        </div>
    );
};

export default StarsRatingComponent;