import React from 'react';

const Jay = (props) => {
    return (
        <div className="card">
            <img src={props.img}/>
            <div className="details">
                <h3>{props.name}</h3>
                <h4>{props.price}</h4>
                <button>Purchase</button>
            </div>
        </div>
    );
};

export default Jay;