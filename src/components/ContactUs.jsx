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
          .section-get-in{
            max-width: 90%;
            margin: auto;
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
       `;
