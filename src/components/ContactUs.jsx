import React from "react";
import styled from "styled-components";
import phone from "../assets/Contact-img/24-hours.webp";
import { BsFillStarFill } from "react-icons/bs";
import { CiMail, CiMobile3, CiLocationOn } from "react-icons/ci";
import { FiCornerUpRight } from "react-icons/fi";
import { BiPhone, BiCog } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

// let sliderNumber = 1;
// const length = images.length;

// for (let i = 0; i < length; i++) {
//      const div = document.createElement("div");
//      div.className = "button";
//      bottom.appendChild(div);
//    }

//    const buttons = document.querySelectorAll(".button");
//    buttons[0].style.backgroundColor = "white";

//    const resetBg = () => {
//      buttons.forEach((button) => {
//        button.style.backgroundColor = "transparent";
//      });
//    };

//    buttons.forEach((button, i) => {
//      button.addEventListener("click", () => {
//        resetBg();
//        slider.style.transform = `translateX(-${i * 500}px)`;
//        sliderNumber = i +1;
//        button.style.backgroundColor = "white";
//      });
//    });

// const nextSlide = () => {
//   slider.style.transform = `translateX(-${sliderNumber * 500}px)`;
//   sliderNumber++;
// };
// const prevSlide = () => {
//   slider.style.transform = `translateX(-${(sliderNumber - 2) * 500}px)`;
//   sliderNumber--;
// };

// const getFirstSlider = () => {
//   slider.style.transform = `translateX(0px)`;
//   sliderNumber = 1;
// };
// const getLastSlider = () => {
//   slider.style.transform = `translateX(-${(length - 1) * 500}px`;
//   sliderNumber = length;
// };

export const ContactUs = () => {
  return (
    <>
      <Main>
        <div>
          <section className="banner">
            <h1 className="main-heading">
              Need Answers? Connect with us over a detailed telephonic session
            </h1>
            <div className="inner-banner">
              <div>
                <img className="phone-img" src={phone} alt="" />
              </div>
              <div className="box-2">
                <div className="col-1">
                  <h1>Our Mentors Offer</h1>
                  <p>
                    {" "}
                    <span className="star">
                      <BsFillStarFill />
                    </span>{" "}
                    Correct Information
                  </p>
                  <p>
                    <span className="star">
                      <BsFillStarFill />
                    </span>{" "}
                    Answers Related to your Degree
                  </p>
                </div>
                <div className="col-2">
                  <p className="col-3">
                    {" "}
                    <span className="star">
                      <BsFillStarFill />
                    </span>{" "}
                    Assistance to Get The Right university
                  </p>
                  <p>
                    {" "}
                    <span className="star">
                      <BsFillStarFill />
                    </span>{" "}
                    Support Till The End Of Your Journey
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <section className="section-get-in">
              <h1 className="heading-get-in">Get in Touch</h1>
              <p className="para">Give us ring. You can even come to meet us</p>
              <div className="contact-info">
                <div className="mail">
                  <span className="icons">
                    <CiMail />
                  </span>
                  <div className="box-4">
                    <h4 className="box-4-1st-heading">
                      {" "}
                      For Job-Related Query
                    </h4>
                    <h2 className="box-4-2nd-heading">hr@GoCollege.com</h2>
                  </div>
                  <div className="box-4">
                    <h4 className="box-4-1st-heading"> For HR Assistance</h4>
                    <h2 className="box-4-2nd-heading">
                      {" "}
                      hrhelpdesk@GoCollege.com
                    </h2>
                  </div>
                  <div className="box-4">
                    <h4 className="box-4-1st-heading"> For Help & Support</h4>
                    <h2 className="box-4-2nd-heading">info@GoCollege.com</h2>
                  </div>
                </div>
                <div className="phone">
                  <span className="icons">
                    <CiMobile3 />
                  </span>
                  <h3 className="number">1234567890</h3>
                </div>
                <div className="location">
                  <span className="icons">
                    <CiLocationOn />
                  </span>
                  <h3 className="address">C-1234 A block Sector 45, Noida, UK 20123</h3>
                </div>
              </div>
            </section>

            <section className="contact-form">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.227401214434!2d77.25884656050088!3d28.54381342552915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3dc72335957%3A0xc21b42d26a240ce1!2sDD-12%2C%20Block%20DD%2C%20Kalkaji%20Extension%2C%20Kalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1699002202844!5m2!1sen!2sin"
                  style={{ width: "100%", height: "100%" }}
                  frameborder="0"
                  loading="lazy"
                />
              </div>
              <div>
                <h2>Contact Us</h2>
               
              </div>
            </section>

            <section className="visit-Us">
              <div>
                <h1 className="visit-us-heading">
                  Call doesn't feel <br /> enough{" "}
                  <span className="blue">Visit Us</span>
                </h1>
                <p className="visit-us-para">
                  At GoCollege, it is our constant endeavour to provide great
                  customer experience. In case you require assistance, we have
                  created multiple ways to reach out to us
                </p>
                <button className="call-btn">Call Now</button>
                <p className="visit-us-para-2">
                  <CiLocationOn className="icon-2" /> Visit Us :{" "}
                  <span className="blue-2"> (10 AM to 7 PM) </span>
                </p>
                <h3 className="visit-us-address">
                  {" "}
                  <FiCornerUpRight className="icon-3" /> C-1234 A block Sector
                  45, Noida, UK 20123
                </h3>
              </div>
              <div className="img-div">
                <img
                  className="image"
                  src="https://plus.unsplash.com/premium_photo-1697945800303-2be12402095e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                />
              </div>
            </section>

            <section className="Expert-talk">
              <div>
                <h1 className="Expert-talk-heading">Talk to our Experts</h1>
                <div className="support-div">
                  <button className="support-btn">Support</button>
                  <p className="p-1">
                    <BiPhone />
                    New Student : <span className="blue-3">1800-123-2342</span>
                  </p>
                  <p>
                    {" "}
                    <BiCog /> Existing Student :{" "}
                    <span className="blue-3">1800-123-2342</span>
                  </p>
                  <p>
                    {" "}
                    <AiOutlineMail /> Email :{" "}
                    <span className="blue-3">cvcare@gocollege.com</span>
                  </p>
                  <p className="p-2">
                    {" "}
                    <CiLocationOn /> Visit Us :{" "}
                    <span className="blue-3">(10 AM to 7 PM)</span>
                  </p>
                </div>
                <h4 className="need-heading">Need answers ? call us!</h4>
                <p className="para-2">
                  {" "}
                  Our team of expert are available for you around the clock
                </p>
                <button className="booking-btn">
                  {" "}
                  Book your 30 Mins Expert Career Advice{" "}
                </button>
              </div>
              <div className="img-div">
                <img
                  className="image"
                  src="https://plus.unsplash.com/premium_photo-1697945800303-2be12402095e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                />
              </div>
              <div>
                <button className="issue-btn">
                  <h4>If you have Any Issue Raise Your ComPlain Here</h4>
                </button>
              </div>
            </section>
          </div>
        </div>
      </Main>
    </>
  );
};
const Main = styled.div`
      
*{padding: 0;
          margin: 0;
   font-family: 'Poppins', sans-serif;
 }
 .banner{
   background-color: blue;
   padding-bottom: 10px;
 }
 .inner-banner{
   display: grid;
   grid-template-columns: 10% 80%;
    margin: 20px 50px;
   background-color: #fff;
   border-radius: 10px;
   padding: 10px 0;
   margin-bottom: 50px;
 }
 
 .main-heading{
   color: #fff;
   text-align: center;
   padding-top: 50px;
   font-size: 1.2rem;
 }
 .phone-img{
   width: 120px;
   padding-top: 10px;
   padding-left: 70px;
 }
 .container{
   max-width: 70%;
   margin: auto;
 }
 .box-2{
   display: flex;
   justify-content: space-around;
 }
 .col-1 , .col-2{
   margin-top: 30px;
 }
 .col-1 >h1{
   margin-bottom: 8px;
   font-weight: 510;
   font-size: 1.8rem;
 }
 .col-1 >p , .col-2 > p{
   font-size: 1.3rem;
   margin-bottom: 10px;
 }
 .col-3{
          margin-top: 35px;
 }
 .star{
   font-size: 1rem;
   margin-top: 20px !important;
 }
   
   .heading-get-in{
     margin-top: 50px;
     text-align: center;
     font-size: 2.2rem;
   }
  .para{
   text-align: center;
   font-size: 1.4rem;
   margin-bottom: 50px;
  }
  .box-4-2nd-heading{
   font-size: 1.2rem;
   font-weight: 700;
  }
  .box-4-1st-heading{
            font-size: 0.8rem;
  }
  .contact-info{
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 25px;
  }
  .icons{
   font-size: 3rem;
    color: blue;
   
  }
 .phone ,.location , .mail{
   text-align: center;
   padding: 10px 20px;
   background-color: #ECF9FF;
   border-radius: 8px;
  }
  .box-4{
   border: 1px solid blue;
   text-align: center;
   margin-top: 10px;
   padding: 12px 50px;
   border-radius: 10px;
  }
  h4{
   font-size: 0.9rem;
  }
  h2{
   font-size: 1.3rem;
   color: blue;
   font-weight: 900;
  }
 .contact-form{
 margin-top: 50px;
      display: grid;
      grid-template-columns: 50% 50%;
   gap: 40px;
    }
    .gender-box{
     display: flex;
     margin: 20px 0;
   gap: 10px;         
 }
    
   .input-radio{
     width: 20px;
    }
   .name-input{
     padding: 15px 200px 15px 10px;
     border-radius: 10px;
     font-size: 1.2rem;
     margin-bottom: 10px;
    }  
  .name-inputt{
  padding: 10px 0px;
  border-radius: 10px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  width:215px;
 }  
 .gridd{
  display:grid;
  grid-template-columns: 38% 38%;
 }
  .name-inputtt{
  padding: 10px 0px 10px 0px;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  width: 443px;
  height: 76px;
 }
 .btnn{
   padding: 15px 206px 15px 194px;
   background-color: #f75d34;
   border-color: #f75d34;
  color:white;
 }
 .visit-Us{
   display: grid;
   grid-template-columns: 50% 50%;
   margin-top: 100px;
   gap: 40px;
 }
 .visit-us-heading{
   font-weight: 300;
   font-size: 2.2rem;
 }
 .blue{
  color: blue;
}
.visit-us-para{
  font-size: 1.1rem;
  margin: 12px 0;
}
.call-btn{
  color: #fff;
  background-color: #2192FF;
  border: none;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 10px;
}
.icon-2{
  font-size: 1.4rem;
  color: blue;
  margin-right: 8px;
}
.visit-us-para-2{
  font-size: 1rem;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.blue-2{
  color: blue;
  margin-left: 8px;

  }
  .icon-3{
    background-color: #ECF9FF;
    padding: 8px;
   font-size: 1.4rem;
   margin-right: 7px;
       }
 .visit-us-address{
         display: flex;
         align-items: center;
         font-size: 1rem;
         margin-top: 15px;
   }
  .Expert-talk-heading{
      font-size: 2.2rem;
      margin-bottom: 20px;
 }
 .image{
   width: 640px;
   border-radius: 6px;
 }
 
 .Expert-talk{
   display: grid;
   grid-template-columns: 50% 50%;
   gap: 40px;
   margin-top: 40px;
 }
 .support-div{
   display: flex;
   flex-direction: column;
   background-color: #ECF9FF;
   margin-right: 300px;
   border-radius: 10px;
 }
  .support-div P{
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    margin: 10px 0 0 10px;
  }
  .blue-3{
    color: #2192FF;
    font-weight: bold;
    margin-left: 10px;
  }
  .p-1 {
    padding-top: 15px !important;
  }
  .p-2 {
    padding-bottom: 30px !important;
  }
  .support-btn{
    max-width: 30%;
    margin: auto;
    border: none;
    background-color: #2192FF;
    color: #fff;
   font-weight: bold;
   font-size: 0.7rem;
   border-radius: 5px;
   padding: 1px 7px;
 }
 .need-heading{
   margin-top: 20px;
   font-size: 1rem;
 }
 .para-2{
   font-size: 1.1rem;
   margin: 15px 0;
 }
 .booking-btn{
   padding: 10px 15px;
   font-weight: bold;
   color: #fff;
   border: none;
   border-radius: 8px;
   background-color: #2192FF;
   cursor: pointer;
   border: 0.1rem solid #2192FF;
   }
.booking-btn:hover{
background-color: #fff;
color: #2192FF;
border: 0.1rem solid #2192FF;
}
.issue-btn{
  padding: 8px 12px;
  border: none;
  background-color: #FAEBD7;
  color: #f75d34;
  border-radius: 8px;
  margin-top: 18px;
  box-shadow: 3px 3px 10px #DAFFFB;
  box-shadow: -3px -3px 10px #DAFFFB;
 }
  .issue-btn h4{
  font-size: 1rem;
  }
  .issue-btn:hover{
  color: #2192FF;
  cursor: pointer;
  }
   // for phone
  @media (max-width : 320px){
    .phone-img {
    width: 50px;
    padding-top: 10px;
    padding-left: 70px;
}
    .main-heading {
    font-size: 0.8rem;
}
.star {
    font-size:  0.7rem;
    margin-top: 20px!important;
}
.box-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.col-1>p, .col-2>p {
    font-size: 0.8rem;
    margin-bottom: 5px;
    /* text-align: center; */
}
.col-1>h1 {
    margin-bottom: 8px;
    font-weight: 510;
    font-size: 1.1rem;
    padding-top: 40px;
}
.col-2 {
    margin-top: 10px;
}
     .contact-info {
    display: grid;
    grid-template-columns: 100%;
    gap: 25px;
}
    .contact-form {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 100%;
    gap: 40px;
}
.heading-get-in {
    margin-top: 30px;
    text-align: center;
    font-size: 2rem;
}
.para {
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 20px;
}
.box-4 { 
    padding: 12px 40px;
}
.box-4-2nd-heading {
    font-size: 0.5rem;
    font-weight: 700;
}
.box-4-1st-heading {
    
    font-weight: 700;
}   
.address, .number{
  font-size: 0.8rem;
}
.Expert-talk {
    display: grid;
    grid-template-columns: 100%;
    gap: 40px;
    margin-top: 40px;
}
.Expert-talk-heading {
    font-size: 2rem;
    margin-bottom: 10px;
    text-align: center;
}
.need-heading {
    margin-top: 20px;
    font-size: 1rem;
    text-align: center;
}
.para-2 {
    font-size: 1rem;
    margin: 15px 0;
    text-align: center;
}
.img-div{
  display: flex;
  justify-content: center;
}
.image {
    width: 230px;
    border-radius: 6px;
}
.issue-btn {
  margin-top: 1px;
}
.name-input {
    padding: 15px 5px 15px 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    margin-bottom: 10px;
}
.name-inputtt {
    padding: 10px 0px 10px 0px;
    border-radius: 4px;
    font-size: 1.2rem;
    margin-bottom: 10px;
    width: 150px;
    height: 76px;
}
.name-inputt {
    padding: 10px 0px;
    border-radius: 10px;
    font-size: 1.2rem;
    margin-bottom: 10px;
    width: 105px;
}
.btnn {
    padding: 15px 10px 15px 194px;
    background-color: #f75d34;
    border-color: #f75d34;
    color: white;
    text-align: center;
}
.blue-3 {
    color: #2192FF;
    font-weight: bold;
    margin-left: 10px;
    font-size: 0.7rem;
}
.support-div P {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    margin: 10px 0 0 10px;
}
.container {
    max-width: 90%;
    margin: auto;
}
.support-div { 
    margin-right: 3px;
}
.visit-Us {  
    grid-template-columns: 100%;
    margin-top: 50px;
}
.visit-us-heading {
    font-weight: 300;
    font-size: 1.6rem;
    text-align: center;
}
.visit-us-para {
    font-size: 0.8rem;
    margin: 12px 0;
    text-align: center;
}
.call-btn {
    padding: 3px 11px;
}
.visit-us-para-2 {
    font-size: 0.8rem;
}
.icon-2 {
    font-size: 1.1rem;   
}
.visit-us-address {  
    font-size: 0.7rem;
}
.icon-3 {
  font-size: 1rem;
  padding: 5px;
}

}
  @media (max-width : 375px){
    .phone-img {
    width: 50px;
    padding-top: 10px;
    padding-left: 96px;
}
    .main-heading {
    font-size: 0.8rem;
}
.star {
    font-size:  0.7rem;
    margin-top: 20px!important;
}
.box-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.col-1>p, .col-2>p {
    font-size: 0.8rem;
    margin-bottom: 5px;
    /* text-align: center; */
}
.col-1>h1 {
    margin-bottom: 8px;
    font-weight: 510;
    font-size: 1.1rem;
    padding-top: 40px;
}
.col-2 {
    margin-top: 10px;
}
     .contact-info {
    display: grid;
    grid-template-columns: 100%;
    gap: 25px;
}
    .contact-form {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 100%;
    gap: 40px;
}
.heading-get-in {
    margin-top: 30px;
    text-align: center;
    font-size: 2rem;
}
.para {
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 20px;
}
.box-4 { 
    padding: 12px 40px;
}
.box-4-2nd-heading {
    font-size: 0.5rem;
    font-weight: 700;
}
.box-4-1st-heading {
    
    font-weight: 700;
}   
.address, .number{
  font-size: 0.8rem;
}
.Expert-talk {
    display: grid;
    grid-template-columns: 100%;
    gap: 40px;
    margin-top: 40px;
}
.Expert-talk-heading {
    font-size: 2rem;
    margin-bottom: 10px;
    text-align: center;
}
.need-heading {
    margin-top: 20px;
    font-size: 1rem;
    text-align: center;
}
.para-2 {
    font-size: 1rem;
    margin: 15px 0;
    text-align: center;
}
.img-div{
  display: flex;
  justify-content: center;
}
.image {
    width: 230px;
    border-radius: 6px;
}
.issue-btn {
  margin-top: 1px;
}
.name-input {
    padding: 15px 5px 15px 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    margin-bottom: 10px;
}
.name-inputtt {
    padding: 10px 0px 10px 0px;
    border-radius: 4px;
    font-size: 1.2rem;
    margin-bottom: 10px;
    width: 150px;
    height: 76px;
}
.name-inputt {
    padding: 10px 0px;
    border-radius: 10px;
    font-size: 1.2rem;
    margin-bottom: 10px;
    width: 105px;
}
.btnn {
    padding: 15px 10px 15px 194px;
    background-color: #f75d34;
    border-color: #f75d34;
    color: white;
    text-align: center;
}
.blue-3 {
    color: #2192FF;
    font-weight: bold;
    margin-left: 10px;
    font-size: 0.7rem;
}
.support-div P {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    margin: 10px 0 0 10px;
}
.container {
    max-width: 90%;
    margin: auto;
}
.support-div { 
    margin-right: 3px;
}
.visit-Us {  
    grid-template-columns: 100%;
    margin-top: 50px;
}
.visit-us-heading {
    font-weight: 400;
    font-size: 1.6rem;
    text-align: center;
}
.visit-us-para {
    font-size: 0.8rem;
    margin: 12px 0;
    text-align: center;
}
.call-btn {
    padding: 3px 11px;
}
.visit-us-para-2 {
    font-size: 0.8rem;
}
.icon-2 {
    font-size: 1.1rem;   
}
.visit-us-address {  
    font-size: 0.7rem;
}
.icon-3 {
  font-size: 1rem;
  padding: 5px;
}
.booking-btn {
   text-align: center;
   margin-left: 10px;
}

}


`;
