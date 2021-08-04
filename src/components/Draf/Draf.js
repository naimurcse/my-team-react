import React from 'react';
import "./Draf.css"

const Draf = (props) => {

    const {name,img,playingRole,salary} = props.playerInfo;
    console.log(name);
    return (
        <div className="draf-container">
            <div className="img-container">
                <img src={img} alt=""></img>
            </div>
            <div className="player-title">
                <h2>{name}</h2>
                <p>{playingRole}</p>
            </div>

            <div style={{textAlign: 'center'}}>
                <p>Salary</p>
                <h2>{salary}</h2>
            </div>
            <div style={{paddingRight:'0'}}>
                <button className="btn">Add the player</button>
            </div>
        </div>
    );
};

export default Draf;