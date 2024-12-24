// import React, { useState } from 'react';
// import { GitHamburgerMenu } from 'react-icons/gi';
// import { Link } from 'react-router';

// const Navbar = () => {
//     const[show, setShow] = useState(false);

//   return (
//     <nav>
//         <div className='logo'>EVENT PLANNER</div>
//         <div className={show ? "navLinks showmenu" : "navLinks"}>
//             <div className='links'>
//                 <Link to="landing" spy={true} smooth={true} duration={500}>
//                 Home
//                 </Link>
//                 <Link to="landing" spy={true} smooth={true} duration={500}>
//                 SERVICES
//                 </Link>
//                 <Link to="landing" spy={true} smooth={true} duration={500}>
//                 ABOUT
//                 </Link>
//                 <Link to="landing" spy={true} smooth={true} duration={500}>
//                 CONTACT
//                 </Link>
//             </div>
//         </div>
//         <div className='hamburger' onClick={() => setShow(!show)}>
//             <GitHamburgerMenu />
//         </div>
//     </nav>
//   )
// }

// export default Navbar;


import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <nav>
            <div className='logo'>KING's</div>
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className='links'>
                    <Link to="hero" spy={true} smooth={true} duration={500}>
                        Home
                    </Link>
                    <Link to="services" spy={true} smooth={true} duration={500}>
                        Services
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                        About
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={500}>
                        Contact
                    </Link>
                </div>
            </div>
            <div className='hamburger' onClick={() => setShow(!show)}>
                <GiHamburgerMenu />
            </div>
        </nav>
    );
};

export default Navbar;
