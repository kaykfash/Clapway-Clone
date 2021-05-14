import React from 'react'
import FifthContent from '../../components/Content/FifthContent/index'
import FirstContent from '../../components/Content/FirstContent/'
import Footer from '../../components/Content/Footer/index'
import FourthContent from '../../components/Content/FourthContent/index'
import SixthContent from '../../components/Content/SixthContent/index'
import Navbar from '../../components/Navbar/index'
import SecondSection from '../../components/SecondContent/index'
import ThirdContent from '../../components/ThirdContent/index'
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



