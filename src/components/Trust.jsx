import React from "react";
import styled from "styled-components";
import GocollegeSeal from "../assets/Trust-img/GocollegeSeal.png";
import AdmissionProcess from "../assets/Trust-img/AdmissionProcess.png";
import FinancialTransperancy from "../assets/Trust-img/FinancialTransparency.jpeg";
import RecognisedPremiumCampuses from "../assets/Trust-img/RecognisedPremiumCampuses.jpg";
import UserFriendlyLnterface from "../assets/Trust-img/UserFriendlyLnterface.jpeg";
import PostAdmissionServices from "../assets/Trust-img/PostAdmissionServices.png";
import { AiFillBank } from "react-icons/ai";
import { AiOutlineSafety } from "react-icons/ai";
import { BiMapPin } from "react-icons/bi";
import { BiShieldAlt2 } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";

export const Trust = () => {
  return (
    <Main>
      <div className="row-1">
        <div className="main">
          <div className="main-heading">
            <h1>
              {" "}
              Why you <br />
              Should Choose <br />
              Us
            </h1>
            <p>
              Discover your path to success with GetOnlineCollege,
              <br /> where we bring reputable institutions to your fingertips,{" "}
              <br /> ensuring a seamless journey towards an accredited online
              degree. <br /> Trust in our commitment to quality education and
              personalized support for a brighter academic future. Turn on
              screen reader support
            </p>
            <p className="second-p">Right Degree From Right University</p>
            <p>#EducationJoApkeKaamAye</p>
          </div>
          <div className="logo">
            <img src={GocollegeSeal} alt="" />
          </div>
        </div>
        <div>
          <div className="row2">
            <div className="main-grid">
              {/* 1st Unbiased Admission Process  */}
              <div className="contents">
                <h1 className="heading">Unbiased Admission Process</h1>
                <p className="para">
                  We believe in giving you college options based on your needs
                  and location, <br />
                  ensuring a fair and impartial selection process.
                  <br />
                  Need/Location/Financials
                </p>
              </div>
              <div className="img-div">
                <img src={AdmissionProcess} alt="img" />
              </div>

              {/* 2nd
Financial Transperancy */}
              <div className="img-div">
                <img src={FinancialTransperancy} alt="img" />
              </div>
              <div className="contents">
                <h1 className="heading">Financial Transperancy</h1>
                <p className="para">
                  At GetOnlineCollege, we're committed to financial
                  transparency. We don't charge extra fees, and we even offer
                  scholarships to help you achieve your educational goals
                  without added financial burden.
                </p>
              </div>
              {/* 3rd
Recognised  and Premium Campuses*/}

              <div className="contents">
                <h1 className="heading">Recognised and Premium Campuses</h1>
                <p className="para">
                  We partner with prestigious and recognized colleges, providing
                  you access to top-tier education and enhancing your academic
                  journey.
                </p>
              </div>
              <div className="img-div">
                <img src={RecognisedPremiumCampuses} alt="img" />
              </div>

              {/* 4th
User Friendly Interface */}
              <div className="img-div">
                <img
                  className="UserFriendlyLnterface-img"
                  src={UserFriendlyLnterface}
                  alt="img"
                />
              </div>
              <div className="contents">
                <h1 className="heading">User Friendly Interface</h1>
                <p className="para">
                  Our easy-to-use Learning Management System (LMS) ensures a
                  seamless online learning experience, making your academic path
                  simple and convenient.
                </p>
              </div>
              {/* 5th
Post Admission Services */}

              <div className="contents">
                <h1 className="heading">Post Admission Services</h1>
                <p className="para">
                  Beyond admission, we continue to support you with a range of
                  post-admission services to ensure your success and
                  satisfaction throughout your educational adventure. A. Student
                  Mentor Team Support. B. Online Learning Assistance. C.
                  GoCollege Placement and Internship Support. D. Study Material,
                  Solved Papers and Supportive Notes. E.Peers Social Network
                  Community. F. Examination/Convocation/Degree Process. G.
                  Student Engagement Activities.
                </p>
              </div>
              <div className="img-div ">
                <img
                  className="PostAdmissionServices-img"
                  src={PostAdmissionServices}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="boxs">
          <div className="box">
            <div className="box-1">
              <span>
                {" "}
                <AiOutlineSafety />{" "}
              </span>
              <p>
                {" "}
                India's Only Portal with Need Based Counseling <br />
                Turn on screen reader support
              </p>
            </div>
          </div>
          <div className="box">
            <div className="box-1">
              <span>
                {" "}
                <AiFillBank />{" "}
              </span>

              <p> Only UGC-DEB Approved Universities Listed</p>
            </div>
          </div>
          <div className="box">
            <div className="box-1">
              <span>
                {" "}
                <AiOutlineSafety />{" "}
              </span>
              <p> One Stop Solution For Online Or Distance Education</p>
            </div>
          </div>
        </div>
        <div className="Trust-main">
          <h1>Why to Trust Get Online College</h1>
          <p>
            Our commitment to quality education and best campuses according to
            your need and requirements ensures your trust is well-placed in our
            hands.
          </p>
          <div className="Trust-box">
            <div className="Trust-box-1">
              <span>
                <BiMapPin />
              </span>

              <h1>Your Goal</h1>
            </div>
            <div className="Trust-box-1">
              <span>
                <FaHandsHelping />
              </span>
              <h1>Our Commitment</h1>
            </div>
            <div className="Trust-box-1">
              <span>
                <BiShieldAlt2 />
              </span>
              <h1>Trusted Campus.</h1>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
*{
     margin: 0;
     padding: 0;
}
.row-1{
     margin: auto;
     max-width: 90%;
}
.logo img{
     width: 500px;
}
.main{
     display: flex;
     align-items: center;
}
.row2{
     /* max-width: 85%; */
     margin: auto;
}
.main-heading{
}
.main-heading > h1 {
     text-align: left;
     margin: 20px 0;
     font-weight: 100;
     font-size: 44px;
}
.main-heading > p ,.para{
     text-align: left;
     /* letter-spacing: 1px; */
     font-size: 20px;

}
.contents{
     padding-top: 60px;
     align-items: center;
}
.second-p{
     margin: 20px 0;
}
.main-grid{
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 90px;
    row-gap: 60px;
}

.main-grid img{
     width: 250px;
     align-items: center;
}
.heading {
     font-weight: 100;
     font-size: 55px;
}

.img-div{
     display: flex;
     align-items: center;
     justify-content: center;
}
.PostAdmissionServices-img, .UserFriendlyLnterface-img{
     width: 380px !important;
}
.boxs{
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  color: #fff;
}
.box-1{
  display: flex;
  justify-content: center;
  align-items: center;
}
span{
  font-size: 40px;
}
.box{
  width: 33%;
  text-align: center;
  padding: 30px 10px;
  background-color: #4542f5;
  margin: 0 10px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 14px;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}
.Trust-main{
 margin-top: 100px;
}
.Trust-main h1 ,p{
text-align: center;
}
.Trust-box{
  display: flex;
  justify-content:  space-evenly;
  margin-top: 30px;
}
.Trust-box-1{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #4542f5;
  font-size: 20px;
}



@media (max-width: 768px)
 {
  .main{
     display: flex;
     flex-direction: column;
     align-items: center;
}
.logo img{
     width: 300px;
}
.main-grid{
    display: grid;
    grid-template-columns: 100%;
    margin-top: 90px;
    row-gap: 60px;
}
.main-grid img{
     width: 150px;
     align-items: center;
}
.contents{
     padding-top: 10px;
     align-items: center;
}
.heading {
     font-weight: 100;
     font-size: 35px;
}
.PostAdmissionServices-img, .UserFriendlyLnterface-img{
     width: 280px !important;
}
.boxs{
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  margin-top: 100px;
  color: #fff;
}
.box{
  width: 100%;
  font-weight: 800;
  font-size: 20px;
  padding: 15px 0;
  margin: 10px 0;
}
span{
  font-size: 40px;
}
 }


 @media (max-width: 425px)
 {
  .main{
     display: flex;
     flex-direction: column;
     align-items: center;
}
.logo img{
     width: 300px;
}
.main-grid{
    display: grid;
    grid-template-columns: 100%;
    margin-top: 90px;
    row-gap: 60px;
}
.main-grid img{
     width: 150px;
     align-items: center;
}
.contents{
     padding-top: 10px;
     align-items: center;
}
.heading {
     font-weight: 100;
     font-size: 35px;
}
.PostAdmissionServices-img, .UserFriendlyLnterface-img{
     width: 280px !important;
}
.boxs{
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  margin-top: 100px;
  color: #fff;
}
.box{
  width: 100%;
  font-weight: 800;
  font-size: 14px;
  padding: 15px 0;
  margin: 10px 0;
}
span{
  font-size: 30px;
}
 }

@media (max-width: 375px)
 {
  .main{
     display: flex;
     flex-direction: column;
     align-items: center;
}
.logo img{
     width: 300px;
}
.main-grid{
    display: grid;
    grid-template-columns: 100%;
    margin-top: 90px;
    row-gap: 60px;
}
.main-grid img{
     width: 150px;
     align-items: center;
}
.contents{
     padding-top: 10px;
     align-items: center;
}
.heading {
     font-weight: 100;
     font-size: 35px;
}
.PostAdmissionServices-img, .UserFriendlyLnterface-img{
     width: 280px !important;
}
.boxs{
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  margin-top: 100px;
  color: #fff;
}
.box{
  width: 100%;
  font-weight: 800;
  font-size: 10px;
  padding: 15px 0;
  margin: 10px 0;
}
span{
  font-size: 20px;
}
 }


 @media (max-width: 320px)
 {
  .main{
     display: flex;
     flex-direction: column;
     align-items: center;
}
.logo img{
     width: 300px;
}
.main-grid{
    display: grid;
    grid-template-columns: 100%;
    margin-top: 90px;
    row-gap: 60px;
}
.main-grid img{
     width: 150px;
     align-items: center;
}
.contents{
     padding-top: 10px;
     align-items: center;
}
.heading {
     font-weight: 100;
     font-size: 35px;
}
.PostAdmissionServices-img, .UserFriendlyLnterface-img{
     width: 280px !important;
}
.boxs{
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  margin-top: 100px;
  color: #fff;
}
.box{
  width: 100%;
  font-weight: 800;
  font-size: 10px;
  padding: 15px 0;
  margin: 10px 0;
}
span{
  font-size: 20px;
}
 }

`;
