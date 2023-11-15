import React from "react";
import styled from "styled-components";


export const ThankYou = () => {
     return (
 <Main>
    <div className="main-div">
    <div className="left-side">

     <h1>Thanks for showing your interest <br /> with us!</h1>
     <p>Our representative will call you withing 24 hours.</p>
     <h3>Listen straight from our COO About GoCollege Partners & How you <br /> can earn</h3>


     <div className="contact">
          <p>+91 7982278360 - 9971666477</p>
     </div>
    </div>

    {/* vidoe div  */}

     {/* <div>
          <img src="" alt="Vidoe" />
     </div> */}
    </div>
 </Main>
     )
};
const Main = styled.div`
*{
     font-family: 'Poppins', sans-serif;
     padding: 0;
     margin: 0;
}
 .main-div{
     display: flex;
     /* flex-direction: column; */
     justify-content: center;
     align-items: center;
     height: 80vh;
 }
 h1{
     text-align: center;
     color: #0D6EFD;
     font-size: 2.5rem;
     margin-bottom: 10px;
 }
 p{
     text-align: center;
     font-size: 1.1rem;
     font-weight: 500;
     color: #212529;
 }
 h3{
     font-size: 1.2rem;
     text-align: center;
     font-weight: 700;
     margin-top: 10px;
 }
 .contact{
     max-width: 80%;
     margin: auto;
     background-color: #EEF2FF;
     width: 40%;
     padding: 10px 20px;
     border-radius: 8px;
     margin-top: 20px;
 }
`;