import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const investingsolutions = () => {
  return (
    <>
      <div >{/*class="container"*/}
        <div >{/*class="hero flex"*/}
          <div >{/*class="hero-left"*/}
            <h1 id="goup">Investing Solutions</h1>

            <p >Quick Links:</p>{/*class="quick-links-heading"*/}
            <a href="#mutual-fund" >{/*class="quick-link"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to mutual fund section"/>
                Mutual Fund
            </a>
            <a href="#wealth-management" >{/*class="quick-link"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to wealth management section"/>
                Wealth Management
            </a>
            <a href="#portfolio-management-services" >{/*class="quick-link"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to Portfolio Management Services section"/>
                Portfolio Management Services
            </a>
            <a href="#retirement-solutions" >{/*class="quick-link"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to Retirement Solutions section"/>
                Retirement Solutions
            </a>
            <a href="#pension-funds" >{/*class="quick-link"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to Pension Funds section"/>
                Pension Funds
            </a>
          </div>

          <div >{/*class="hero-right"*/}
            <Image height='50' width='50' src="https://abhiganesh.com/assets/investing-solutions.png" alt="Investing solutions"/>
          </div>
        </div>

        <div  id="mutual-fund">{/*class="solutions"*/}
          <h2>Mutual Fund</h2>
          <div >{/*class="solution features flex"*/}

            <div >{/*class="solution-info feature"*/}
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >The Fund manager pools savings from investors and invests their money in different securities that generate income and then gives it back to the investors</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >Types: open ended fund, closed ended fund, equity/ growth fund , debt / fixed income fund , balanced fund , index fund , sectoral fund</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >Why Mutual Funds?<br />Liquidity, Tax Benefits, Portfolio Diversification, Flexibility, Expert Management, Suits Your Financial Goals, Minimal Transaction Cost, Automated Payment, Safe and Transparent, Systematic or one time investment.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >Invest NOW, &quot;sometime later becomes never&quot;.</p>{/*class="feature-point-content"*/}
              </div>
            </div>

            <div >{/*class="solution-image"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/solutions/investing/mutual-fund.png" alt="wealth increasing day after day"/>
            </div>

          </div>
        </div>
        <div  id="wealth-management">{/*class="solutions"*/}
          <h2>Wealth Management</h2>
          <div >{/*class="solution features flex flex-reverse"*/}

            <div >{/*class="solution-image"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/solutions/investing/wealth-management.png" alt="this image depicts the different aspects of wealth management"/>
            </div>

            <div >{/*class="solution-info feature"*/}
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >Investment financial advisory that combines other financial services to look after needs of affluent clients.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >Using a consultative process, the advisor gleans information about the client’s wants and specific situation, then tailors a personalized strategy that uses a range of financial products and services.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >Never depend on a single income, make investments to create a second source.</p>{/*class="feature-point-content"*/}
              </div>

            </div>

          </div>
        </div>
        <div  id="portfolio-management-services">{/*class="solutions"*/}
          <h2>Portfolio Management Services</h2>
          <div >{/*class="solution features flex"*/}

            <div >{/*class="solution-info feature"*/}
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >Doing investment portfolio in stocks, fixed income, debt, cash, structured products and individual securities to meet investment objectives.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >The pessimist sees difficulty in every opportunity, &quot; The optimist sees opportunity in every difficulty &quot;.</p>{/*class="feature-point-content"*/}
              </div>
            </div>

            <div >{/*class="solution-image"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/solutions/investing/portfolio-management-services.png" alt="image of a black-board with portfolio-management-services written on it"/>
            </div>

          </div>
        </div>
        <div id="retirement-solutions">{/*class="solutions" */}
          <h2>Retirement Solutions</h2>
          <div >{/*class="solution features flex flex-reverse"*/}

            <div >{/*class="solution-image"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/solutions/investing/retirement-solutions.png" alt="people being satisfied after the first interaction with us"/>
            </div>

            <div >{/*class="solution-info feature"*/}
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >This planning that helps an individual to accumulate funds to remain financially independent during your retirement years.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >Don&apos;t simply retire from something, “Have something to retire to &quot;</p>{/*class="feature-point-content"*/}
              </div>

            </div>

          </div>
        </div>
        <div  id="pension-funds">{/*class="solutions"*/}
          <h2>Pension Funds</h2>
          <div >{/*class="solution features flex"*/}

            <div >{/*class="solution-info feature"*/}
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >Pension plan is similar to retirement plan in this plan you may invest some portion of your income into designated plan. Ex. ICICI FREEDOM SIP, TATA Retirement Savings Fund, HDFC Retirement Savings Fund etc.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p>This provide retirement income matching your investments.</p>{/* class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark"/>
                  <p >The universe is like a pension plan it will match your investment</p>{/*class="feature-point-content"*/}
              </div>
            </div>

            <div >{/*class="solution-image"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/solutions/investing/pension-funds.png" alt="happy old couple"/>
            </div>

          </div>
        </div>




      </div>

      <div >{/*class="contact-fixed"*/}
        <Link href="/Contact"><a>Contact Us</a></Link>{/* class="contact-fixed-link cta-primary" */}
      </div>

      <a  href="#goup"><Image height='50' width='50' src="https://abhiganesh.com/assets/goup.svg" alt="go up"/></a>{/*class="go-up"*/}
    </>
  )
}

export default investingsolutions