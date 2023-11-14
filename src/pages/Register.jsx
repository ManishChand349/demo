import React from "react";
import styled from "styled-components";


export const Register = () => {
     return (
       
 <Main>
    <div>
     <p>Just Answer 4 Simple question to <br /> become a GoCollege <span>
     Partners
     </span> </p>
     <form action="submit">
        <input required type="text" placeholder="Full name" />
        <input required type="text" placeholder="Email address" />
        <input required type="number" placeholder="Phone No." />
        <select required name="" id="">
            <option value>Select a State</option>
            <option value="2">Uttar Pradesh</option>
            <option value="1">Delhi</option>
            <option value="3">Punjab</option>
        </select>
        <button>Submit</button>
     </form>
    
    </div>
 </Main>
       
     )
};
const Main = styled.div`
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
button{
    padding: 10px;
    margin-top: 10px;
    font-size: 1.3rem;
    border-radius: 7px;
    border: thin;
    margin-top: 100px;
    cursor: pointer;
}
button:hover{
    background-color: blue;
    color: #fff;
}
`