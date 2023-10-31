import React from "react";
import styled from "styled-components";
import bg from "../assets/ReferEarn/banner_bg.png";
import Time from "../assets/ReferEarn/Time.png";
import Boss from "../assets/ReferEarn/Boss.png";
import Help from "../assets/ReferEarn/Help.png";
import Income from "../assets/ReferEarn/Income.png";
import EducationConsultants from "../assets/ReferEarn/Education-Consultants.png";
import Coaching from "../assets/ReferEarn/Coaching.png";
import K12Facilities from "../assets/ReferEarn/12KFacilities.png";
import Agent from "../assets/ReferEarn/Agent.png";
import HomeMaker from "../assets/ReferEarn/HomeMaker.png";
import UgCollege from "../assets/ReferEarn/UgCollege.png";
import HrCorporates from "../assets/ReferEarn/HrCorporates.png";
import ImmigrationConsultar from "../assets/ReferEarn/UgCollege.png";
import Amity from "../assets/ReferEarn/amity.webp";
import Dy from "../assets/ReferEarn/dy.webp";
import Hindu from "../assets/ReferEarn/hindu.webp";
import Lingayas from "../assets/ReferEarn/lingayas.webp";
import Lpu from "../assets/ReferEarn/lpu.webp";
import Manav from "../assets/ReferEarn/manav.webp";
import Manipal from "../assets/ReferEarn/manipal.webp";
import Svu from "../assets/ReferEarn/svu.webp";
import CU from "../assets/ReferEarn/cu.webp";

export const ReferEarn = () => {
  return (
    <>
      <Main>
        {/* Banner Section starting */}
        <section className="banner">
          <div className="left-div">
            <h1 className="main-heading">
              GoOnlineCollege <span className="Partners-bluee">Partners</span>
            </h1>
            <p className="main-para">
              One Stop point for all Faculties / Consultants / mentors to
              suggest best Campus to <br /> Your Learners as per their need{" "}
            </p>
            <button className="btn-1">Referal & Earn</button>
          </div>
          <div className="right-div">
            <div className="div-1">
              <img src={Amity} alt="" />
            </div>
            <div className="div-1">
              <img src={Dy} alt="" />
            </div>
            <div className="div-1">
              <img src={Hindu} alt="" />
            </div>
            <div className="div-1">
              <img src={Lingayas} alt="" />
            </div>
            <div className="div-1">
              <img src={Lpu} alt="" />
            </div>
            <div className="div-1">
              <img src={Manav} alt="" />
            </div>
            <div className="div-1">
              <img src={Manipal} alt="" />
            </div>
            <div className="div-1">
              <img src={Svu} alt="" />
            </div>
            <div className="div-1">
              <img src={CU} alt="" />
            </div>
          </div>
        </section>
        {/* Banner Section End */}

        {/* Partner Section starting */}
        <section className="partner-section">
          <div>
            <h1 className="partner-heading">
              Why you should join
              <span className="Partners-blue"> GoOnlineCollege </span>
              as <span className="Partners-blue">Partner</span>
            </h1>
            <p className="partner-para">
              Become a member of get Online College. Our Platform hosts a a
              diverse range of courses and collaborations with universities.{" "}
              <br />
              We pride ourselves on our robust structure, guaranteeing swift and
              reliable counseling seeions. Embrace the future of learning with
              us, <br /> where opportunities are limitless and knowledge knows
              no boundaries.{" "}
            </p>
          </div>

          <div className="boxs-grid">
            <div className="box-1">
              <span className="icon-1">
                <img src={Time} alt="" />
              </span>
              <h1 className="heading">Flexible Work Timings</h1>
            </div>
            <div className="box-1">
              <div className=" circle">
                <span className="icon-2">
                  <img src={Boss} alt="" />
                </span>
              </div>
              <h1>Be Your Own Boss</h1>
            </div>
            <div className="box-1">
              <div className=" circle">
                <span className="icon-3">
                  <img src={Help} alt="" />
                </span>
              </div>
              <h1>Opportunitiey to Help Thousands of Families</h1>
            </div>
            <div className="box-1">
              <div className=" circle">
                <span className="icon-4">
                  <img src={Income} alt="" />
                </span>
              </div>
              <h1>Unlimited Income Potential</h1>
            </div>
          </div>
        </section>
        {/* Partner Section End */}

        {/* Eligible Section Starting */}
        <section>
          <div className="Eligible-div">
            <h1 className="Eligible-heading">
              Eligible Partner for{" "}
              <span className="Eligible-blue">GoOnlineCollege</span> Network
            </h1>
            <p className="Eligible-para">
              If you are a faculty member of a K-12 School, College, Coaching
              institute, of an HR Professional in a Corporate organization,{" "}
              <br /> you can avail this golden opportunity to become an
              authorized member of GoOnlineCollege
            </p>
            <div className="Eligible-grid">
              <div className="grid-box">
                <img
                  className="Education-img"
                  src={EducationConsultants}
                  alt=""
                />
                <h1>Education Consultants</h1>
              </div>
              <div className="grid-box">
                <img src={Coaching} alt="" />
                <h1>Coaching Institutes</h1>
              </div>
              <div className="grid-box">
                <img src={K12Facilities} alt="" />

                <h1>K12 Faculties</h1>
              </div>

              <div className="grid-box">
                <img src={UgCollege} alt="" />

                <h1>UG College Faculties</h1>
              </div>
              <div className="grid-box">
                <img className="LIC-img" src={Agent} alt="" />

                <h1>LIC Agents</h1>
              </div>
              <div className="grid-box">
                <img src={HomeMaker} alt="" />

                <h1>Home Makers/Students</h1>
              </div>
              <div className="grid-box">
                <img src={ImmigrationConsultar} alt="" />

                <h1>Immigration Consultar</h1>
              </div>
              <div className="grid-box">
                <img className="HR-img" src={HrCorporates} alt="" />
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
  font-family: 'Poppins', sans-serif;
}
    .banner{
      display: flex;
      justify-content: space-between;
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
      font-size: 2.5rem;
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
    .right-div{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      position: absolute;
    right: 0;
    width: 37%;
    
    transform: translateY(-50%);
    overflow-x: hidden;
    }
    .div-1{
      background-color: #fff;
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
      align-content: end;
    }
    .box-1 > h1{
      margin-top: 30px;
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
      top: 34px;
      left: 169px;
    }
    .icon-3{
      position: relative;
      top: 34px;
      left: 169px;
    }
    .icon-4{
      position: relative;
      top: 34px;
      left: 169px;
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
        gap: 10px;
      }
      .grid-box{
        background-color: #B6FFFA;
        border-radius: 8px;
        text-align: center;
        padding: 20px 0 0 0;
      }
      .HR-img,.LIC-img,.Education-img{
        width: 66px;
      }
@media (max-width: 768px)
      {
        .boxs-grid {
    max-width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 100px;
}
.partner-heading, .Eligible-heading {
     
      font-size: 2rem;
    }
    .partner-para, .Eligible-para{
     
      font-size: 1.1rem;
     
    }
    .icon-1, .icon-2 {
    position: relative;
    top: 34px;
    left: 127px;
}
.icon-3 {
    position: relative;
    top: 34px;
    left: 136px;
}
.icon-4 {
    position: relative;
    top: 34px;
    left: 131px;
}

}        
@media (max-width: 425px)
      {
      .Eligible-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    padding: 30px;
    gap: 10px;
}
      
      .box-1>h1 {
    margin-top: 30px;
    text-align: center;
    font-size: 0.8rem;
}

.icon-1, .icon-2 {
    position: relative;
    top: 34px;
    left: 53px;
}
.icon-3 {
    position: relative;
    top: 34px;
    left: 56px;
}
 .icon-4 {
    position: relative;
    top: 34px;
    left: 58px;
}
.grid-box > h1 {
  font-size: 1rem;
  }
  .partner-heading, .Eligible-heading {
    
    font-size: 1.3rem;
}
.Eligible-para,.partner-para {
    
    font-size: 0.8rem;
   
}

}
@media (max-width: 375px) {
  .Eligible-grid {
    padding: 10px;
  }

}
@media (max-width : 320px) {
  .boxs-grid {
    margin-bottom: 20px;
  }
  .main-heading {
    font-size: 1.5rem;
}
  .partner-para {
    font-size: 0.6rem;
    margin-top: 14px;
}
.partner-heading, .Eligible-heading {
    font-size: 1.1rem;
}
.box-1>h1 {
    
    font-size: 0.7rem;
    margin-bottom: 3px;
    
}
.icon-1, .icon-2 {
    position: relative;
    top: 34px;
    left: 32px;
}
.icon-3 {
    position: relative;
    top: 34px;
    left: 36px;
}
.icon-4 {
    position: relative;
    top: 34px;
    left: 37px;
}
.Eligible-para {
    font-size: 0.6rem;
}
.Eligible-grid {
    padding: 1px;
    
}
.grid-box>h1 {
    font-size: 0.8rem;
}
}    
  `;
