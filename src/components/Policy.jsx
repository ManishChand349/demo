import React from "react";
import styled from "styled-components";

export const Policy = () => {
  return (
    <>
      <Main>
        <div className="row">
          <h1 className="main-heading">Privacy Policy for <span className="blue-head"> GoCollege </span> </h1>
          
          <div className="col-1">
            <h1>Introduction
</h1>
<p>Welcome to GoCollege! This privacy policy outlines how we collect, use, and protect your personal information when you use our website.</p>
          </div>
          <div className="col-1">
            <h1>Information We Collect
</h1>
<p>We collect various types of information, including personal and non-personal data. This may include your name, contact information, and browsing behavior.
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
}
.row{
     max-width: 90%;
     margin: auto;
}
.main-heading{
     text-align: center;
     margin-top: 50px;
     margin-bottom: 100px;
     font-weight: 500;
}
.blue-head{
     color: blue;
}
.col-1{
     background-color: #B6FFFA;
     padding: 20px;
     border-radius: 8px;
     margin-bottom: 10px;
}
.col-1 > h1{
     font-weight: 500;
}
.col-1 > p{
     font-size: 1.4rem;
     margin-top: 8px;
     font-weight: 500;
}
       `;
