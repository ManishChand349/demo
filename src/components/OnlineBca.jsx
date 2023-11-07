import React from "react";
import styled from "styled-components";
import BCA from "../assets/OnlineBca-img/online-bca-program.webp";

export const OnlineBca = () => {
  return (
    <>
      <Main>
        <div className="row">
          <div className="img-div">
            <img className="bca-img" src={BCA} alt="" />
            <div className="para-div">
              <p className="para-updated">UPDATED AT : NOVEMBER 7,2023</p>
              <h1 className="main-heading">Online BCA Program</h1>
              <p className="main-para">
                Online BCA is a 3 years comprehensive bachelor's degree that
                covers a wide range of topics, from the basics of computer
                science to advanced code languages, databases, software
                engineering, and more. This all-around program ensures that
                students have a strong base in many different parts of computer
                applications and gives them the skills they need for many jobs
                in the tech field.
              </p>
            </div>
          </div>
        </div>
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
   .row{
     max-width: 70%;
     margin: auto;
     padding-left: 200px;
   }
  .bca-img{
     width: 350px;
     border-radius: 7px;
}
.main-heading{
     font-size: 1.5rem;
     color: #212529;
     margin-bottom: 17px;
}
.img-div{
     display: flex;
     background-color: #F8F9FA;
     width: 81%;
     padding-right: 50px;
   }
   .para-div{
     padding-top: 35px;
     margin-left: 30px;
   }
   .para-updated{
     font-size: 0.7rem;
     font-weight: 500;
     color: #A5ABB0;
}
.main-para{
        color: #6D7073;
        font-size: 1rem;

   }
`;
