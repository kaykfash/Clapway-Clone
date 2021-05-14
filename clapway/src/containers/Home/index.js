import React from 'react'
import FifthContent from '../../components/Content/FifthContent'
import FirstContent from '../../components/Content/FirstContent'
import Footer from '../../components/Content/Footer'
import FourthContent from '../../components/Content/FourthContent'
import SixthContent from '../../components/Content/SixthContent'
import Navbar from '../../components/Navbar'
import SecondSection from '../../components/SecondContent'
import ThirdContent from '../../components/ThirdContent'
import Logo from './logo.png'


const Home = props => {
    return ( 
        <div>
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            <Navbar/>
            <FirstContent/>
            <SecondSection/>
            <ThirdContent/>
            <FourthContent/>
            <FifthContent/>
            <SixthContent/>
            <Footer/>
        </div>
     );
}
 
export default Home;



