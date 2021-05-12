import React from 'react'
import '../FourthContent/style.css';
import Cocktail from '../../../assets/cocktail.jpg'
import Betting from '../../../assets/bizideas.jpg'
import Lips from '../../../assets/lips.jpg'
import Security from '../../../assets/securitytips.jpg'
import Games from "../../../assets/videogames.jpg"
import Cannabis from "../../../assets/cannabisimage.jpg"
import Hemp from "../../../assets/hempimage.jpg"


const  FourthContent  = () => {
    return ( 
        <div className="container">
         <div className="row"> 
         <div className="col-md-4">
         <h2 className="science-header">Games</h2>
         <div className="cocktail-card">
  <img className="cocktail-img" src={Cocktail} alt="..."/>
  <div class="cocktail-body">
    <h3 className="cocktail-text">Online Slots: Are They Worth It?</h3>
  </div>
</div>
         </div>
         <div className="col-md-4">
         <div className="betting-card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img className="betting-photo" src={Betting} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="betting-body">
        <p className="betting-text">Betting Tips for Sporting Newbies</p>
      </div>
    </div>
  </div>
</div>

<div className="lips-card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img className="lips-photo" src={Lips} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="lips-body">
        <p className="lips-text">Tips to Help You Boost Your Odds of Winning at Blackjack</p>
      </div>
    </div>
  </div>
</div>

<div className="security-card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img className="lips-photo" src={Security} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="lips-body">
        <p className="lips-text">Top Security Tips for Online Gaming and Gambling</p>
      </div>
    </div>
  </div>
</div>

        
<div className="security-card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img className="lips-photo" src={Games} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="lips-body">
        <p className="lips-text">The Most Popular Video Games Students Play</p>
      </div>
    </div>
  </div>
</div>

<div className="security-card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img className="lips-photo" src={Security} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="lips-body">
        <p className="lips-text">From the History of Roulette to the Age of Online Gaming</p>
      </div>
    </div>
  </div>
</div>
        </div> 
<div className="col-md-4">
        <h2 className="cannabis-header">Cannabis</h2> 
        <h4 className="cannabis-text">Successful Cannabis Business Ideas You Can Start in 2021</h4>
        
        <div className="security-card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img className="canbiz-photo" src={Cannabis} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="canbiz-body">
        <p className="canbiz-text">The best way to shake off the Covid blues could be found in starting your...</p>
        <button className="canbiz-button">Read More</button>
      </div>
    </div>
  </div>
</div>
        
<h4 className="covid-text">Tips For Choosing Your Hemp CBD Flower Strain: Special Sauce & Others</h4>
<div className="security-card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img className="canbiz-photo" src={Hemp} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="canbiz-body">
        <p className="canbiz-text">When you finally decide to give CBD flowers a chance and start smoking them, you...</p>
        <button className="canbiz-button">Read More</button>
      </div>
    </div>
  </div>
</div>
    
 </div>     
         
         
 </div>
 <hr />
        <hr />      
</div>
     );
}
 
export default  FourthContent  ;