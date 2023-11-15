import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const Register = () => {
     return (
       
 <Main>
    <div>
     <p>Just Answer Simple question to <br /> become a GoCollege <span>
     Partners
     </span> </p>
     <form action="">
        <input required type="text" placeholder="Full name" />
        <input required type="text" placeholder="Email address" />
        <input required type="number" placeholder="Phone No." />
        <select required name="" id="">
            <option value>Select a State</option>
            <option value="2">Uttar Pradesh</option>
            <option value="1">Delhi</option>
            <option value="5">Punjab</option>
            <option value="27">Maharashtra</option>
            <option value="14">Bihar</option>
            <option value="23">Karnataka</option>
            <option value="19">Haryana</option>
            <option value="6">Rajasthan</option>
            <option value="18">Gujarat</option>
            <option value="4">West Bengal</option>
            <option value="9">Telangana</option>
            <option value="22">Jharkhand</option>
            <option value="24">Kerala</option>
            <option value="26">Madhya Pradesh</option>
            <option value="32">Orissa</option>
            <option value="8">Tamil Nadu</option>
            <option value="11">Andhra Pradesh</option>
            <option value="3">Uttarakhand</option>
            <option value="13">Assam</option>
            <option value="16">Chandigarh</option>
            <option value="17">Goa</option>
            <option value="10">Tripura</option>
            <option value="12">Arunachal Pradesh</option>
            <option value="20">Himachal Pradesh</option>
            <option value="21">Jammu & Kashmir</option>
            <option value="25">Lakshadweep</option>
            <option value="29">Meghalya</option>
            <option value="28">Manipur</option>
            <option value="31">Nagaland</option>
            <option value="33">Puducherry</option>
            <option value="30">Mizoram</option>
            <option value="34">Andaman & Nicobar Islands</option>
            <option value="35">Dadra and Nagar Havili</option>
            <option value="36">Daman and Diu</option>
            <option value="37">Ladakh</option>
            <option value="38">Other</option>
        </select>

        <button>
        
        <Link className="link" to="/thankyou">
        Submit
        </Link>

        </button>
     </form>
    </div>
 </Main>
     )
};
const Main = styled.div`
*{
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
}
div{
    max-width: 40%;
    margin: auto;
    
}
p{
    text-align: center;
    font-weight: 200;
    margin-top: 150px;
    font-size: 2.6rem;
}
span{
  color: blue;
  font-weight: 500;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 80%;
    margin: auto;
}
input , select{
    padding: 10px;
    margin-top: 30px;
    font-size: 1.3rem;
    border-radius: 7px;
    border-width: 0.5px;
}
button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    font-size: 1.3rem;
    border-radius: 7px;
    border: thin;
    margin-top: 100px;
    cursor: pointer;
    
    
}
.link{
    color: #fff;
}

button:hover , .link:hover{
    background-color: blue;
    color: #fff;
}
`