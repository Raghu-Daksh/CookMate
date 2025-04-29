import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo4.png';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { UsersContext } from '../../context/UserContext';

const Header = () => {
    const { userDetails, setUserDetails} = useContext(UsersContext);

    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const logoRef = useRef(null);
    const navLinksRef = useRef([]);
    const socialIconsRef = useRef([]);
   let links;

    if(!userDetails){
       links = ['/','/contact', '/login'];
    }
    else{
        links = ['/','/contact', '/logout'];
    }

    // GSAP animation on initial load
    useGSAP(() => {
        const tl = gsap.timeline();

        if (window.innerWidth > 768) {
            tl.from(logoRef.current, {
                y: -50,
                opacity: 0,
                duration: 0.5,
                delay: 0.7,
            });
            tl.from(navLinksRef.current, {
                y: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
            }, "-=0.2");
            tl.from(socialIconsRef.current, {
                y: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
            });
        }
    }, []); // Runs only once on component mount

    // Mobile-specific GSAP logic to handle sidebar toggle
    useGSAP(() => {
        if (window.innerWidth <= 768) {
            const tl = gsap.timeline();
            tl.from(logoRef.current, {
                y: -50,
                opacity: 0,
                duration: 0.5,
                delay: 0.7,
            });
            if (active) {
                // Slide the sidebar in
                tl.to('.nav-links-container', {
                    transform: 'translateX(0)',  // Using transform for smoother animation
                    duration: 0.2,
                    ease: 'ease-in-out',
                });
                
                // Animate the links with stagger
                tl.from(navLinksRef.current, {
                    opacity: 0,
                    x: 50,  // You can change x, y or other properties for the effect
                    duration: 0.2,
                    delay: 0.2,
                    stagger: 0.2,
                });
            } else {
                // Slide the sidebar out
                tl.to('.nav-links-container', {
                    transform: 'translateX(100%)',  // Move sidebar out of view
                    duration: 0.4,
                    ease: 'ease-in-out',
                });
            }
        }
    }, [active]);

    const handleLogout = () => {
        console.log('Logging out...');
        localStorage.removeItem('user');
        setUserDetails(null); 
        navigate('/login')  // Redirect to login page
      };

    useEffect(()=>{
        const user = localStorage.getItem('user');
        if (user) {
            setUserDetails(JSON.parse(user));
        } else {
            setUserDetails(null);
        }
    }, []);

    return (
        <nav>`
            <div className='logo' ref={logoRef}>
               <Link to='/'> <img src={logo} alt="logo" /></Link>
            </div>
            <div className={`nav-links-container ${active ? 'active' : ''}`}>
                <ul className='nav-links'>
                    {links.map((path, index) => (
                        <li key={index} ref={el => navLinksRef.current[index] = el}>
                        {path === '/logout' ? (
                            <button 
                            style={{ textDecoration: "none", color: 'black', fontWeight:'bold', fontSize:'0.9rem', background: 'none', border: 'none', cursor: 'pointer' }}
                            onClick={() => handleLogout()}
                            >
                            Logout
                            </button>
                        ) : (
                            <Link style={{ textDecoration: "none", color: 'black' }} to={path}>
                            {path === '/' ? 'Recipe' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                            </Link>
                        )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`social-icons ${active && 'social-active'}`}>
                {['logo-facebook', 'logo-twitter', 'logo-instagram'].map((icon, index) => (
                    <ion-icon
                        key={index}
                        style={{ color: icon === 'logo-facebook' ? 'blue' : icon === 'logo-twitter' ? 'skyblue' : 'red' }}
                        name={icon}
                        ref={el => socialIconsRef.current[index] = el}
                    ></ion-icon>
                ))}
            </div>
            <div className='hamburger'>
                {!active ?
                    <i onClick={() => setActive(true)} className="ri-menu-3-line"></i> :
                    <i className='close' class="ri-close-line" onClick={() => setActive(false)}></i>}
            </div>
        </nav>
    );
};

export default Header;
