import React from 'react'
import "../SecondContent/secondindex.css";
import Mushroom from "../../assets/science.jpg"
import Eyeball from "../../assets/eyeballs.jpg"
import Essaywriting from "../../assets/cannabis.jpg"
import  Optimizedwriting from "../../assets/optimizedwriting.jpg";
import Writing from "../../assets/pen.jpg";
import Machine from "../../assets/POS.jpg";
import Summer from "../../assets/summerexam.jpg";
import Psychological from "../../assets/psyessay.jpg";



const SecondSection = () => {
    return ( 
        <div>
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                 <h2 className="science-header">Science</h2>
                 <h3 className="science-subheader">Why Science Wants You to Take Shrooms— And Wants Canada to Legalize Them</h3>
                 <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img className="mushroom-img" src={Mushroom} alt="..."/>
    </div>
    <div class="col-md-8">
      <div className="science-body">
        <p>As anecdotal evidence continues to mount for the beneficial effects of microdosing mushrooms, Canada medical...</p>
        <button className="science-button">Read More</button>
      </div>
    </div>
  </div>
</div>

<h3 className="science-subheader">Read more
3 Terrifying Events That Nobody Expects After the Coronavirus Pandemic Is Over</h3>
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img className="mushroom-img" src={Eyeball} alt=""/>
    </div>
    <div class="col-md-8">
      <div className="science-body">
        <p>If you have not been hiding under a rock, then you are likely familiar with..</p>
        <button className="science-button">Read More</button>
      </div>
    </div>
  </div>
</div>

    </div>
     <div className="col-md-3">
     <h2 className="services-header">Services</h2> 

     <div className="services-card">
  <img className="services-img" src={Essaywriting} alt=""/>
  <div className="services-body">
    <p>Essay Writing Service Price and the Factors That Influence It</p>
  </div>
</div>

<div className="services-card">
  <img className="opwriting-img" src={Optimizedwriting} alt=""/>
  <div className="services-body">
    <p>Creating an Optimized Writing Plan for a Week</p>
  </div>
</div>
                </div>
                <div className="col-md-3">
                <div className="pen-card">
  <img className="pen-img" src={Writing} alt=""/>
  <div className="pen-body">
    <p>Why Essay Writing Can Help Students With Self-Knowledge</p>
  </div>
</div>  

<div className="machine-card">
  <img className="machine-img" src={Machine} alt=""/>
  <div className="machine-body">
    <p>Choosing the Right POS System for Your Auto Repair Shop</p>
  </div>
</div>
    </div>
                <div className="col-md-3">
                <div className="summer-card">
  <img className="sumer-img" src={Summer} alt=""/>
  <div className="summer-body">
    <p>How to Pass Summer Exams During a Pandemic</p>
  </div>
</div>  

<div className="psyco-card">
  <img className="psyco-img" src={Psychological} alt=""/>
  <div className="psyco-body">
    <p>How Does Psychology Essay Writing Help Students Realize They Have Their Own Psychological Issues?</p>
  </div>
</div>  

    </div>
    
    <hr />
            </div>





            </div>
        </div>
     );
}
 
export default SecondSection;