import React from "react";
import styled from "styled-components";
export const ListOfFakeUniversitie = () => {
  return (
    <>
      <Main>
        <div className="main-heading">
        <p>List of <span>Fake Universities</span> by UGC In 2024</p>
        </div>
        <div className="write-up">
        <p>In this emerging era of online learning, there are more than 20 universities in India that claim to be genuine but are not. They do not have any approval from UGC for conducting any online programs on their platforms but are still continue doing so. Students who are not familiar with UGC recognition fell into their trap and suffer later. To create awareness about this among students, we are providing a list of 20+ “Fake Universities” in India that must not be considered for any online certification or degree. In this learning journey of yours, be attentive and choose a credible university for a progressive career!</p>

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
.main-heading{
  padding: 60px;
  color: #232D3F;
  font-size: 2rem;
  text-align: center;
  background-color: #FFF6F6;
  font-weight: 500;
}
.main-heading span{
  color: red;
}
.write-up{
  max-width: 95%;
  margin: auto;
  margin-top: 30px;
  text-align: center;
}

`;
