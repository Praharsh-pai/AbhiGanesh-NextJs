import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../styles/header.module.css";

const Header = () => {
    return (
        <>
            <div className={styles.headcon}>
                <nav className="navbar navbar-expand-lg" style={{ "width": "90%" }}>
                    <div className="container-fluid">
                        <div className="container d-flex justify-content-start align-items-center ">
                            <Link href="/">
                                <a>
                                    <img height='100' width='250' src="https://abhiganesh.com/assets/nav/Abhiganesh-Logo.svg" alt="Kapslock logo" />
                                </a>
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`${styles.menuitems} navbar-nav me-5 mb-2 mb-lg-0`}>
                                <li className="nav-item">
                                    <Link href="/"><a className='nav-link'>Home</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/Aboutus"><a className='nav-link' style={{ "width": "105px" }}>About Us</a></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Solutions
                                    </a>
                                    <ul id='show' className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" href="/preservingsolutions"><a className='nav-link'>Preserving</a></Link></li>
                                        <li><Link className="dropdown-item" href="/financingsolutions"><a className='nav-link'>Financing</a></Link></li>
                                        <li><Link className="dropdown-item" href="/investingsolutions"><a className='nav-link'>Investing</a></Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link href="https://wealthelite.in/client-login"><a className='nav-link' style={{ "width": "140px" }}>Client-Login</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/Contact"><a className={`${styles.contactbtn} text-center nav-link`}>Contact Us</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Header
{/*developed by praharsh*/ }