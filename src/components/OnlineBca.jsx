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
              <div className="media-div">
               <h4 className="watch-video">Watch Video</h4>
               <h4>Listen Podcast</h4>
              </div>
            </div>
          </div>

          <div>
               <div className="top-div">

               </div>
               <p className="para">
               In the digital age, where technology is everywhere, getting an Online BCA (Bachelor of Computer Application) has become a great way for people excited about computers and technology to change their lives. The program is made to be open and easy to use so that students can fully know computer science and its many uses.
               </p>
               <p>
               UGC-DEB has approved online BCA and has the same value as a normal BCA. One of the best things about online BCA programs is their flexibility. These programs consider learners' many tasks, such as a full-time job, family obligations, or other duties. Online learning lets students build their study plans around what they already do to keep a good mix between work, school, and life.
               </p>
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
     border-radius: 8px;
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
   .media-div{
     display: flex;
     margin-top: 30px;
   }
   .watch-video{
     margin-right: 135px;
   }
`;
