import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Footer.module.css'
const Footer = () => {
    return (
        <>
            <div className={styles.footer}>{/*class="footer"*/}
                <div className={styles.container}>{/*class="container"*/}
                    <div className={styles.flex}>{/*class="flex"*/}
                        <div className={styles.footerInfo}>{/*class="footer-info"*/}
                            <div className={styles.logo}>{/*class="logo"*/}
                                <Link href="/"><a><img height='100' width='250' src="https://abhiganesh.com/assets/nav/Abhiganesh-Logo.svg" alt="Kapslock logo" /></a></Link>
                            </div>
                            <p> H. K’s R. K Legacy Bldg., Shop No. 1 & 2, Near Gujarati Samaj Hall, Gogol, Vidhyanagar, Margao, Goa, 403601. </p>
                        </div>
                        <div className={styles.footerContacts}>{/*class="footerContacts"*/}
                            <div className={styles.footerCta}>{/*class="footerCta"*/}
                                <div className={styles.footerCtaRight}>{/*class="footerCta-right"*/}
                                    <p>Let Us Help You Achieve Financial Freedom</p>
                                    <Link  href="/Contact"><a className={`${styles.contactbtn} ${styles.ctaPrimary} text-center nav-link`}>Contact Us</a></Link>
                                    {/*class="cta-primary"*/}
                                </div>

                                <div className={styles.contact}>{/*class="contact"*/}
                                    <div className={styles.number}>{/*class="number"*/}
                                        <Image height='50' width='50' src="https://abhiganesh.com/assets/socials/smartphone.svg" alt="mobile" />{/**/}
                                        <p>0832-2752275/ 2751575</p>
                                    </div>
                                    <div className={styles.email}>{/*class="email"*/}
                                        <Image height='50' width='50' src="https://abhiganesh.com/assets/socials/mail.svg" alt="email" />
                                        <p>inquiry@abhiganesh.com (inquiries)</p>
                                    </div>
                                    <div className={styles.email}>{/*class="email"*/}
                                        <Image height='50' width='50' src="https://abhiganesh.com/assets/socials/mail.svg" alt="email" />
                                        <p>services@abhiganesh.com (services)</p>
                                    </div>
                                    <div className={styles.email}>{/*class="email"*/}
                                        <Image height='50' width='50' src="https://abhiganesh.com/assets/socials/mail.svg" alt="email" />
                                        <p>investment@abhiganesh.com (investments)</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={styles.socials}>{/* class="socials"*/}
                        <a href="https://www.instagram.com/abhiganesh.goa"><Image height='50' width='50' src="https://abhiganesh.com/assets/socials/instagram.svg" alt="instagram account" /></a>
                        <a href="https://www.facebook.com/abhiganeshinvestment/"><Image height='50' width='50' src="https://abhiganesh.com/assets/socials/facebook.svg" alt="facebook account" /></a>
                        <a href="https://www.youtube.com/user/abhijitnov"><Image height='50' width='50' src="https://abhiganesh.com/assets/socials/youtube.svg" alt="youtube account" /></a>
                    </div>

                    <div className={styles.privacy}>{/*class="privacy"*/}
                        <p>Powered by: <a href="https://www.kapslock.in" >Kapslock.in</a> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
{/*developed by praharsh*/}