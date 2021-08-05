import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import "./Draf.css";

const Draf = (props) => {

    const handlePlayers = props.handlePlayers;

    const {name,img,playingRole,salary} = props.playerInfo;
    return (
        <div className="draf-container active">
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
            <div style={{margin:'auto'}}>
                <button className="btn btn-success" onClick={()=>handlePlayers(props.playerInfo)}><FontAwesomeIcon icon={faUserPlus}/> Add</button>
            </div>
        </div>
    );
};

export default Draf;