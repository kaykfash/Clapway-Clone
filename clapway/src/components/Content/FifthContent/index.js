import React from 'react'
import "../FifthContent/style.css"
import Tech from "../../../assets/crypto2.jpg"
import Code  from "../../../assets/alien.jpg"
import Brain from "../../../assets/brain.jpg"
import CreditCard from "../../../assets/creditscam.jpg"
import Wine from  "../../../assets/wineglass.jpg"
import Addidas from  "../../../assets/addidas.jpeg"
import Bulls from  "../../../assets/bulls.jpg"

const FifthContent = () => {
    return ( 
        <div className="container">
         <div className="row">
         <div className="col-md-4">
         <h2 className="science-header">Tech</h2>
         <div className="tech-card">
  <img className="tech-img" src={Tech}  alt="..."/>
  <div class="techcard-body">
    <p class="tech-text">How to Find the Crypto Trading Platform of Your Dreams</p>
  </div>
</div>
<div class="alien-card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Code} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="alien-card-body">
        <p className="alien-text">4 Ways You Can Learn to Code</p>
      </div>
    </div>
  </div>
 </div>
 <div class="alien-card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Brain} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="alien-card-body">
        <p className="alien-text">Best Platforms to Use When Preparing for Microsoft 70-764 Exam; Why...</p>
      </div>
    </div>
  </div>
 </div>
 </div>
        <div className="col-md-4">
          <div className="adult">
        <h2 className="science-header">Adult</h2>
         <div className="tech-card">
  <img className="tech-img" src={CreditCard}  alt="..."/>
  <div class="techcard-body">
    <p class="tech-text">5 Most Common Credit Card Scams and How to Prevent Them</p>
  </div>
</div>
<div class="alien-card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Wine} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="alien-card-body">
        <p className="alien-text">Online Slots: Are They Worth It?</p>
      </div>
    </div>
  </div>
 </div>
 <div class="alien-card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Addidas} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="alien-card-body">
        <p className="alien-text">Adidas Condemns Sex Violence In School</p>
      </div>
    </div>
  </div>
 </div>
 </div>
        </div>

    <div className="col-md-4"> 
      <div className="websites">
      <h2 className="science-header">Websites</h2>

      <div class="exam-card">
  <div className="examcard-body">
    <p className="examcard-text">Best Platforms to Use When Preparing for Microsoft 70-764 Exam; Why Use Exam Dumps?</p>
  </div>
</div><div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img className="exam-img" src={Brain} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="microsoftcard-body">
        <p>Are you looking for ways to prepare for your upcoming Microsoft 70-764 exam? Or, do...</p>
        <button className="microsoft-button" >Read More</button>
      </div>
    </div>
  </div>
</div>
</div>

<div className="websites">
<div class="exam-card">
  <div className="examcard-body">
    <p className="examcard-text">4Bulls Review: What Is 4Bulls?</p>
  </div>
</div><div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img className="exam-img" src={Bulls} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="microsoftcard-body">
        <p>In the world of retail crypto trading, where the game is dominated by institutions and market...</p>
        <button className="microsoft-button" >Read More</button>
      </div>
    </div>
  </div>
</div>
</div>


        </div>
        
        </div>
        </div>
     );
}
 
export default FifthContent;