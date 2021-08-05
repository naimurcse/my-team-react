import React from 'react';
import "./Cart.css"

const Cart = (props) => {

    const cart = props.cart;
    console.log(cart);
    const bugate = cart.reduce((total,player)=> total + Number(player.salary),0);


    return (
        <div className="cart-container">
            <div className="status">
                <div>
                    <p>Selected Players</p>
                    <h2>{cart.length}</h2>
                </div>
                <div style={{textAlign: 'right'}}>
                    <p>Total Budget</p>
                    <h2>{bugate} TK</h2>
                </div>
            </div>

            <div>
                <div className="selected-players-list">
                    {
                        cart.map((selected) => 
                        
                            <div className="selected-player">
                                <h3>{selected.name}</h3>
                                <h4>{selected.salary} TK</h4>
                            </div>                     
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;