import React, { useEffect, useState} from 'react';
import Cart from '../Cart/Cart';
import Draf from '../Draf/Draf';
import playerData from "../../playersData/playersData.json";
import "./Players.css";

const Players = () => {

    // console.log(playerData);
    const [playerInfo,setPlayerInfo] = useState([]);
    const [cart, setCart] = useState([]);

    const handlePlayers = (props) => {
        const newCart = [...cart, props];
        setCart(newCart);
    };

    useEffect(() =>{
        setPlayerInfo(playerData);
        // console.log(playerInfo);
    },[]);

    return (
        <div className="players-container">
            <div className="draf">
                {
                    playerInfo.map((listOfPlayers) => <Draf 
                    playerInfo={listOfPlayers}
                    handlePlayers={handlePlayers}
                    ></Draf>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Players;