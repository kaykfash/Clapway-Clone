import React from 'react'
import "../SixthContent/index.css"
import Jumpi from "../../../assets/Jumpi.jpg"

  const SixthContent = () => {
      return ( 
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        <h2 className="science-header">Brands</h2>
         <img className="brandscontent-img" src={Jumpi} alt="" />
      
            
            </div>   
        <div className="col-md-6">
        <h2 className="jumpi-text">Meet Jumpi, the 3-in-1 Car Vacuum, Jumpstarter, and Power Bank</h2>
            <p className="crypto-fund">
            Have you ever been in an emergency on the road? It can be a real nightmare even if you’re prepared. If not, you could be dealing with a life-or-death situation. Now, there’s a way for you to stay safe, clean, and connected no matter where the road...
            </p>
            <button className="science-button">Read More</button>
            
            </div>   
                  
        </div>
            </div>
       );
  }
   
  export default SixthContent;
