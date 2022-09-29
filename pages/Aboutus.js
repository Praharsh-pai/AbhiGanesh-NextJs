import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Components/Header'

const Aboutus = () => {
  return (
    <>
      <Header />
      <div >{/*class="hero container flex"*/}
        <div >{/*class="hero-left"*/}
          <h1>About Us</h1>
          <p>ABHIGanesh Financial Planners wants every individual to live the life they desire by enabling them to preserve what they value; invest in such a way that they can live the life they aspire; and finance their dreams, needs and desires. Our solutions are easy to understand and engage, because we offer and service all preserving, growing and multiplying solutions through one company and one service platform called ABHIGanesh Financial Planners Pvt. ltd.</p>
          <div >{/*class="ctas flex"*/}
            <Link href="/Contact"><a>Contact Us</a></Link>{/*class="cta-primary hero-cta-primary"*/}
          </div>
        </div>
        <div >{/*class="hero-right"*/}
          <Image height='50' width='50' src="https://abhiganesh.com/assets/about-hero.png" alt="a happy family looking at their laptop and planning for the future" />
        </div>
      </div>

      <div >{/*class="container stats-Image height='50' width='50'"*/}
        <Image height='50' width='50' src="https://abhiganesh.com/assets/statistics.svg" alt="stats show more than 2300 elite portfolios, sip book of over 1.5 crores and 14.7% CAGR" />
      </div>

      <div >{/*class="abhi-ganesh-thumbnail"*/}
        <a href="https://www.youtube.com/watch?v=2EKf2x2nbjs">
          <Image height='50' width='50' src="https://abhiganesh.com/assets/abhi-ganesh-thumbnail.jpg" alt="One of our videos on youtube" />
          <p>8 Wheels of Success by Abhijit Sawant</p>
        </a>
      </div>

      <div >{/*class="solutions container"*/}
        <h2>Getting To Know You</h2>

        <div >{/*class="solution flex"*/}
          <div >{/*class="solution-info"*/}
            <p >We take prior appointment before meeting client.  (We normally prefer family meetings).</p>{/*class="solution-info-para"*/}
            <p >We ask you 100 questions before managing your portfolio. (Example: Family welfare questionnaire, risk appetite questionnaire etc.). We focus on financial product education rather than just selling it. We aim to help people to retire early or help to give Financial Freedom at 45.</p>{/*class="solution-info-para"/}
            <p >Each appointment is normally 45-60 min to identify the exact need of a client.</p>{/*class="solution-info-para"*/}
            <p >We have conducted more than 2300 educational seminars/ lectures and sessions to educate clients on how to invest with proper investment product knowledge and asset allocation.</p>{/*class="solution-info-para"*/}
          </div>
          <div >{/*class="solution-image"*/}
            <Image height='50' width='50' src="https://abhiganesh.com/assets/our-process.png" alt="getting to know you" />
          </div>
        </div>

      </div>

      <div >{/*class="solutions container"*/}
        <h2>Questionnaire</h2>
        <div >{/*class="solution flex"*/}
          <div >{/*class="solution-info"*/}
            <h3 >Want to know the type of investor you are?</h3>{/*class="solution-info-heading"*/}
            <p >Answer our highly researched risk appetite questionnaire to understand which category you belong to that is Aggressive, Moderate or Conservative.</p>{/*class="solution-info-para"*/}
            <Link href="/Questionnaire"><a>Answer a Questionnaire</a></Link>{/*class="cta-primary"*/}
          </div>
          <div >{/*class="solution-image"*/}
            <Image height='50' width='50' src="https://abhiganesh.com/assets/qustionnaire.png" alt="Questionnaire" />
          </div>
        </div>
      </div>

      <div >{/*class="solutions container"*/}
        <h2>Our Beliefs</h2>

        <div >{/*class="solution flex"*/}
          <div >{/*class="solution-image"*/}
            <Image height='50' width='50' src="https://abhiganesh.com/assets/our-beliefs.png" alt="our beliefs" />
          </div>
          <div >{/*class="solution-info"*/}
            <p >We believe, if your wealth is not invested in proper asset class during your productive 20-25 years people retire with poor retirement Funds leads to low pension.</p>{/*class="solution-info-para"*/}
            <p >We believe Mutual Fund is the best instrument to beat inflation and is most tax efficient, flexible and gives tax benefits.</p>{/*class="solution-info-para"*/}
            <p >We emphasise on Term Insurance Plans and Whole Life Policies.</p>{/*class="solution-info-para"*/}
            <p >We believe cost of delay is the most expensive thing to do in the process of financial planning.</p>{/*class="solution-info-para"*/}
            <p >We believe in Indian economy and growth by investing into equities.</p>{/*class="solution-info-para"*/}
            <p >We believe that the cheapest loan on earth is housing loan. Never close it early. In fact, run it for long term and start SIP.  </p>{/*class="solution-info-para"*/}
          </div>
        </div>

      </div>

      <div >{/*class="solutions container"*/}
        <h2>Our Aims</h2>

        <div >{/*class="solution flex"*/}
          <div >{/*class="solution-info"*/}
            <p >We aim to create 1500 crorepati clients by 31st march 2025.</p>{/*class="solution-info-para"*/}
            <p >We aim to help people to retire early or help to give Financial Freedom at 45.</p>{/*class="solution-info-para"*/}
          </div>
          <div >{/*class="solution-image"*/}
            <Image height='50' width='50' src="https://abhiganesh.com/assets/our-aims.png" alt="our aims" />
          </div>
        </div>

      </div>

      <div >{/*class="container waiting"*/}
        <h2>What are you waiting for?</h2>
        <p>Our solution starts with minimum 1000 Rs. PM and maximum no limit</p>
        <Link href="/Contact"><a>Contact Us</a></Link>{/*class="cta-primary hero-cta-primary"*/}
      </div>


      <div class="contact-fixed">{/**/}
        <Link href="/Contact"><a>Contact Us</a></Link>{/*class="contact-fixed-link cta-primary"*/}
      </div>
    </>
  )
}

export default Aboutus