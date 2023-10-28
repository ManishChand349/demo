import React from "react";
import styled from "styled-components";
import phone from "../assets/Contact-img/24-hours.webp"




export const ContactUs = () => {
     return (
       <>
       <Main>
          <section className="banner">
                    <div className="banner-div">
                    <h2>Need Answers? Connect with us over a detailed telephonic session</h2>
                     <div className="inner-div">
                     <img className="inner-phone" src={phone} alt="" />
                        <div className="inner-box-1">
                           <div>
                        <h1>Our Mentors Offer </h1>
                              <p> Correct Information</p>
                              <p>  answers related to your degree</p>
                           </div>
                           <div className="inner-box-3">
                              <p> Assistance to get the right university</p>
                              <p> Support till the end of your journey</p>
                           </div>
                        </div>
                     </div>
                    </div>
          </section>
       </Main>
       </>)}

       const Main = styled.div`
       *{
         margin: 0;
         padding: 0;
       }
       .banner-div{
         text-align: center;
         background-color: blue;
         color: #fff;
       }
       .inner-div{
         background-color: #fff;
         max-width: 80%;
         margin: auto;
         display: flex;
         border-radius: 8px;
         
       }
       .inner-phone{
         width: 100px;
       }
       .inner-box-1{
         color: #000;
         display: flex;
         justify-content: space-around;
       }
       .inner-box-3{
        
       }
       
       `