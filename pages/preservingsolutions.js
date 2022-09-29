import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const preservingsolutions = () => {
  return (
    <>
      <div>{/* class="container"*/}
        <div >{/*class="hero flex"*/}
          <div >{/*class="hero-left"*/}
            <h1 id="goup">Preserving Solutions</h1>
            <p >Quick Links:</p>{/*class="quick-links-heading"*/}
            <a href="#life-insurance" >{/*class="quick-link"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to life insurance section" />
              Life Insurance
            </a>
            <a href="#health-insurance" >{/*class="quick-link"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to health insurance section" />
              Health Insurance
            </a>
            <a href="#motor-insurance" >{/*class="quick-link"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to motor insurance section" />
              Motor Insurance
            </a>
            <a href="#corporate-general-insurance" >{/*class="quick-link"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to corperate general insurance section" />
              Corporate General Insurance
            </a>
            <a href="#travel-insurance" >{/*class="quick-link"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/quicklink.svg" alt="quick-link to go to travel insurance section" />
              Travel Insurance
            </a>
          </div>
          <div >{/*class="hero-right"*/}
            <Image height='50' width='50' src="https://abhiganesh.com/assets/preserving-solutions.png" alt="preserving solutions" />
          </div>
        </div>

        <div id="life-insurance">{/*class="solutions" id="life-insurance"*/}
          <h2>Life Insurance</h2>
          <div >{/*class="solution features flex"*/}

            <div >{/*class="solution-info feature"*/}
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >It is an insurance that pays out a sum of money either on the death of the insured person or after a set period.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >No matter what age you are in life, life insurance is definitely something to add to your overall financial portfolio.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >we provide 5 different types of life insurance plans (LIC- LIFE INSURANCE CORPORATION OF INDIA) :{/*class="feature-point-content"*/}
                  <br />1.	Term plan : secure family against uncertainty
                  <br />2.	Unit linked insurance plan : insurance + investment
                  <br />3.	Child plan : higher education support
                  <br />4.	Endowment plan: insurance & savings
                  <br />5.	Retirement plan: retire with financial independence
                </p>
              </div>
            </div>

            <div >{/*class="solution-image"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/solutions/preserving/life-insurance.png" alt="a happy family with all the generations" />
            </div>

          </div>
        </div>
        <div id="health-insurance">{/*class="solutions" id="health-insurance"*/}
          <h2>Health Insurance</h2>
          <div >{/*class="solution features flex flex-reverse"*/}

            <div >{/*class="solution-image"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/solutions/preserving/health-insurance.png" alt="health insurance" />
            </div>

            <div >{/*class="solution-info feature"*/}
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >It is an insurance taken out to cover the cost of medical care.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >Prevents you and your family from suffering a financial loss as a result of an accident, illness or disability.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >Provides an income while you are disabled or in hospital or cover the cost of your medical or nursing care.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >We provide health insurance of Star Health And Allied Company Ltd.  & Oriental Insurance Company Ltd. </p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >We believe health insurance is a right and not a privilege</p>{/*class="feature-point-content"*/}
              </div>

            </div>

          </div>
        </div>
        <div id="motor-insurance">{/*class="solutions" id="motor-insurance"*/}
          <h2>Motor Insurance</h2>
          <div>{/* class="solution features flex"*/}

            <div >{/*class="solution-info feature"*/}
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >Motor insurance covers your vehicle from any potential risks financially.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >We provide Third party insurance, bumper to bumper insurance</p>{/*class="feature-point-content"*/}
              </div>
            </div>

            <div >{/*class="solution-image"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/solutions/preserving/motor-insurance.png" alt="image of a car after an accident" />
            </div>

          </div>
        </div>
        <div id="corporate-general-insurance">{/*class="solutions" id="corporate-general-insurance"*/}
          <h2>Corporate General Insurance</h2>
          <div >{/*class="solution features flex flex-reverse"*/}

            <div >{/*class="solution-image"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/solutions/preserving/corporate-general-insurance.png" alt="corporate-general-insurance" />
            </div>

            <div >{/*class="solution-info feature"*/}
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >It protects large organizations against business risk such as theft, financial losses, employee health & accidents.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >It is a comprehensive business insurance that benefits the past or present employees as well as the company itself.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >Saving alone are not enough to achieve financial freedom. Insuring your assets with general insurance policies is equally important.</p>{/*class="feature-point-content"*/}
              </div>

            </div>

          </div>
        </div>
        <div id="travel-insurance">{/*class="solutions" id="travel-insurance"*/}
          <h2>Travel Insurance</h2>
          <div >{/*class="solution features flex"*/}

            <div >{/*class="solution-info feature"*/}
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >Travel insurance is an insurance product for covering unforeseen losses incurred while travelling, either internationally or domestically.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >This insurance provides protection against risk and financial losses that could happen while travelling, such as loss of luggage, delays, injury.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >Protect your vacation with travel insurance.</p>{/*class="feature-point-content"*/}
              </div>
              <div >{/*class="feature-point"*/}
                <Image height='50' width='50' src="https://abhiganesh.com/assets/check.svg" alt="tick-mark" />
                <p >Enjoy your travels and stop worrying so much.</p>{/*class="feature-point-content"*/}
              </div>
            </div>

            <div >{/*class="solution-image"*/}
              <Image height='50' width='50' src="https://abhiganesh.com/assets/solutions/preserving/travel-insurance.jpg" alt="people travelling" />
            </div>

          </div>
        </div>

      </div>

      <div >{/*class="contact-fixed"*/}
        <Link href="/Contact"><a>Contact Us</a></Link>{/*class="contact-fixed-link cta-primary"*/}
      </div>

      <a  href="#goup"><Image height='50' width='50' src="https://abhiganesh.com/assets/goup.svg" alt="go up" /></a>{/*class="go-up"*/}
    </>
  )
}

export default preservingsolutions