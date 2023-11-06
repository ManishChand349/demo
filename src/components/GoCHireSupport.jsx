import React from "react";
import styled from "styled-components";
import banner from "../assets/GoCHire-img/banner.png";
import img1 from "../assets/GoCHire-img/1.jpg";
import img2 from "../assets/GoCHire-img/2.jpg";
import img3 from "../assets/GoCHire-img/3.jpg";
import img4 from "../assets/GoCHire-img/4.jpg";
import { CiMail, CiLocationOn } from "react-icons/ci";

export const GoCHireSupport = () => {
  return (
    <>
      <Main>
        <div className="banner">
          <h1 className="main-heading">
            Hello Corporates. Get the Best Learners.... <br />
            Elevate your Team with Top Talent
          </h1>
        </div>
        <section className="Why-hire">
          <h1 className="heading">Why you Should Hire Our Learn</h1>
          <div className="row">
            <div>
              <img className="img-1" src={img1} alt="" />
            </div>
            <div>
              <div className="box-1">
                <h1 className="second-heading">Diverse Backgrunds</h1>
                <p className="para">
                  {" "}
                  Our learners come from diverse background, offering a range of
                  experiences and viewpoints that can enrich your workplace
                  culture and problem-solving capabilites
                </p>
              </div>
              <h1 className="second-heading">Tech Savvy</h1>
              <p className="para">
                {" "}
                In today's digial age, our learners tend to be tech-savvy. They
                can help your organization stay current with technological
                advancements.
              </p>
            </div>
            <div>
              <img className="img-1" src={img2} alt="" />
            </div>
            <div>
              <img className="img-1" src={img3} alt="" />
            </div>
            <div>
              <div className="box-1">
                <h1 className="second-heading long-team-heading">
                  Long-Term Potential
                </h1>
                <p className="para">
                  {" "}
                  Many of our learners are looking for long-term career paths.
                  Investing in their development now can lead to committed,
                  loyal employees in the future.
                </p>
              </div>
              <h1 className="second-heading">Adaptability</h1>
              <p className="para">
                {" "}
                Learners are highly adapatable. they've been in an environment
                of continouns learning, making them quick to pick up new skills
                and adapt to changing work dynamics.
              </p>
              <h1 className="second-heading eagerness-heading">
                Eagerness to Grow
              </h1>
              <p className="para">
                {" "}
                Learners have a strong desire to grow and excel in their carees.
                they're motivated to prove themselves and contribute to your
                company's success.
              </p>
            </div>
            <div>
              <img className="img-1 img-4" src={img4} alt="" />
            </div>
          </div>
        </section>
        <section className="Contact-us-div">
          <div className="Contact-us">
            <div>
              <h1 className="contact-heading">
                Contact <span className="blue">Us</span>
              </h1>

              <hr className="line" />

              <p className="number">1233-456-5757</p>
              <p className="Contact-para">
                Want to know more? Speak With us get the ideal candidate that
                fits your requirement!
              </p>
              <div className="mail">
                <CiMail className="icon" />
                <a className="blue-3" href="">
                  {" "}
                  goccare@gocollege.com
                </a>
              </div>

              <div className="visit">
                <CiLocationOn className="icon" />
                <p className="blue-3">
                  Visit Us : <span>(10 AM to 7 PM)</span>
                </p>
              </div>
            </div>
            <div>
              <div className="form-div">
                <p>Full Name*</p>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
                <p>Company Email*</p>
                <input
                  type="text"
                  placeholder="Enter your Company email address"
                  required
                />
                <p>Mobile Number*</p>
                <input
                  type="text"
                  placeholder="Enter Your mobile number"
                  required
                />
                <p>Looking For?*</p>
                <input
                  type="text"
                  placeholder="Enter your required designatin"
                  required
                />
                <div>
                  <button className="submit-btn">Submit</button>
                </div>
              </div>
            </div>
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
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    /* overflow-x: hidden; */
  }
  .banner{
    background-image: url(${banner});
    background-size: 100%;
    background-Repeat: no-repeat;
  }
  .main-heading{
    padding: 120px 30px;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
  }
  //hire section
  .heading{
    text-align: center;
    font-size: 2.5rem;
    margin: 5px 0;
    padding: 20px 2px;
  }

  .Why-hire{
    background-color: #F7F7F7;
    padding-bottom: 50px;
    margin-bottom: 8px;
  }
  .row{
    display: grid;
    grid-template-columns: 33% 33% 33% ;

  }
  .img-1{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
  .img-4{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
  .second-heading{
    color: #1043E9;
    text-align: center;
    font-size: 3rem;
  }
  .para{
    font-size: 1.3rem;
    text-align: center;
  }
  .box-1{
    margin-top: 30px;
    margin-bottom: 60px;
  }
  .eagerness-heading{
    margin-top: 60px;
  }

  // Contact section
  .Contact-us-div{
    background-color: #F0F8FF;
  }
  .Contact-us{
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 75%;
    margin: auto;
    gap: 10px;

  }
  .contact-heading{
    font-weight: 550;
    font-size: 2rem;
    margin-top: 100px;
  }
  .blue{
    color: blue;
  }
  
  .line{
    background-color: blue;
    height: 2px;
    border: none;
    width: 200px;
    margin-top: 10px;
  }
  .number{
    color: red;
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 29px;
  }
  .Contact-para{
    font-size: 1.6rem;
    margin-top: 20px;
  }
  .blue-3 {
    color: #2192FF;
    font-weight: 400;
  }
  .icon{
    margin-right: 10px;
    color: #2192FF;
    font-size: 1.2rem;
  }
  .mail , .visit{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .visit{
    margin-top: 10px;

  }
  .form-div{
    background-color: #fff;
    border: 0.1rem solid ;
    border-radius: 12px;
    border: none;
    padding: 15px;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: 8px 8px 5px #888888,  -8px -5px 5px #888888;
  }
  .form-div input {
   font-size: 1.1rem;
   width: 100%;
   padding: 0.345rem ;
   margin-bottom: 10px;
   margin-top: 10px;
   border-radius: 8px;
   border: 1px solid #ced4da;
  }
  .submit-btn{
    width: 100%;
    background: aliceblue;
    color: #0056d2;
    border: dotted 1px #0056d2;
    box-shadow: none;
    padding: 10px;
    border-radius: 12px;
    margin-top: 20px;
    font-size: 1rem;
    font-weight: bold;
  }
  .submit-btn:hover{
    background: #0056d2;
    color: #fff;
    cursor: pointer;
  }

  ///for L mobile
  @media (max-width : 425px){
    .main-heading {
    padding: 20px 5px;
    font-size:0.7rem;
    font-weight: 700;
    color: #fff;
}
     .row{
    display: grid;
    grid-template-columns: 100%;
    padding: 0 20px;
    
  }
  
  .heading{
    padding: 10px 20px;
    font-size: 1.6rem;
  }
  .second-heading{
    color: #1043E9;
    text-align: center;
    font-size: 1.3rem;
  }
  .para{
    font-size: 0.9rem;
    text-align: center;
  }
  .img-1{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
  .img-4{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
  .Contact-us{
    display: grid;
    grid-template-columns: 100%;
    max-width: 75%;
    margin: auto;
    gap: 10px;

  }
  .contact-heading {
    font-weight: 550;
    font-size: 1.5rem;
    margin-top: 25px;
    text-align: center;
}
.eagerness-heading {
    margin-top: 55px;
}
.line {
    background-color: blue;
    height: 2px;
    border: none;
    width: 230px;
    margin-top: 10px ;
    margin-left: 35px;
}
.number {
    color: red;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 29px;
    text-align: center;
}

.Contact-para {
    font-size: 1.1rem;
    margin-top: 20px;
    text-align: center;
}
.form-div input {
    font-size: 0.7rem;
  }
.form-div p {
    font-size: 0.8rem;
  }
  

  }
  // for M mobile 
  @media (max-width : 375px){
    .main-heading {
    padding: 20px 5px;
    font-size:0.6rem;
    font-weight: 700;
    color: #fff;
}
     .row{
    display: grid;
    grid-template-columns: 100%;
    padding: 0 20px;
    
  }
  
  .heading{
    padding: 10px 20px;
    font-size: 1.4rem;
  }
  .second-heading{
    color: #1043E9;
    text-align: center;
    font-size: 1rem;
  }
  .para{
    font-size: 0.6rem;
    text-align: center;
  }
  .img-1{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
  .img-4{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
  .Contact-us{
    display: grid;
    grid-template-columns: 100%;
    max-width: 75%;
    margin: auto;
    gap: 10px;

  }
  .contact-heading {
    font-weight: 550;
    font-size: 1.5rem;
    margin-top: 25px;
    text-align: center;
}
.eagerness-heading {
    margin-top: 55px;
}
.line {
    background-color: blue;
    height: 2px;
    border: none;
    width: 230px;
    margin-top: 10px;
    margin-left: 24px;
}
.number {
    color: red;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 29px;
    text-align: center;
}

.Contact-para {
    font-size: 1.1rem;
    margin-top: 20px;
    text-align: center;
}
.form-div input {
    font-size: 0.7rem;
  }
.form-div p {
    font-size: 0.8rem;
  }
  

  }
// for S mobile
  @media (max-width : 320px){
    .main-heading {
    padding: 20px 5px;
    font-size:0.6rem;
    font-weight: 700;
    color: #fff;
}
     .row{
    display: grid;
    grid-template-columns: 100%;
    padding: 0 20px;
    
  }
  
  .heading{
    padding: 10px 20px;
    font-size: 1.4rem;
  }
  .second-heading{
    color: #1043E9;
    text-align: center;
    font-size: 1rem;
  }
  .para{
    font-size: 0.6rem;
    text-align: center;
  }
  .img-1{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
  .img-4{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
  .Contact-us{
    display: grid;
    grid-template-columns: 100%;
    max-width: 75%;
    margin: auto;
    gap: 10px;

  }
  .contact-heading {
    font-weight: 550;
    font-size: 1.5rem;
    margin-top: 25px;
    text-align: center;
}
.eagerness-heading {
    margin-top: 55px;
}
.line {
    background-color: blue;
    height: 2px;
    border: none;
    width: 230px;
    margin-top: 10px;
}
.number {
    color: red;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 29px;
    text-align: center;
}

.Contact-para {
    font-size: 1.1rem;
    margin-top: 20px;
    text-align: center;
}
.form-div input {
    font-size: 0.7rem;
  }
.form-div p {
    font-size: 0.8rem;
  }
  

  }
  `;
