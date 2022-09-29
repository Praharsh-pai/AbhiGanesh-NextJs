import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <div >{/*class="footer"*/}
                <div >{/*class="container"*/}
                    <div >{/*class="flex"*/}
                        <div >{/*class="footer-info"*/}
                            <div >{/*class="logo"*/}
                                <Link href="/"><a><Image height='50' width='50' src="https://abhiganesh.com/assets/nav/Abhiganesh-Logo.svg" alt="LOGO" /></a></Link>
                            </div>
                            <p> H. K’s R. K Legacy Bldg., Shop No. 1 & 2, Near Gujarati Samaj Hall, Gogol, Vidhyanagar, Margao, Goa, 403601. </p>
                        </div>
                        <div >{/*class="footer-contacts"*/}
                            <div >{/*class="footer-cta"*/}
                                <div >{/*class="footer-cta-right"*/}
                                    <p>Let Us Help You Achieve Financial Freedom</p>
                                    <Link href="/Contact"><a>Contact Us</a></Link>{/*class="cta-primary"*/}
                                </div>

                                <div >{/*class="contact"*/}
                                    <div >{/*class="number"*/}
                                        <Image height='50' width='50' src="https://abhiganesh.com/assets/socials/smartphone.svg" alt="mobile" />{/**/}
                                        <p>0832-2752275/ 2751575</p>
                                    </div>
                                    <div >{/*class="email"*/}
                                        <Image height='50' width='50' src="https://abhiganesh.com/assets/socials/mail.svg" alt="email" />
                                        <p>inquiry@abhiganesh.com (inquiries)</p>
                                    </div>
                                    <div >{/*class="email"*/}
                                        <Image height='50' width='50' src="https://abhiganesh.com/assets/socials/mail.svg" alt="email" />
                                        <p>services@abhiganesh.com (services)</p>
                                    </div>
                                    <div >{/*class="email"*/}
                                        <Image height='50' width='50' src="https://abhiganesh.com/assets/socials/mail.svg" alt="email" />
                                        <p>investment@abhiganesh.com (investments)</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div>{/* class="socials"*/}
                        <a href="https://www.instagram.com/abhiganesh.goa"><Image height='50' width='50' src="https://abhiganesh.com/assets/socials/instagram.svg" alt="instagram account" /></a>
                        <a href="https://www.facebook.com/abhiganeshinvestment/"><Image height='50' width='50' src="https://abhiganesh.com/assets/socials/facebook.svg" alt="facebook account" /></a>
                        <a href="https://www.youtube.com/user/abhijitnov"><Image height='50' width='50' src="https://abhiganesh.com/assets/socials/youtube.svg" alt="youtube account" /></a>
                    </div>

                    <div >{/*class="privacy"*/}
                        <p>Powered by: <a href="https://www.kapslock.in" >Kapslock.in</a> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer