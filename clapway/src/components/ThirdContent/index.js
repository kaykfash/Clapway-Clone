import React from 'react'
import "../ThirdContent/style.css";
import  CrytoCurrency from "../../assets/crypto2.jpg"

const ThirdContent = () => {
    return ( 
        
    <div className="container">
        <div className="row">
        <div className="col-md-6">
            <h2 className="science-header">Crypto</h2>
            <img className="crytocontent-img" src={CrytoCurrency} alt="" />

        </div>
        <div className="col-md-6">
            <h2 className="crypo-text">How to Find the Crypto Trading Platform of Your Dreams</h2>
            <p className="crypto-fund">
            As retail investors rush to get in on crypto, it’s back to trading fundamentals. Studies estimate that 1 in 10 people will be investing their stimulus checks in crypto. Which means that there are going to be a huge number of people running towards...
            </p>
            <button className="science-button">Read More</button>
        </div>
        </div>

        <hr />
        <hr />
    </div>
     );
}
 
export default ThirdContent;