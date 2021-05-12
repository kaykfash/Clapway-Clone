import React from 'react'


const Navbar = () => {
    return (  
        <nav>
            <div className="dropdown">
            <button>ALL <i class="far fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
                <a href="/">NEWS</a>
                <a href="/">TIPS</a>
                 <a href="/">TOPS</a>
                 <a href="/">REVIEWS</a>
            </div>

        </div>

             <a href='/'>SCIENCE</a>
            <a href='/'>CYRPTO</a>
            <a href='/'>GAMES</a>
            <a href='/'>CANNABIS</a>
            <a href='/'>SERVICES</a>

            <div className="dropdown-two">
            <button>OTHERS <i class="far fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
                <a href="/">WEBSITE</a>
                <a href="/">TECH</a>
                <a href="/">BRANDS</a>
                 <a href="/">SOCIAL MEDIA</a>
                 <a href="/">ADULT</a>
            </div>

        </div>

            <a className='featured' href="/">FEATURED</a> 
            <div className="searchbar">
            <i class="fas fa-search"></i>
            </div>
              
        </nav>
    );
}
 
export default Navbar;