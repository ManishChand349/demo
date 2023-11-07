import React from "react";
import styled from "styled-components";
import BCA from "../assets/OnlineBca-img/online-bca-program.webp";
import Education from "../assets/OnlineBca-img/who-should-pursue-bca-distance-education-course.webp";

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

          <div className="row-2">
               <div className="top-div">
                  <div className="UC-div">
                  <p>Universities</p>
                  <p>15</p>
                  </div>
                  <div  className="UC-div">
                  <p >Duration</p>
                  <p>3 Years</p>
                  </div>
                  <div  className="UC-div">
                  <p className="Eligi-para">Eligibiliy</p>
                  <p>12th Pass out</p>
                  <div>
                    <p>info</p>
                  </div>
                  </div>
               </div>
               <p className="para first-para">
               In the digital age, where technology is everywhere, getting an Online BCA (Bachelor of Computer Application) has become a great way for people excited about computers and technology to change their lives. The program is made to be open and easy to use so that students can fully know computer science and its many uses.
               </p>
               <p className="para">
               UGC-DEB has approved online BCA and has the same value as a normal BCA. One of the best things about online BCA programs is their flexibility. These programs consider learners' many tasks, such as a full-time job, family obligations, or other duties. Online learning lets students build their study plans around what they already do to keep a good mix between work, school, and life.
               </p>
               <h1 className="second-heading">Why Online BCA?</h1>
               <p className="para-2">Online BCA is delivered completely online and focuses on learning through interaction. Virtual classes, chat platforms, and group projects help students and teachers from different parts of the world work together. This variety of points of view makes learning more interesting and gives a taste of how tech is used worldwide.</p>
               <div>
                <img className="education-img" src={Education} alt="" />
               </div>
               <p className="para-2">Online BCA programs build their courses around what the tech industry needs. This ensures that graduates have the skills and information useful in an industry that is always changing. From computer languages like Java and Python to building websites, making mobile apps, and managing data, students learn skills that can be used immediately in the real world.</p>
               <p className="para-2">Students automatically learn digital knowledge and technical skills by pursuing an Online BCA program. Using online learning platforms, working with virtual teamwork tools, and solving tech problems have become second nature. Moreover, the program is a great way to meet new people. Students work with their peers, teachers, and workers from many fields. With a bigger network, you can work together, get job leads, and learn about a wider range of views in the tech field.</p>
               <h1 className="second-heading">Who Should Pursue Online BCA?</h1>
               <p className="para-2">Online BCA program is available to many people who want to learn computer science and start a job in the tech industry, which is always changing. The following groups should consider getting an online BCA:</p>
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
     margin-bottom: 100px;
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
   .top-div{
    display: flex;
    justify-content: space-around;
    border:0.131rem solid #0056d2;
    /* align-items: center; */
    position: relative;
    top: -49px;
    left: 43px;
    width: 90%;
    background-color: #f0f8ff;
    padding: 10px;
    border-radius: 8px;
   }
   
   .UC-div p{
      text-align: center;
      font-size: 1rem;
   }
   .Eligi-para{
    padding-top: 1px;
   }
   .row-2{
    border: 1px solid #A5ABB0;
    padding: 2px 24px;
    margin-top: 50px;
    width: 81%;
    border-radius: 8px;
   }
   .para{
    margin-bottom: 18px;
    color: #3C3F43;
   }
   .second-heading{
    font-size: 1.6rem;
    color: #212529;
   }
   .para-2{
    color: #3C3F43;
    margin-bottom: 20px;
   }
   .education-img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-top: 20px;
  margin-bottom: 20px;
   }
`;
