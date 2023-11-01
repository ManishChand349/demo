import React from "react";
import styled from "styled-components";
import { AiFillBank } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
export const ListOfFakeUniversitie = () => {
  return (
    <>
      <Main>
        <div className="main-heading">
          <p>
            List of <span>Fake Universities</span> by UGC In 2024
          </p>
        </div>
        <div className="row">
          <div className="write-up">
            <p>
              In this emerging era of online learning, there are more than 20
              universities in India that claim to be genuine but are not. They
              do not have any approval from UGC for conducting any online
              programs on their platforms but are still continue doing so.
              Students who are not familiar with UGC recognition fell into their
              trap and suffer later. To create awareness about this among
              students, we are providing a list of 20+ “Fake Universities” in
              India that must not be considered for any online certification or
              degree. In this learning journey of yours, be attentive and choose
              a credible university for a progressive career!
            </p>
          </div>
          <div className="list">
            <div className="inner-box box-1">
              <h4 className="s-no">S.No</h4>
            </div>
            <div className="inner-box">
              <h4>University Name</h4>
            </div>
            <div className="inner-box">
              <h4>State</h4>
            </div>
            <div className="inner-box">
              <h4>Check</h4>
            </div>
            {/* 1st staring */}
            <div className="inner-box box-1 bg-dark">
              <h4>1</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    All India Institute Of Public & Physical Health Sciences
                    (AllPHS){" "}
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark">
              <p>Delhi</p>
            </div>
            <div className="inner-box bg-dark ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 2nd staring */}
            <div className="inner-box box-1 ">
              <h4>2</h4>
            </div>
            <div className="inner-box  UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name"> Commercial University Ltd </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box ">
              <p>Delhi</p>
            </div>
            <div className="inner-box  ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 3rd staring */}
            <div className="inner-box bg-dark box-1">
              <h4>3</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name"> United Nations University </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark ">
              <p>Delhi</p>
            </div>
            <div className="inner-box  bg-dark">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 4th staring */}
            <div className="inner-box box-1 ">
              <h4>4</h4>
            </div>
            <div className="inner-box  UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name"> Vocational University </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box ">
              <p>Delhi</p>
            </div>
            <div className="inner-box  ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 5th staring */}
            <div className="inner-box bg-dark box-1">
              <h4>5</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    ADR-Centric Juridical University{" "}
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark ">
              <p>Delhi</p>
            </div>
            <div className="inner-box  bg-dark">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 6th staring */}
            <div className="inner-box box-1 ">
              <h4>6</h4>
            </div>
            <div className="inner-box  UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    Indian Institute of Science and Engineering{" "}
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box ">
              <p>Delhi</p>
            </div>
            <div className="inner-box  ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 7th staring */}
            <div className="inner-box bg-dark box-1">
              <h4>7</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    Viswakarma Open University for Self-Employment{" "}
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark ">
              <p>Delhi</p>
            </div>
            <div className="inner-box  bg-dark">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 8th staring */}
            <div className="inner-box box-1 ">
              <h4>8</h4>
            </div>
            <div className="inner-box  UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name"> Adhyatmik Vishwavidyalaya </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box ">
              <p>Delhi</p>
            </div>
            <div className="inner-box  ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 9th staring */}
            <div className="inner-box bg-dark box-1">
              <h4>9</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    Badaganvi Sarkar World Open University Education Society{" "}
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark ">
              <p>Karnataka</p>
            </div>
            <div className="inner-box  bg-dark">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 10st staring */}
            <div className="inner-box box-1 ">
              <h4>10</h4>
            </div>
            <div className="inner-box  UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name"> St. John’s University </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box ">
              <p>Kerala</p>
            </div>
            <div className="inner-box  ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 11th staring */}
            <div className="inner-box bg-dark box-1">
              <h4>11</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name"> Raja Arabic University </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark ">
              <p>Maharashta</p>
            </div>
            <div className="inner-box  bg-dark">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 12th staring */}
            <div className="inner-box box-1 ">
              <h4>12</h4>
            </div>
            <div className="inner-box  UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    Indian Institute of Alternative Medicine{" "}
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box ">
              <p>Kolkata</p>
            </div>
            <div className="inner-box  ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 13th staring */}
            <div className="inner-box bg-dark box-1">
              <h4>13</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    Institute of Alternative Medicine and Research
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark ">
              <p>Kolkata</p>
            </div>
            <div className="inner-box  bg-dark">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 14th staring */}
            <div className="inner-box box-1 ">
              <h4>14</h4>
            </div>
            <div className="inner-box  UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name"> Gandhi Hindi Vidyapith </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box ">
              <p>Uttar Pradesh</p>
            </div>
            <div className="inner-box  ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 15th staring */}
            <div className="inner-box bg-dark box-1">
              <h4>15</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    National University of Electro Complex Homeopathy
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark ">
              <p>Uttar Pradesh</p>
            </div>
            <div className="inner-box  bg-dark">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 16th staring */}
            <div className="inner-box box-1 ">
              <h4>16</h4>
            </div>
            <div className="inner-box  UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    Netaji Subhash Chandra Bose University{" "}
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box ">
              <p>Uttar Pradesh</p>
            </div>
            <div className="inner-box  ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 17th staring */}
            <div className="inner-box bg-dark box-1">
              <h4>17</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name"> Bhartiya Shiksha Parishady</h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark ">
              <p>Uttar Pradesh</p>
            </div>
            <div className="inner-box  bg-dark">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 18th staring */}
            <div className="inner-box box-1 ">
              <h4>18</h4>
            </div>
            <div className="inner-box  UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name"> Nav Bharat Shiksha Parishad </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box ">
              <p>Odisha</p>
            </div>
            <div className="inner-box  ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 19th staring */}
            <div className="inner-box bg-dark box-1">
              <h4>19</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    North Orissa University of Agriculture & Technology
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark ">
              <p>Odisha</p>
            </div>
            <div className="inner-box  bg-dark">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 20th staring */}
            <div className="inner-box box-1 ">
              <h4>20</h4>
            </div>
            <div className="inner-box  UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    Sree Bodhi Academy of Higher Education{" "}
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box ">
              <p>Puducherry</p>
            </div>
            <div className="inner-box  ">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
            {/* 21th staring */}
            <div className="inner-box bg-dark box-1">
              <h4>21</h4>
            </div>
            <div className="inner-box bg-dark UC-Name">
              {" "}
              <div className="inner-box-2">
                {" "}
                <div>
                  <AiFillBank className="icons" />
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="UC-name">
                    {" "}
                    Christ New Testament Deemed University{" "}
                  </h4>
                </div>{" "}
              </div>{" "}
              <button className="fake-btn">Fake</button>
            </div>
            <div className="inner-box bg-dark ">
              <p>Andhra Pradesh</p>
            </div>
            <div className="inner-box  bg-dark">
              <button className="verify-btn">
                Verify <FiArrowUpRight className="icons2" />
              </button>
            </div>
            {/* end */}
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
.row{
  max-width: 80%;
  margin: auto;

}
.write-up{
  
  margin: 40px 0;
  text-align: center;
}
.list{
 
  display: grid;
  grid-template-columns: 8% 66% 14% 12%;
}
.UC-name{
  font-weight: 400;
  font-size: 1.1rem;
}
.inner-box{
  border: 1px solid #DDF2FD;
  display: flex;
  align-items: center;
  padding: 6px 6px 4px 6px;
  /* padding-left: 6px; */
}
.inner-box-2{
  display: flex;
  align-items: center;
  padding-left: 6px;
}
.box-1{
 display: flex;
 justify-content: center;
 align-items: center;
}
/* .box-1 h4{
  font-weight: 400;
 
}
.s-no{
  font-weight: 900;
} */
.UC-Name{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons{
  font-size: 1.5rem;
  margin-right: 10px;
}
.fake-btn{
  font-weight: 900;
  padding: 2px 5px;
  margin: 6px;
  background-color: red;
  border: none;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
}
.verify-btn{
  display: flex;
  color: #fff;
  border: none;
  background-color: blue;
  padding: 3px 8px;
  border-radius: 7px;
  cursor: pointer;

}
.icons2{
  font-size: 1.1rem;
}
.bg-dark{
  background-color: #FDF0F0;
}
`;
