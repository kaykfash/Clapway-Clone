// import React, { useState} from "react";
import "../FirstContent/Index.css"
import Lightbulb from "../../../assets/lightbulb.jpg"
import Essaywriting from "../../../assets/cannabis.jpg"
import BusinessIdea from  "../../../assets/bizideas.jpg"
import Science from "../../../assets/science.jpg"
import Hemp from "../../../assets/hemp.jpg"
import Cat from '../../../assets/cat.jpg'
import Crypto from "../../../assets/crypto.jpg"
import Scam from "../../../assets/creditscam.jpg"
import Wineglass from "../../../assets/wineglass.jpg"
import Depression from "../../../assets/depression.jpeg"



const FirstContent = () => {
    return ( 
<div className="container">
    
    <div className="row">
        <div className="col-md-4">
        <div className="card mt-5">
  <img src={Lightbulb} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h1 className="card-text"> 10 EFFECTIVE WAYS TO  EXPAND YOUR SOCIAL MEDIA INFLUENCE</h1>
  </div>
</div>
        </div>

        <div className="col-md-4">      
        <div className="photocard mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img className="content-photo" src={Essaywriting} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="writingcard-body">
        <p className="writing-text"> ESSAY WRITING SERVICE PRICE AND THE FACTORS THAT INFLUENCE IT</p>
      </div>
    </div>
  </div>
</div>

<div className="photocard mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img className="content-photo1" src={BusinessIdea} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="businesscard-body">
        <p className="writing-text1">SUCCESSFUL CANNABIS BUSINESS IDEAS YOU CAN START IN 2021</p>
      </div>
    </div>
  </div>
</div>

<div className="photocard mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img className="content-photo1" src={Science} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="sciencecard-body">
        <p className="writing-text1">WHY SCIENCE WANTS YOU TO TAKE SHROOMS— AND WANTS CANADA TO...</p>
      </div>
    </div>
  </div>
</div>

<div className="photocard mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img className="content-photo1" src={Hemp} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="hempcard-body">
        <p className="writing-text1">TIPS FOR CHOOSING YOUR HEMP CBD FLOWER STRAIN: SPECIAL SAUCE &...
</p>
      </div>
    </div>
  </div>
</div>

<div className="photocard mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img  className="content-photo1" src={Cat} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="catcard-body">
        <p className="writing-text1">WHAT YOU SHOULD KNOW ABOUT A BALINESE CAT</p>
      </div>
    </div>
  </div>
</div>
        </div>



        <div className="col-md-4">
        <h2 className="h2">Featured</h2>
        <div className="photocard mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img  className="content-photo1" src={Crypto} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="catcard-body">
        <p className="writing-text1">HOW TO FIND THE CRYPTO TRADING PLATFORM OF YOUR DREAMS</p>
      </div>
    </div>
  </div>
</div>

<div className="photocard mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img  className="content-photo1" src={Scam} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="scamcard-body">
        <p className="writing-text1">5 MOST COMMON CREDIT CARD SCAMS AND HOW TO PREVENT THEM</p>
      </div>
    </div>
  </div>
</div>

<div className="photocard mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img  className="content-photo1" src={Wineglass} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="wineglasscard-body">
        <p className="writing-text1">ONLINE SLOTS: ARE THEY WORTH IT?</p>
      </div>
    </div>
  </div>
</div>

<div className="photocard mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img  className="content-photo1" src={Depression} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="depressioncard-body">
        <p className="writing-text1">THE EFFECTS OF DEPRESSION ON YOUR BODY</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<hr/>

</div>

     );
}
 
export default FirstContent;