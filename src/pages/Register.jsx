import React from "react";
import styled from "styled-components";


export const Register = () => {
     return (
       
<Main>

    <div className="row">
    <div>

          <h1>Just Answere Simple questions to <br /> become a <span className="blue" >GoCollege Partners</span></h1>
          <input type="text" name="" id="" placeholder="Full name" />
    </div>
    
    <div>
     <button>P</button>
     <button>N</button>
    </div>
    </div>
</Main>
       
     )
};
const Main = styled.div`
     .row{
  margin: auto;
  width: 50%;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
}
         
     
`