import React from "react";
import styled from "styled-components";
import phone from "../assets/Contact-img/24-hours.webp";
import { BsFillStarFill } from "react-icons/bs";
import { CiMail, CiMobile3, CiLocationOn } from "react-icons/ci";

export const ContactUs = () => {
  return (
    <>
      <Main>
        <div>
          <section className="banner">
            <h1 className="main-heading">
              Need Answers? Connect with us over a detailed telephonic session
            </h1>
            <div className="inner-banner">
              <div>
                <img className="phone-img" src={phone} alt="" />
              </div>
              <div className="box-2">
                <div className="col-1">
                  <h1>Our Mentors Offer</h1>
                  <p>
                    {" "}
                    <span className="star">
                      <BsFillStarFill />
                    </span>{" "}
                    Correct Information
                  </p>
                  <p>
                    <span className="star">
                      <BsFillStarFill />
                    </span>{" "}
                    Answers Related to your Degree
                  </p>
                </div>
                <div className="col-2">
                  <p className="col-3">
                    {" "}
                    <span className="star">
                      <BsFillStarFill />
                    </span>{" "}
                    Assistance to Get The Right university
                  </p>
                  <p>
                    {" "}
                    <span className="star">
                      <BsFillStarFill />
                    </span>{" "}
                    Support Till The End Of Your Journey
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <section className="section-get-in">
              <h1 className="heading-get-in">Get in Touch</h1>
              <p className="para">Give us ring. You can even come to meet us</p>
              <div className="contact-info">
                <div className="mail">
                  <span className="icons">
                    <CiMail />
                  </span>
                  <div className="box-4">
                    <h4> For Job-Related Query</h4>
                    <h2>hr@GoCollege.com</h2>
                  </div>
                  <div className="box-4">
                    <h4> For HR Assistance</h4>
                    <h2>hrhelpdesk@GoCollege.com</h2>
                  </div>
                  <div className="box-4">
                    <h4> For Help & Support</h4>
                    <h2>info@GoCollege.com</h2>
                  </div>
                </div>
                <div className="phone">
                  <span className="icons">
                    <CiMobile3 />
                  </span>
                  <h3>1234567890</h3>
                </div>
                <div className="location">
                  <span className="icons">
                    <CiLocationOn />
                  </span>
                  <h3>C-1234 A block Sector 45, Noida, UK 20123</h3>
                </div>
              </div>
            </section>

            <section className="contact-form">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.530741038066!2d77.31074431555618!3d28.583850693032392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce91a83de9ab3%3A0xd1ca78f64f373b2!2sCollege%20Vidya!5e0!3m2!1sen!2sin!4v1665561870569!5m2!1sen!2sin"
                  style={{ width: "100%", height: "100%" }}
                  frameborder="0"
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <h2>Contact Us</h2>
                <form onSubmit="">
                  <div>
                    <div className="gender-box">
                      <div>
                        <input
                          className="input-radio"
                          type="radio"
                          id="male"
                          name="gender"
                        />
                        <label htmlFor="male">Male</label>
                      </div>
                      <div>
                        <input
                          className="input-radio"
                          type="radio"
                          id="female"
                          name="gender"
                        />
                        <label htmlFor="male">Female</label>
                      </div>
                    </div>

                    <input
                      className="name-input"
                      type="text"
                      name="name"
                      value=""
                      onChange=""
                      required
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      className="name-input"
                      type="text"
                      autoComplete="off"
                      placeholder="Date of Birth (DD/MM/YYYY)) "
                      inputmode="numeric"
                      value=""
                      onChange=""
                      required
                    />
                  </div>
                  <div>
                    <label>Message:</label>
                    <textarea name="message" value="" onChange="" required />
                  </div>

                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </section>

            <section className="visit-Us">
              <div>
                <h1>
                  Call doesn't feel <br /> enough <span>Visit Us</span>
                </h1>
                <p>
                  At GoCollege, it is our constant endeavour to provide great
                  customer experience. In case you require assistance, we have
                  created multiple ways to reach out to us
                </p>
                <button className="call-btn">Call Now</button>
                <p>
                  <span>icone</span> Visit Us: (10 AM to 7 PM)
                </p>
                <h3>C-1234 A block Sector 45, Noida, UK 20123</h3>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </section>
          </div>
        </div>
      </Main>
    </>
  );
};
const Main = styled.div`
      
        *{padding: 0;
          margin: 0;

        }
        .banner{
          background-color: blue;
          padding-bottom: 10px;
        }
        .inner-banner{
          display: grid;
          grid-template-columns: 10% 80%;
           margin: 20px 50px;
          background-color: #fff;
          border-radius: 10px;
          padding: 10px 0;
          margin-bottom: 50px;
        }

        .main-heading{
          color: #fff;
          text-align: center;
          padding-top: 50px;
          font-size: 1.2rem;
        }
        .phone-img{
          width: 120px;
          padding-top: 10px;
          padding-left: 70px;
        }
        .container{
          max-width: 90%;
          margin: auto;
        }
        .box-2{
          display: flex;
          justify-content: space-around;
        }
        .col-1 , .col-2{
          margin-top: 30px;
        }
        .col-1 >h1{
          margin-bottom: 8px;
          font-weight: 510;
          font-size: 1.8rem;
        }
        .col-1 >p , .col-2 > p{
          font-size: 1.3rem;
          margin-bottom: 10px;
        }
        .col-3{
          margin-top: 35px;
        }
        .star{
          font-size: 1rem;
          margin-top: 20px !important;
        }
          
          .heading-get-in{
            margin-top: 50px;
            text-align: center;
            font-size: 2.2rem;
          }
         .para{
          text-align: center;
          font-size: 1.4rem;
          margin-bottom: 50px;
         }
         .contact-info{
          display: flex;
          justify-content: space-between;
          
         }
         .icons{
          font-size: 3rem;
           color: blue;
          
         }
         .phone ,.location , .mail{
          text-align: center;
         }
         .box-4{
          border: 1px solid blue;
          text-align: center;
          margin-top: 10px;
          padding: 12px 50px;
          border-radius: 10px;
         }
         h4{
          font-size: 0.9rem;
         }
         h2{
          font-size: 1.3rem;
          color: blue;
          font-weight: 900;
         }

         .contact-form{

         
          margin-top: 50px;
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 40px;
         }
         .gender-box{
          display: flex;
          margin: 20px 0;
        gap: 10px;
         }
         .input-radio{
          width: 20px;
         }
         .name-input{
          padding: 15px 200px 15px 10px;
          border-radius: 10px;
          font-size: 1.2rem;
          margin-bottom: 10px;
         }
       `;
