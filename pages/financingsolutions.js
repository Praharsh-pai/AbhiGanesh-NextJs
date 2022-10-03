import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Components/Header'
import Footer from './Components/Footer'
import styles from "../styles/financingsoln.module.css"

const financingsolutions = () => {
  return (
    <>
      <Header />
      <div className={styles.mainCon}>{/*class="container"*/}

        <h1 id="goup" style={{"fontSize":"80px","width":"100px"}}>Financing Solutions</h1>
        <div className={styles.block}>{/*class="hero flex"*/}
          <div className={styles.blockLeft}>{/*class="hero-left"*/}
            <p className={styles.quickLinkHeading}>Quick Links:</p>{/*class="quick-links-heading"*/}
            <a className={styles.quickLink} href="#home-finance" >{/*class="quick-link"*/}
              <Image height='10' width='10' src=" https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to home finance section" />
              Home Finance
            </a>
            <a className={styles.quickLink} href="#personal-finance" >{/*class="quick-link"*/}
              <Image height='10' width='10' src=" https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to personal finance section" />
              Personal Finance
            </a>
            <a className={styles.quickLink} href="#real-estate-finance" >{/*class="quick-link"*/}
              <Image height='10' width='10' src=" https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to real estate finance section" />
              Real Estate Finance
            </a>
            <a className={styles.quickLink} href="#loan-against-security" >{/*class="quick-link"*/}
              <Image height='10' width='10' src=" https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to loan against security section" />
              Loan Against Security
            </a>
            <a className={styles.quickLink} href="#corporate-finance" >{/*class="quick-link"*/}
              <Image height='10' width='10' src=" https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to corporate finance section" />
              Corporate Finance
            </a>
            <a className={styles.quickLink} href="#loan-syndication" >{/*class="quick-link"*/}
              <Image height='10' width='10' src=" https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to loan syndication section" />
              Loan Syndication
            </a>
          </div>


          <div className={styles.blockRight}>{/*class="hero-right"*/}
            <Image height='400' width='550' src=" https://abhiganesh.com/assets/financing-solutions.png" alt="Financing solutions" />
          </div>
        </div>




        <h2 style={{"fontSize":"40px","width":"400px"}}>Home Finance</h2>
        <div className={styles.block} id="home-finance">{/*class="solutions"*/}

          <div className={styles.blockLeft}>


            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >It provides funds or financial facility to purchase residential properties such as houses, flats, apartments.</p>{/*class="feature-point-content"*/}
            </div>
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >Types : home loan , land / plot loan , home construction loan , home extension loan, home improvement loan , composite loan , home loan balanced transfer</p>{/*class="feature-point-content"*/}
            </div>
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >“Buying a home is one of the best investments that any individual can make.”</p>{/*class="feature-point-content"*/}
            </div>
          </div>

          <div className={styles.blockRight}>{/*class="solution-image"*/}
            <Image height='400' width='550' src=" https://abhiganesh.com/assets/solutions/financing/home-finance.png" alt="people being satisfied after the first interaction with us" />
          </div>
        </div>



        <h2 style={{"fontSize":"40px","width":"400px"}}>Personal Finance</h2>
        <div className={styles.block} id="personal-finance">{/*class="solutions" id="personal-finance"*/}


          <div className={styles.blockRight}>{/*class="solution-image"*/}
            <Image height='400' width='550' src=" https://abhiganesh.com/assets/solutions/financing/personal-finance.png" alt="people being satisfied after the first interaction with us" />
          </div>


          <div className={styles.blockLeft}>{/*class="solution-info feature"*/}
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >Finance which covers managing your money as well as saving, investing and spending monetary resources overtime considering financial risks and future events.</p>{/*class="feature-point-content"*/}
            </div>
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >Save money, and money will save you</p>{/*class="feature-point-content"*/}
            </div>
          </div>
        </div>



        <h2 style={{"fontSize":"40px","width":"400px"}}>Real Estate Finance</h2>
        <div className={styles.block} id="real-estate-finance">{/*class="solutions"*/}


          <div className={styles.blockLeft}>{/*class="solution features flex"*/}
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p class="feature-point-content">It provides finance to potential investors for securing their capital investment.</p>{/**/}
            </div>
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p class="feature-point-content">Types: conventional loan, portfolio loan, hard money loan, blanket loan</p>{/**/}
            </div>
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >Don’t wait to buy real estate, Buy real estate and wait.</p>{/*class="feature-point-content"*/}
            </div>
          </div>


          <div className={styles.blockRight}>{/*class="solution-image"*/}
            <Image height='400' width='550' src=" https://abhiganesh.com/assets/solutions/financing/real-estate-finance.png" alt="people being satisfied after the first interaction with us" />
          </div>
        </div>




        <h2 style={{"fontSize":"40px","width":"400px"}}>Loan Against Security</h2>
        <div className={styles.block} id="loan-against-security">{/*class="solutions"*/}


          <div className={styles.blockRight}>{/*class="solution-image"*/}
            <Image height='400' width='550' src=" https://abhiganesh.com/assets/solutions/financing/loan-against-security.png" alt="people being satisfied after the first interaction with us" />
          </div>


          <div className={styles.blockLeft}>{/*class="solution-info feature"*/}
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >Loan against securities is a loan where you pledge your shares, mutual funds or life insurance policies as collateral to the bank against your loan amount.</p>{/*class="feature-point-content"*/}
            </div>
          </div>
        </div>




        <h2 style={{"fontSize":"40px","width":"400px"}}>Corporate Finance</h2>
        <div className={styles.block} id="corporate-finance">{/* class="solutions"*/}


          <div className={styles.blockLeft}>{/*class="solution-info feature"*/}
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >Corporate finance is the area of finance that deals with sources of funding, the capital structure of corporations, the actions that managers take to increase the value of the firm to the shareholders, and the tools and analysis used to allocate financial resources.</p>{/*class="feature-point-content"*/}
            </div>
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >This transaction which help in raising capital for creation, development and acquisition of a business.</p>{/*class="feature-point-content"*/}
            </div>
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />{/**/}
              <p >Price is what you pay, value is what you get.</p>{/*class="feature-point-content"*/}
            </div>
          </div>


          <div className={styles.blockRight}>{/*class="solution-image"*/}
            <Image height='400' width='550' src=" https://abhiganesh.com/assets/solutions/financing/corporate-finance.png" alt="people being satisfied after the first interaction with us" />
          </div>
        </div>



        <h2 style={{"fontSize":"40px","width":"400px"}}>Loan Syndication</h2>
        <div className={styles.block} id="loan-syndication">{/*class="solutions"*/}


          <div className={styles.blockLeft}>{/*class="solution-info feature"*/}
            <div >{/**/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >Loan syndication is the process of involving a group of lenders in funding various portions of a loan for a single borrower.</p>{/*class="feature-point-content"*/}
            </div>
            <div >{/*class="feature-point"*/}
              <Image height='50' width='50' src=" https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
              <p >Loan syndication most often occurs when a borrower requires an amount too large for a single lender to provide or when the loan is outside the scope of a lender&apos;s risk exposure levels. Thus, multiple lenders form a syndicate to provide the borrower with the requested capital.</p>{/*class="feature-point-content"*/}
            </div>
          </div>


          <div className={styles.blockRight}>{/*class="solution-image"*/}
            <Image height='400' width='550' src=" https://abhiganesh.com/assets/solutions/financing/loan-syndication.png" alt="people being satisfied after the first interaction with us" />
          </div>
        </div>



      </div>

      <div >{/*class="contact-fixed"*/}
        <Link href="/Contact"><a className={`${styles.contactbtn} ${styles.ctaPrimary} ${styles.fixedconbtn} text-center nav-link`}>Contact Us</a></Link>{/*class="contact-fixed-link cta-primary"*/}
      </div>

      <a href="#goup"><Image height='50' width='50' src=" https://abhiganesh.com/assets/goup.svg" alt="go up" /></a>{/*class="go-up"*/}
      <Footer />
    </>
  )
}

export default financingsolutions
{/*developed by praharsh*/ }