import React from "react";
import styled from "styled-components";
import banner from "../assets/GoCHire-img/banner.png";
import { CiMail, CiLocationOn } from "react-icons/ci";

export const GoCHireSupport = () => {
  return (
    <>
      <Main>
        <div className="banner">
          <h1 className="main-heading">
            Hello Corporates. Get the Best Learners.... <br />
            Elevate your Team with Top Talent
          </h1>
        </div>
        <section className="Why-hire">
          <h1>Why you Should Hire Our Learn</h1>
        </section>
        <section className="Contact-us-div">
          <div className="Contact-us">
            <div>
              <h1 className="contact-heading">
                Contact <span className="blue">Us</span>
              </h1>
              <hr className="line" />

              <p className="number">1233-456-5757</p>
              <p className="Contact-para">
                Want to know more? Speak With us get the ideal candidate that
                fits your requirement!
              </p>
              <div className="mail">
                <CiMail className="icon" />
                <a className="blue-3" href="">
                  {" "}
                  goccare@gocollege.com
                </a>
              </div>

              <div className="visit">
                <CiLocationOn className="icon" />
                <p className="blue-3">
                  Visit Us : <span>(10 AM to 7 PM)</span>
                </p>
              </div>
            </div>
            <div>
              <div className="form-div">
                <p>Full Name</p>
              </div>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
};

const Main = styled.div`
  *{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
  }
  .banner{
    background-image: url(${banner});
    background-size: 100%;
    background-Repeat: no-repeat;
  }
  .main-heading{
    padding: 120px 30px;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
  }

  // Contact section
  .Contact-us-div{
    background-color: #F0F8FF;

  }
  .Contact-us{
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 75%;
    margin: auto;
    gap: 10px;
    
  }
  .contact-heading{
    font-weight: 550;
    font-size: 2rem;
    margin-top: 100px;
  }
  .blue{
    color: blue;
  }
  .line{
    background-color: blue;
    height: 2px;
    border: none;
    width: 200px;
    margin-top: 10px;
  }
  .number{
    color: red;
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 29px;
  }
  .Contact-para{
    font-size: 1.6rem;
    margin-top: 20px;
  }
  .blue-3 {
    color: #2192FF;
    font-weight: 400;
  }
  .icon{
    margin-right: 10px;
    color: #2192FF;
    font-size: 1.2rem;
  }
  .mail , .visit{
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .form-div{
    background-color: #fff;
    border: 0.1rem solid ;
    border-radius: 8px;
  }
  
  `;
