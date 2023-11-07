import React from "react";
import styled from "styled-components";
import banner from "../assets/GoCHire-img/banner.png";
import img1 from "../assets/GoCHire-img/1.jpg";
import img2 from "../assets/GoCHire-img/2.jpg";
import img3 from "../assets/GoCHire-img/3.jpg";
import img4 from "../assets/GoCHire-img/4.jpg";
import amity from "../assets/GoCHire-img/amity.webp";
import cu from "../assets/GoCHire-img/cu.webp";
import lpu from "../assets/GoCHire-img/lpu.png";
import mm from "../assets/GoCHire-img/mm.png";
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
              <img className="img-1 img-3" src={img3} alt="" />
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
        <section className="Regitered-Campuses">
        <h1 className="Regitered-heading">Regitered  <span className="blue-3-uc"> Campuses </span> </h1>
            <div className="Regitered-row">
              <div className="box-2"><img className="img-2-uc" src={amity} alt="" /></div>
              <div className="box-2"><img className="img-2-uc" src={cu} alt="" /></div>
              <div className="box-2"><img className="img-2-uc" src={lpu} alt="" /></div>
              <div className="box-2"><img className="img-2-uc" src={mm} alt="" /></div>
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
    color: #002545;

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
  .Regitered-row{
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .Regitered-heading{
    text-align: center;
    font-size: 2.9rem;
    font-weight: 500;
    color: #002545;
    margin-top: 20px;
  }
  .blue-3-uc{
    color: blue;
  }
  .box-2{
      border: none;
      border-radius: 8px;
      box-shadow: 2px 4px 2px #888888,  -2px -2px 5px #888888;
      padding: 8px 14px;
      margin: 50px 0;
      cursor: pointer;
  }
  .img-2-uc{
    width: 130px;
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
    color: #002545;
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


  // For L Laptop
  @media (max-width : 1440px){
    .main-heading {
    padding: 92px 15px;
    font-size: 2.3rem;
    font-weight: 700;
    color: #fff;
}
.row{
    display: grid;
    grid-template-columns: 30% 30% 30%;
    padding: 0 40px;
    margin-left: 50px;
}
.heading{
    padding: 10px 20px;
    font-size: 2.7rem;
    color: #1043E9;
    text-align: center;
}
.second-heading{
    color: #1043E9;
    text-align: center;
    font-size: 1.7rem;
}
.para{
    font-size: 0.9rem;
    text-align: center;
}
.img-1{
    width: 450px;
}
  .img-4{
  width: 370px;
  margin-top: 60px;
  margin-left: 60px;
}
  .img-3{
  width: 490px;
  margin-top: 60px;
  margin-left: -10px;
}
.Contact-us{
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 90%;
    margin: auto;
    gap: 10px;
}
.contact-heading {
  font-weight: 550;
  font-size: 2rem;
  margin-top: 25px;
  /* text-align: center; */
}
.eagerness-heading {
  margin-top: 60px;
}
.line {
    width: 200px;
    margin-left: 0;
}
.number {
 font-size: 1.9rem;
 font-weight: 700;
 /* text-align: center; */
}
.Contact-para {
 font-size: 1.6rem;
 /* text-align: center; */
}
.form-div input {
  font-size: 1rem;
}
.form-div p {
  font-size: 1rem;
  margin-left: 5px;
}
.icon {
  margin-left: 0;
}
.blue-3 {
    color: #2192FF;
    font-weight: 400;
    font-size: 1.3rem;
}
  }
  // for laptop
  @media (max-width : 1024px){
    .main-heading {
    padding: 52px 15px;
    font-size: 1.9rem;
    font-weight: 700;
    color: #fff;
}
.row{
    display: grid;
    grid-template-columns: 30% 30% 30%;
    padding: 0 20px;
}
.heading{
    padding: 10px 20px;
    font-size: 2rem;
    color: #1043E9;
}
.second-heading{
    color: #1043E9;
    text-align: center;
    font-size: 1.3rem;
}
.para{
    font-size: 0.6rem;
    text-align: center;
}
.img-1{
    width: 350px;
}
  .img-4{
  width: 270px;
  margin-top: 60px;
  margin-left: 60px;
}
  .img-3{
  width: 390px;
  margin-top: 60px;
  margin-left: -30px;
}
.Contact-us{
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 90%;
    margin: auto;
    gap: 10px;
}
.contact-heading {
  font-weight: 550;
  font-size: 1.5rem;
  margin-top: 25px;
  /* text-align: center; */
}
.eagerness-heading {
  margin-top: 60px;
}
.line {
    width: 150px;
    margin-left: 0;
}
.number {
 font-size: 1.8rem;
 font-weight: 700;
 /* text-align: center; */
}
.Contact-para {
 font-size: 1.4rem;
 /* text-align: center; */
}
.form-div input {
  font-size: 1rem;
}
.form-div p {
  font-size: 0.9rem;
}
.icon {
  margin-left: 0;
}
  }
  //for Tablet
  @media (max-width : 768px){
    .main-heading {
    padding: 52px 15px;
    font-size: 1.3rem;
    font-weight: 700;
    color: #fff;
}
.row{
    display: grid;
    grid-template-columns: 100%;
    padding: 0 20px;
    margin-left: 0;
}
.heading{
    padding: 10px 20px;
    font-size: 2rem;
    color: #1043E9;
}
.second-heading{
    color: #1043E9;
    text-align: center;
    font-size: 2rem;
}
.para{
    font-size: 1.1rem;
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
  margin-top: 20px;
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
  margin-top: 60px;
}
.line {
    width: 230px;
    margin-left: 164px;
}
.number {
 font-size: 1.8rem;
 font-weight: 700;
 text-align: center;
}
.Contact-para {
 font-size: 1.4rem;
 text-align: center;
}
.form-div input {
  font-size: 1rem;
}
.form-div p {
  font-size: 0.9rem;
}
.icon {
  margin-left: 170px;
}
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
    margin-left: 0;


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
  .icon {
    margin-right: 10px;
    color: #2192FF;
    font-size: 1.2rem;
    margin-left: 23px;
}
.blue-3 {
    color: #2192FF;
    font-weight: 400;
    font-size: 1rem;
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
    margin-left: 0;

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
  .Regitered-row{
    display: grid;
    justify-content: center;
    gap: 10px;
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
  .blue-3 {
    color: #2192FF;
    font-weight: 400;
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
    margin-left: 0;
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
  .Regitered-heading{
    text-align: center;
    font-size: 2.9rem;
    font-weight: 500;
    color: #002545;
    margin-top: 20px;
  }
  .blue-3-uc{
    color: blue;
  }
  .box-2{
      border: none;
      border-radius: 8px;
      box-shadow: 2px 4px 2px #888888,  -2px -2px 5px #888888;
      padding: 8px 14px;
      margin: 50px 0;
      cursor: pointer;
  }
  .img-2-uc{
    width: 130px;
  }
  .box-2 {
    border: none;
    margin: 10px 0;
    padding: 5px 10px;
    cursor: pointer;
}
.img-2-uc {
    width: 90px;
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
    margin-left: 0;
}
.number {
    color: red;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 29px;
    text-align: center;
}

.Contact-para {
    font-size: 1rem;
    margin-top: 20px;
    text-align: center;
}
.form-div input {
    font-size: 0.7rem;
  }
.form-div p {
    font-size: 0.8rem;
  }
  .blue-3 {
    color: #2192FF;
    font-weight: 400;
    font-size: 0.8rem;
}
  }
  `;
