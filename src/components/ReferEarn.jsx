import React from "react";
import styled from "styled-components";
import bg from "../assets/ReferEarn/banner_bg.png";

export const ReferEarn = () => {
  return (
    <>
      <Main>
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

        <section className="partner-section">
          <div>
            <h1 className="partner-heading">
              Why you should join 
              <span className="Partners-blue"> GoOnlineCollege </span>
              as <span className="Partners-blue">Partner</span> Partner
            </h1>
            <p className="partner-para">Become a member of get Online College. Our Platform hosts a a diverse range of courses and collaborations with universities. <br />
             We pride ourselves on our robust structure, guaranteeing swift and reliable counseling seeions.  Embrace the future of learning with us, <br /> where opportunities are limitless and knowledge knows no boundaries. </p>
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
}
    .banner{
      background-image: url(${bg});
      padding: 135px 0;
      color: #fff;
    }
    .left-div{
      margin-left: 40px;
    }
    .Partners-blue{
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
    }
    //2nd section Css starting
    .partner-heading{
      text-align: center;
      margin-top: 40px;
      font-size: 2.3rem;
    }
    .partner-para{
      text-align: center;
      font-size: 1.3rem;
      margin-top: 30px;
    }
  `;
