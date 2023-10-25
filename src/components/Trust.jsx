import React from "react";
import styled from "styled-components";
import GocollegeSeal from "../assets/Trust-img/GocollegeSeal.png";
import AdmissionProcess from "../assets/Trust-img/AdmissionProcess.png";
import FinancialTransperancy from "../assets/Trust-img/FinancialTransparency.jpeg";
import RecognisedPremiumCampuses from "../assets/Trust-img/RecognisedPremiumCampuses.webp";
import UserFriendlyLnterface from "../assets/Trust-img/UserFriendlyLnterface.jpg";
import PostAdmissionServices from "../assets/Trust-img/PostAdmissionServices.png";
import { AiFillBank, AiOutlineSafety } from "react-icons/ai";
import {
  BiShieldAlt2,
  BiCheckShield,
  BiRupee,
  BiMapPin,
  BiHappyHeartEyes,
  BiSolidBank,
} from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";

export const Trust = () => {
  return (
    <Main>
      <div className="row-1">
        <div className="main">
          <div className="main-heading">
            <h1 className="main-heading-h1"> Why you Should Choose Us</h1>
            <p>
              Discover your path to success with GetOnlineCollege, where we
              bring reputable institutions to your fingertips, ensuring a
              seamless journey towards an accredited online degree. Trust in our
              commitment to quality education and personalized support for a
              brighter academic future.
            </p>

          </div>
        </div>
       

        <div>
          <div className="row2">
            <div className="main-grid">
              {/* 1st Unbiased Admission Process  */}
              <div className="contents">
              <span className="numbering">A</span>
                <h1 className="heading">Unbiased Admission Process</h1>
                <p className="para">
                  We believe in giving you college options based on your needs
                  and location, ensuring a fair and impartial selection process.
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
              <span className="numbering">B</span>
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
              <span className="numbering">C</span>
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
              <span className="numbering">D</span>

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
              <span className="numbering">E</span>

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
          <h1 className="Trust-main-heading">
            Why to Trust Get Online College
          </h1>
          <p>Trusted Campus for Your Ideal Degree</p>
          <div className="seal-trust-box">
        <h2 className="Punch-line">Our commitment to quality education and best campuses according to your need and requirements ensures your trust is well-placed in our hands.
</h2>
     <img className="img-seal" src={GocollegeSeal} alt="" />
        </div>
          <div className="row-2">
            <div className="col">
              <span className="icon">
                <BiCheckShield />
              </span>
              <h1 className="heading-2"> Secured</h1>
              {/* <p>
                We respect your privacy i.e we <br />
                do not share or sell your personal information
              </p> */}
            </div>
            <div className="col">
              <span className="icon">
                <BiRupee />
              </span>
              <h1 className="heading-2">Pay Directly to the University</h1>
              {/* <p>
                We guide you, but your <br /> destination is the right
                university <br /> so pay directly to the university
              </p> */}
            </div>
            <div className="col">
              <span className="icon">
                <BiHappyHeartEyes />
              </span>
              <h1 className="heading-2">Easy to Use</h1>
              {/* <p>
                Hassle free and user friendly <br /> interface with AI-powered{" "}
                <br />
                features.
              </p> */}
            </div>
            <div className="col">
              <span className="icon">
                <BiSolidBank />
              </span>
              <h1 className="heading-2">Seal of Trust Turn </h1>
              {/* <p>
                Information provided by us is <br /> authentic and verified by
                the <br />
                listed Universities.
              </p> */}
            </div>
            <div className="col">
              <span className="icon">
                <BiShieldAlt2 />
              </span>
              <h1 className="heading-2">Trusted Campus </h1>
              {/* <p>
                Information provided by us is <br /> authentic and verified by
                the <br />
                listed Universities.
              </p> */}
            </div>
            <div className="col">
              <span className="icon">
                <FaHandsHelping />
              </span>
              <h1 className="heading-2">Our Commitment </h1>
              {/* <p>
                Information provided by us is <br /> authentic and verified by
                the <br />
                listed Universities.
              </p> */}
            </div>
            <div className="col">
              <span className="icon">
                <BiMapPin />
              </span>
              <h1 className="heading-2">Your Goal </h1>
              {/* <p>
                Information provided by us is <br /> authentic and verified by
                the <br />
                listed Universities.
              </p> */}
            </div>
          </div>

          {/* Seal of Trust */}
          <div className="Box-know-more">
            <div>
              <p className="know-more-main-heading" >Know More</p>
            </div>
            <div>
              <h3 className="Box-know-more-heading">Key Components before suggesting any campus to students .</h3>
              <ul className="points-li">
                <li>
                  Apparovals of the universities( UGC-DEB, NAAC,AICTE and NIRF )
                </li>
                <li>LMS of the university</li>
                <li>Placement Support provided</li>
                <li>Faculty and its recruitment process</li>
                <li>Affordability and EMI options</li>
                <li>Alumni Connect and tie up with top brands</li>
              </ul>
            </div>
            <div >
              <h3 className="Box-know-more-heading">What Sets us Apart</h3>
              <ul className="points-li">
                <li>
                  We offer unbiased guidance so that you can select the right
                  online university for you according to your needs.
                </li>
                <li>
                  Our compare feature allows you to make more informed decisions
                  by looking at all the information, pros and cons of top
                  universities, within s
                </li>
                <li>
                  To make your journey hassle free, we have also introduced an
                  AI-based feature “suggest me a university” which helps you to
                  select the right university according to your specific needs.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="Box-know-more-heading">Benefits of Online Education s.</h3>
              <ul className="points-li">
                <li>
                  Helps you keep up with the world by giving you a flexible
                  learning environment.
                </li>
                <li>More convenient and affordable.</li>
                <li>Gives access to recorded lectures and LMS.</li>
                <li>Guest lectures with industry experts.</li>
                <li>
                  Opportunity and time flexibility to upskill and reskill.
                </li>
                <li>Suitable for working professionals.</li>
              </ul>
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
.main-heading-h1{
  color: #000;
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
     text-align: center;
     margin: 20px 0;
     font-weight: 100;
     font-size: 44px;
}
.main-heading ,.para{
     text-align: left;
     /* letter-spacing: 1px; */
     font-size: 20px;

}
.Line-P{
  color: blue;
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
    row-gap: 30px;
}

.main-grid img{
     width: 197px;
     align-items: center;
}
.heading {
     font-weight: 100;
     font-size: 35px;
     color: #000;
}

.img-div{
     display: flex;
     align-items: center;
     justify-content: center;
}
.PostAdmissionServices-img, .UserFriendlyLnterface-img{
     width: 280px !important;
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
 margin-top: 70px;
}
.Trust-main-heading{
  font-size: 39px;
  color: #000;
}
.Trust-main p{
  font-size: 20px;
  margin-top: 10px;
}
.Trust-main h1 ,p{
text-align: center;
}
.Trust-box{
  display: grid;
  grid-template-columns: 33% 33% 33%;
  column-gap: 10px;
  margin-top: 30px;

}
.Trust-box-1{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
  border-radius : 10px;
  font-size: 13px;
  background-color: #4542f5;

}

.Trust-box-1 span , h1{
  color: #fff;
}
.row-2{
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin-top: 40px ;
  margin-bottom: 70px;
  column-gap: 10px;
}
.heading-2{
  color: #000;
  font-size: 20px;
}
.col{
  border-radius: 10px;
  padding: 20px;
  background-color: #FFF6F6;
  border-bottom: solid 2px #4542f5;
}
.col p{
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
}
.icon{
  display: flex;
  justify-content: center;
  color: #4542f5;
  font-size: 66px;
  margin-bottom: 10px;
}
.Box-know-more{
  border: 1px solid #00A9FF;
  padding: 20px;
  border-radius: 5px;
}
.Box-know-more-heading{
  margin: 20px 0 15px 0;
  font-weight: 900;
  font-size: 20px;
}
.points-li{
  margin-left: 40px;
  font-size: 18px;
}
.numbering{
  border-radius: 50%;
  /* background-color: #c5c8fc; */
  font-size: 15px;
  /* padding: 6px; */
  /* margin-bottom: 10px; */
}
.seal-trust-box{
  display: grid;
  grid-template-columns: 50% 50%;
}
.img-seal{
  width: 280px;
  margin-left: 190px;
}
.Punch-line{
  margin-top: 100px;
  text-align: center;
  font-weight: 400;
}
.know-more-main-heading{
  background-color: #4542f5;
  display: inline;
  position: relative;
  top: -16px;
  left: 562px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #fff;
  padding: 4px 20px;

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
.row-2 {
  display: grid;
  grid-template-columns: 50% 50%;
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
.Trust-main h1{
    text-align: center;
    font-size: 20px;
}
.Trust-main p {
    font-size: 16px;
    margin-top: 10px;
}
.Trust-box {
    display: grid;
    grid-template-columns: 100%;
  row-gap:10px;}
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
.row-2 {
    display: grid;
    grid-template-columns: 100%;
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
.row-2 {
    display: grid;
    grid-template-columns: 100%;
}
 }


`;
