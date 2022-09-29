import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <>
        <div>{/*class="container flex"*/}
        <div>{/*class="logo"*/}
            <Link href="/"><a><Image height='50' width='50' src="https://abhiganesh.com/assets/nav/Abhiganesh-Logo.svg" alt="Kapslock logo"/></a></Link>
        </div>
        
        <ul >{/*class="nav-list"*/}
            <li><Link href="/"><a>Home</a></Link>{/*class="nav-item"*/}</li>
            <li><Link href="/Aboutus"><a>About Us</a></Link>{/*class="nav-item"*/}</li>
            <li >{/*class="nav-dropdown-header"*/}
                <a>Solutions<Image height='50' width='50' class="dropdown-image" src="https://abhiganesh.com/assets/nav/dropdown.svg" alt="dropdown icon"/></a>{/*class="nav-item"*/}
                <ul class="nav-dropdown display-toggle">{/**/}
                    <li><Link href="/preservingsolutions"><a>Preserving</a></Link></li>
                    <li><Link href="/financingsolutions"><a>Financing</a></Link></li>
                    <li><Link href="/investingsolutions"><a>Investing</a></Link></li>
                </ul>
            </li>

            <li><Link href="https://wealthelite.in/client-login"><a>Client-Login</a></Link>{/*class="nav-item"*/}</li>
            <li><Link href="/Contact"><a>Contact Us</a></Link>{/*class="nav-cta cta-primary"*/}</li>
        </ul>
    </div>
    </>
  )
}

export default Header