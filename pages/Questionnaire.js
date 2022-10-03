import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import styles from "../styles/questionnaire.module.css"
import Link from 'next/link'
const Questionnaire = () => {
  const showformtwo = () => {
    const card = document.querySelector(".pop");
    card.style.display = "block";
    const mainform = document.querySelector(".mainform");
    mainform.style.display = "none"
  }
  const showformthree = () => {
    const card2 = document.querySelector(".pop2");
    card2.style.display = "block";
    const card = document.querySelector(".pop");
    card.style.display = "none"
  }
  return (
    <>
      <Header />
      <div className='container rounded text-center justify-content-center align-items-center' style={{ "flexDirection": "column", "marginBottom": "50px", "display": "flex" }}>
        <h1 className='fw-large' style={{ "fontSize": "70px" }}>Risk Profile Questionnaire</h1>
        <p style={{ "fontSize": "25px", "width": "55%", "fontWeight": "lighter" }}>This questionnaire consists of 10 highly researched questions that will help you understand the type of Investor you are, Aggressive, Moderate or Conservative.</p>
      </div>

      <form className='container rounded mainform' style={{ "width": "70%", "display": "block" }}>
        <div className={styles.question}>
          <p className="question-para">1. In the event of an emergency how much cash savings would you have?</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="savings" id="savings1" value="2" />
            <label className="form-check-label" htmlFor="savings1">Less than 3 months of living expenses</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="savings" id="savings2" value="4" />
            <label className="form-check-label" htmlFor="savings2">3 to 6 months of living expenses</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="savings" id="savings3" value="6" />
            <label className="form-check-label" htmlFor="savings3">More than 6 months of living expenses</label>
          </div>
        </div>


        <div className={styles.question}>
          <p className="question-para">2. Is your current state of employment</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="employment" id="employment1" value="2" />
            <label className="form-check-label" htmlFor="employment1">Insecure</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="employment" id="employment2" value="4" />
            <label className="form-check-label" htmlFor="employment2">Relatively stable</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="employment" id="employment3" value="6" />
            <label className="form-check-label" htmlFor="employment3">Highly Secure</label>
          </div>
        </div>


        <div className={styles.question}>
          <p className="question-para">3. Do you require any income from your investment portfolio?</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="income" id="income1" value="2" />
            <label className="form-check-label" htmlFor="income1">All income earned to be received</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="income" id="income2" value="4" />
            <label className="form-check-label" htmlFor="income2">Partial income earned to be received</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="income" id="income3" value="6" />
            <label className="form-check-label" htmlFor="income3">All income earned to be reinvested</label>
          </div>
        </div>


        <div className={styles.question}>
          <p className="question-para">4. Do you require access to your investment portfolio?</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="access" id="access1" value="2" />
            <label className="form-check-label" htmlFor="access1">I require it for spending</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="access" id="access2" value="4" />
            <label className="form-check-label" htmlFor="access2">In case of emergency</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="access" id="access3" value="6" />
            <label className="form-check-label" htmlFor="access3">I have no requirement for access to my investment capital</label>
          </div>
        </div>


        <div className={styles.question}>
          <p className="question-para">5. Would you change to another investment if</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="change" id="change1" value="2" />
            <label className="form-check-label" htmlFor="change1">Your investment drops in value</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="change" id="change2" value="4" />
            <label className="form-check-label" htmlFor="change2">The value drops more than 15% during a given year</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="change" id="change3" value="6" />
            <label className="form-check-label" htmlFor="change3">I would not sell in the short term based on negative returns</label>
          </div>
        </div>


        <div className={styles.question}>
          <p className="question-para">6. Where do you currently invest most of your money?</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="invest" id="invest1" value="2" />
            <label className="form-check-label" htmlFor="invest1">Mainly cash and term deposits</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="invest" id="invest2" value="4" />
            <label className="form-check-label" htmlFor="invest2">Shares, investment, deversified managed funds etc.</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="invest" id="invest3" value="6" />
            <label className="form-check-label" htmlFor="invest3">Aggressive investment including small company shares or speculative investment opportunities</label>
          </div>
        </div>


        <div className={styles.question}>
          <p className="question-para">7. Which statement best describes your investment objective?</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="objective" id="objective1" value="2" />
            <label className="form-check-label" htmlFor="objective1">A secure safe place for my investments with no loss in capital</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="objective" id="objective2" value="4" />
            <label className="form-check-label" htmlFor="objective2">Investments that show steady growth and have minimal risk to my capital</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="objective" id="objective3" value="6" />
            <label className="form-check-label" htmlFor="objective3">An aggressive mix of investments and mostly those with higher risk and chance for higher returns</label>
          </div>
        </div>


        <div className={styles.question}>
          <p className="question-para">8. What type of returns would you expect from your investment?</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="returns" id="returns1" value="2" />
            <label className="form-check-label" htmlFor="returns1">Regular income</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="returns" id="returns2" value="4" />
            <label className="form-check-label" htmlFor="returns2">Both income and capital growth</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="returns" id="returns3" value="6" />
            <label className="form-check-label" htmlFor="returns3">Mainly capital growth</label>
          </div>
        </div>


        <div className={styles.question}>
          <p className="question-para">9. What is your investment time frame?</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="time" id="time1" value="2" />
            <label className="form-check-label" htmlFor="time1">1 to 3 years</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="time" id="time2" value="4" />
            <label className="form-check-label" htmlFor="time2">3 to 5 years</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="time" id="time3" value="6" />
            <label className="form-check-label" htmlFor="time3">more than 5 years</label>
          </div>
        </div>


        <div className={styles.question}>
          <p className="question-para">10. Which of the following risk/return scenarios would you be most comfortable with?</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="risk" id="risk1" value="2" />
            <label className="form-check-label" htmlFor="risk1">Low risk/return</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="risk" id="risk2" value="4" />
            <label className="form-check-label" htmlFor="risk2">Moderate risk/return</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="risk" id="risk3" value="6" />
            <label className="form-check-label" htmlFor="risk3">High risk/return</label>
          </div>
        </div>

        <p className="finish-form" style={{ "display": "none" }}>Oops! it seems you missed some questions. Please make sure to answer all the questions😊</p>
        <div className='container rounded text-center d-flex justify-content-center align-items-center'>
          <input type="button" className={`${styles.question} submit form-cta cta-primary`} value="Submit" onClick={showformtwo} />
        </div>

      </form>

      <div className="pop container rounded text-center justify-content-center align-items-center" style={{ "display": "none", "flexDirection": "column", "width": "80%" }}>
        {/* <div >
          <img src="../../../assets/nav/close.svg" alt="close pop up"/>
        </div> */}
        <h2 >Thank You For Answering the Test</h2>
        <p>We will send you your score and the type of Investor you are via your mail and break down how you should go ahead in Investing!!</p>
        <form className='container rounded' style={{ "width": "40%" }}>
          <label className='form-label' htmlFor="name">Name</label> <br />
          <input className="form-control" type="text" name="name" id="name" /> <br />
          {/* <span>*Please Enter Your Name</span> <br/> */}
          <label className='form-label' htmlFor="email">Email</label> <br />
          <input className="form-control" type="email" name="email" id="email" /> <br />
          {/* <span *ngIf="email.touched && !email.valid">*Please Enter A Valid Email</span> <br/> */}
          <input type="button" className={`submit form-cta cta-primary`} value="Get Your Results" onClick={showformthree} /> <br/><br/><br/>
          <Link href="/"><a className={`submit form-cta cta-primary`}>Go to Home Page</a></Link>
        </form>
      </div>
      <div className="pop2 container rounded text-center justify-content-center align-items-center" style={{ "display": "none", "flexDirection": "column", "width": "80%" }}>
        {/* <div >
          <img src="../../../assets/nav/close.svg" alt="close pop up"/>
        </div> */}
        <h2 className="thanks-pop-header">Thank You For Answering The Questionnaire🎉</h2>
        <p className="thanks-pop-para">We&apos;ll Send Your Results As Soon As Possible</p>
        <br/><br/><br/>
          <Link href="/"><a className={`submit form-cta cta-primary`}>Go to Home Page</a></Link>
      </div>
      <Footer />
    </>
  )
}

export default Questionnaire
{/*developed by praharsh*/ }