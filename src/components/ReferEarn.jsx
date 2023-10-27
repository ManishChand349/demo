import React from "react";
import styled from "styled-components";
import bg from "../assets/ReferEarn/banner_bg.png";
import Time from "../assets/ReferEarn/Time.png";
import Boss from "../assets/ReferEarn/Boss.png";
import Help from "../assets/ReferEarn/Help.png";
import Income from "../assets/ReferEarn/Income.png";

export const ReferEarn = () => {
  return (
    <>
      <Main>
      {/* Banner Section starting */}
        <section className="banner">
          <div className="left-div">
            <h1 className="main-heading">
              GoOnlineCollege <span className="Partners-blue">Partners</span>
            </h1>
            <p className="main-para">
              One Stop point for all Faculties / Consultants / mentors to
              suggest best Campus to <br /> your Learers as per their need{" "}
            </p>
            <button className="btn-1">Referal & Earn</button>
          </div>
          <div className="right-div"></div>
        </section>
      {/* Banner Section End */}

      {/* Partner Section starting */}
        <section className="partner-section">
          <div>
            <h1 className="partner-heading">
              Why you should join
              <span className="Partners-blue"> GoOnline College </span>
              as <span className="Partners-blue">Partner</span> Partner
            </h1>
            <p className="partner-para">Become a member of get Online College. Our Platform hosts a a diverse range of courses and collaborations with universities. <br />
             We pride ourselves on our robust structure, guaranteeing swift and reliable counseling seeions.  Embrace the future of learning with us, <br /> where opportunities are limitless and knowledge knows no boundaries. </p>
          </div>

          <div className="boxs-grid">
            <div className="box-1">
            <h1 className="heading" >Flexible Work Timings</h1>

                <span className="icon-1">
                  <img  src={Time} alt="" />
                </span>

            </div>
            <div className="box-1">
            <h1>Be Your Own Boss</h1>

            <div className=" circle">
            <span className="icon-2">
                  <img  src={Boss} alt="" />
                </span>
                </div>
            </div>
            <div className="box-1">
            <h1>Opportunitiey to Help Thousands of Families</h1>

            <div className=" circle">
            <span className="icon-3">
                  <img  src={Help} alt="" />
                </span>
                </div>
            </div>
            <div className="box-1">
            <h1>Unlimited Income Potential</h1>

            <div className=" circle">
            <span className="icon-4">
                  <img  src={Income} alt="" />
                </span>
                </div>
            </div>


          </div>
        </section>
      {/* Partner Section End */}
      
      {/* Eligible Section Starting */}
          <section>
          <div className="Eligible-div">
              <h1 className="Eligible-heading">Eligible Partner for <span className="Eligible-blue">GoOnlineCollege</span>  Network</h1>
              <p className="Eligible-para">
                If you are a faculty member of a K-12 School, College, Coaching institute, of an HR Professional in a Corporate organization, <br /> you can avail this golden opportunity to become an authorized member of GoOnlineCollege 
              </p>
              <div className="Eligible-grid">
                <div className="grid-box">
                  <h1>Education Consultants</h1>
                </div>
                <div className="grid-box">
                  <h1>Coaching Institutes</h1>
                </div>
                <div className="grid-box">
                  <h1>K12 Faculties</h1>
                </div>
                <div className="grid-box">
                  <h1>UG College Faculties</h1>
                </div>
                <div className="grid-box">
                  <h1>LIC Agents</h1>
                </div>
                <div className="grid-box">
                  <h1>Home Markers/Students</h1>
                </div>
                <div className="grid-box">
                  <h1>Immigration Consultar</h1>
                </div>
                <div className="grid-box">
                  <h1>HR of Corporates</h1>
                </div>
              </div>
          </div>

          </section>
      {/* Eligible Section End */}

      </Main>
    </>
  );
};
const Main = styled.div`
*{
  padding: 0;
  margin: 0;
}
    .banner{
      background-image: url(${bg});
      padding: 135px 0;
      color: #fff;
      width: 100%;
    }
    .left-div{
      margin-left: 40px;
    }
    .Partners-blue, .Eligible-blue{
      color: blue;
    }
    .main-heading{
      font-size: 2.7rem;
      /* padding: 20px 0; */
    }
    .main-para{
      font-size: 1.2rem;
      margin: 15px 0;
    }
    .btn-1{
      margin-top: 20px;
      padding: 13px 15px;
      border-radius: 20px;
      border: none;
      font-weight: 900;
      color: #fff;
      background-color: blue;
      cursor: pointer;
    }
    //2nd section Css starting
    .partner-heading, .Eligible-heading {
      text-align: center;
      margin-top: 40px;
      font-size: 2.3rem;
    }
    .partner-para, .Eligible-para{
      text-align: center;
      font-size: 1.3rem;
      margin-top: 30px;
      font-weight: 300;
    }
    .boxs-grid{
      max-width: 90%;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-top: 40px;
      margin-bottom: 100px;
    }
    .box-1{
      background-color: #B6FFFA;
      border-radius: 8px;
    }
    .box-1 > h1{
      margin-top: 60px;
      text-align: center;
      /* color: blue; */
    }
    /* .heading{
      margin-top: 50px;
    } */
    .circle{
      /* background-color: #fff; */
      border-radius: 50%;
      position: relative;
      display: inline;
    }
    .icon-1 , .icon-2{
      position: relative;
      top: -87px;
      left: 115px;
    }
    .icon-3{
      position: relative;
      top: -116px;
      left: 115px;
    }
    .icon-4{
      position: relative;
      top: -87px;
      left: 115px;
    }
      .Eligible-div{
        max-width: 90%;
      margin: auto;
      }
      .Eligible-grid{
        display: grid;
        grid-template-columns: repeat(4, 1fr) ;
        margin-top: 40px;
        padding: 30px;
      }
  `;
