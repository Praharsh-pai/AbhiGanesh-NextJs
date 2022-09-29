import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from './Components/Header'
import Footer from './Components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <div>{/* class="hero container flex" */}
                <div>{/*class="hero-left" */}
                    <h1>We Preserve Grow And Multiply <span>Wealth</span></h1>{/*style="color:#ff1214"*/}
                    <p>We simplify your Financial Planning and help you enjoy Financial Freedom in your life with confidence and ease.</p>
                    <div >{/*class="ctas flex"*/}
                        <Link href="/Contact"><a>Contact Us</a></Link>{/*class="cta-primary hero-cta-primary"*/}
                        <Link href="/Questionnaire"><a >Answer a Questionnaire</a></Link>{/*class="cta-secondary"*/}
                    </div>
                </div>
                <div>{/*class="hero-right"*/}
                    <Image src="https://abhiganesh.com/assets/happy-family.svg" height='50' width='50' alt="a happy family looking at their laptop and planning for the future" />
                </div>
            </div>

            <div >{/*class="container stats-Image"*/}
                <Image src="https://abhiganesh.com/assets/statistics.svg" height='50' width='50' alt="stats show more than 2300 elite portfolios, sip book of over 1.5 crores and 14.7% CAGR" />
            </div>

            <div >{/*class="solutions container"*/}
                <h2>Our Solutions</h2>

                <div >{/*class="solution flex"*/}
                    <div >{/*class="solution-image"*/}
                        <Image src="https://abhiganesh.com/assets/preserving-solutions.png" height='50' width='50' alt="preserving solutions" />
                    </div>
                    <div>{/* class="solution-info"*/}
                        <h3 >Preserving Solutions</h3>{/*class="solution-info-heading"*/}
                        <p >Insurance ensures you financial support and reduces uncertainties in your business and life.</p>{/*class="solution-info-para preserving-para"*/}
                        <Image src="https://abhiganesh.com/assets/4c-principle.svg" height='50' width='50' alt="This shows the 4Cs principle of Adam Smith" />
                        {/*class="four-c-principle"*/}
                        <Link href="/preservingsolutions"><a>Learn More</a></Link>{/* class="cta-primary"*/}
                    </div>
                </div>

                <div >{/*class="solution flex flex-reverse"*/}
                    <div >{/*class="solution-info"*/}
                        <h3 >Investing Solutions</h3>{/*class="solution-info-heading"*/}
                        <p >Let Your Money Work Harder And Realise Your Financinal Goals.</p>{/*class="solution-info-para"*/}
                        <Link href="/investingsolutions"><a>Learn More</a></Link>{/* class="cta-primary"*/}
                    </div>
                    <div >{/*class="solution-image"*/}
                        <Image src="https://abhiganesh.com/assets/investing-solutions.png" height='50' width='50' alt="investing solutions" />
                    </div>

                </div>

                <div >{/*class="solution flex"*/}
                    <div>{/* class="solution-image"*/}
                        <Image src="https://abhiganesh.com/assets/financing-solutions.png" height='50' width='50' alt="financing solutions" />
                    </div>
                    <div >{/*class="solution-info"*/}
                        <h3 >Financing Solutions</h3>{/*class="solution-info-heading"*/}
                        <p >We take care of all your finances, may it be home finance, personal finance, real estate finance, corporate finance etc.</p>{/*class="solution-info-para"*/}
                        <Link href="/financingsolutions"><a>Learn More</a></Link>{/* class="cta-primary"*/}
                    </div>
                </div>

            </div>

            <div >{/*class="solutions container"*/}
                <h2>Questionnaire</h2>
                <div >{/*class="solution flex"*/}
                    <div >{/*class="solution-info"*/}
                        <h3 >Want to know the type of investor you are?</h3>{/*class="solution-info-heading"*/}
                        <p >Answer our highly researched risk appetite questionnaire to understand which category you belong to that is Aggressive, Moderate or Conservative.</p>{/*class="solution-info-para"*/}
                        <Link href="/Questionnaire"><a >Answer a Questionnaire</a></Link>{/*class="cta-primary"*/}
                    </div>
                    <div >{/*class="solution-image"*/}
                        <Image src="https://abhiganesh.com/assets/qustionnaire.png" height='50' width='50' alt="Questionnaire" />
                    </div>
                </div>
            </div>


            <div >{/*class="solutions container"*/}
                <h2>Our Process</h2>
                <div>{/* class="solution features flex"*/}

                    <div>{/* class="solution-info feature"*/}
                        <div >{/*class="feature-point"*/}
                            <Image src="https://abhiganesh.com/assets/check.svg" height='50' width='50' alt="tick-mark" />
                            <p >It begins with us having a conversation with an individual client in simple language about their life’s financial needs, and then we suggest the right solution.</p>{/*class="feature-point-content"*/}
                        </div>
                        <div >{/*class="feature-point"*/}
                            <Image src="https://abhiganesh.com/assets/check.svg" height='50' width='50' alt="tick-mark" />
                            <p>We break client’s financial needs into small term, mid term and long term goals, such as emergency fund, children’s education, margin for housing loan, retirement and pension fund.</p>{/* class="feature-point-content"*/}
                        </div>
                        <div >{/*class="feature-point"*/}
                            <Image src="https://abhiganesh.com/assets/check.svg" height='50' width='50' alt="tick-mark" />
                            <p >We ensure that an individual manages his/her money with confidence and ease by offering the convinience of one stop solution for all financial needs</p>{/*class="feature-point-content"*/}
                        </div>
                    </div>

                    <div >{/*class="solution-image"*/}
                        <Image src="https://abhiganesh.com/assets/our-process.png" height='50' width='50' alt="people being satisfied after the first interaction with us" />
                    </div>

                </div>
            </div>

            <div >{/*class="contact-fixed"*/}
                <Link href="/Contact"><a>Contact Us</a></Link>{/*class="contact-fixed-link cta-primary"*/}
            </div>
            <Footer />
        </>
    )
}

export default Home