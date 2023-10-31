import React from "react";
import styled from "styled-components";
import Playvideo from "../assets/playvideo.jpg";
import study from "../assets/study.png";
import Degree from "../assets/Degree.webp";
import OnlineEducation from "../assets/Online-Education.webp";
import Universities from "../assets/Universities.png";
import universitiesList from "../assets/universities-list.png";
import Eduvanz from "../assets/Eduvanz.png";
import Earlysalary from "../assets/Earlysalary.svg";
import Equiloans from "../assets/Equiloans.png";
import Jodo from "../assets/Jodo.svg";
import GoCollegeEBook from "../assets/GoCollegeE-Book.pdf";
import GovtApproval from "../assets/govtApproval.jpg";
import UGCNotice from "../assets/UGC_Notice.pdf";

export const Checklist = () => {
  return (
    <Main>
      <div className="row1">
        <div>
          <h1>GoOnlineCollege Assurance</h1>
        </div>
        <div>
          <li>#Apki Problems ka Sirf Ek solution</li>
        </div>
        {/* Doubts section starting */}
        <div className="section">
          <h2 className="main-heading">
            Have Doubts and Queries regarding Online Education, <br /> Follow
            our Hussle Free Path to Success
          </h2>
        </div>
        {/* Questions with Write-up */}
        <div className="Question-section">
          <div className="grid-1">
            <div className="Question Question-1">
                <span className="numbering">A</span>
              <div>
                {/* <span>1</span> */}
                <h3 className="heading-Question">

                  Can we Apply for Government or Private Jobs after Completing
                  online Degree?
                </h3>
              </div>
              <div>
                <p>
                  Absolutely, After Completing an online degree doesn't limit
                  your career prospects. Online degrees are recognized and
                  accepted by both government and private sectors along with Top
                  MNC's, your qualifications and skills matter most in today's
                  job market. So, go ahead, pursue your online education, and
                  reach for your dream job
                </p>
              </div>
              <div>
                <p className="center">
                  To Know more , Watch our Video on the Latest Norm's{" "}
                  <span className="rounded">
                    <a
                      target="_blank"
                      href="https://youtube.com/shorts/3Ie2cBzv3SM"
                    >
                      <img className="playvideo-1" src={Playvideo} alt="" />
                    </a>
                  </span>
                </p>
              </div>
              <img className="study-img" src={study} alt="" />
            </div>
            <div className="Question Question-2">
                <span className="numbering">B</span>
              <div>
                {/* <span>2</span> */}

                <h3 className="heading-Question">
                  Does Online Degree and Regular Degree Hold's the Same Value or
                  Not?
                </h3>
              </div>
              <div>
                <p>
                  Regular and Online Degree hold's the same value, Aspirants
                  need to keep watch regarding the Approval's and Accrediation
                  that hold's by Online University Turn on screen reader support
                </p>
              </div>
              <div>
                <p>
                  To Know more , Watch our Video on the Latest Norm's
                  <span className="rounded">
                    <a
                      target="_blank"
                      href="https://youtu.be/YzO8xweoJfw?si=aO40L44JoXJ2AH3j"
                    >
                      <img src={Playvideo} alt="" />
                    </a>
                  </span>
                </p>
              </div>
              <img className="Degree-img" src={Degree} alt="" />
            </div>
          </div>
          <div className="grid-2">
            <div className="Question Question-3">
            <span className="numbering">C</span>

              <div>
                {/* <span>3</span> */}
                <h3 className="heading-Question">
                  Why Approvals and Accreditation are Required in Online
                  Education?
                </h3>
              </div>
              <div>
                <p>
                  Approvals and Accreditation are important for any university,
                  This signifies that Degrees issued by them are Legally
                  accepted worldwide. Hence, Before choosing a university,
                  consider vital approvals and accreditations like UGC, NAAC,
                  NIRF, UGC DEB, and AIU. These badges signify quality,
                  credibility, and adherence to academic standards. UGC approval
                  ensures legal recognition, while NAAC accreditation and NIRF
                  ranking reflect excellence.
                </p>
              </div>
              <div>
                <p>
                  To Know more , Watch our Video on the Latest Norm's
                  <span className="rounded">
                    <a
                      target="_blank"
                      href="https://youtu.be/siyz4ZbGybw?si=efUPjGuMLZTbg55g"
                    >
                      <img src={Playvideo} alt="" />
                    </a>
                  </span>
                </p>
              </div>
              <img className="Online-education" src={OnlineEducation} alt="" />
            </div>
            <div className="Question Question-4">
            <span className="numbering">D</span>

              <div>
                {/* <span>4</span> */}
                <h3 className="heading-Question">
                  Most common Myths and Misconceptions about Online Education?
                </h3>
              </div>
              <div>
                <p>
                  Since inception of Online Education, Many Myths and
                  Misconceptions has came into existance regarding its
                  Acceptance, Qualityand Mode of Education and many More. Most
                  common M&M's are <br /> 1.Online courses have zero value on
                  the job market 2.Online and distance learning courses are
                  super simple <br />
                  3.Professors who teach online classes are not real professors{" "}
                  <br />
                  4.You'll have no interaction with online classes <br />{" "}
                  5.Online letures are all fun and no learning <br />
                  6. Distance and online education will not add much weightage
                  to my CV <br />
                  7. ONLINE AND Distance classes are all fun and no work
                </p>
              </div>
              <div>
                <p>
                  To Know more , Watch our Video on the Latest Norm's
                  <span className="rounded">
                    <a
                      target="_blank"
                      href="https://youtu.be/EEGLpK3kmso?si=BlbmVDOlgHdH3rZm"
                    >
                      <img src={Playvideo} alt="" />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid-1">
            <div className="Question Question-5">
            <span className="numbering">E</span>

              <div>
                {/* <span>5</span> */}
                <h3 className="heading-Question">
                  Difference Between Online and Distance Mode of Education?
                </h3>
              </div>
              <div>
                <p>
                  Discover the evolution of education! Online education offers
                  real-time interactions, dynamic multimedia, and a global
                  community of learners. Contrastingly, distance education
                  typically relies on pre-recorded material and correspondence,
                  providing a more self-paced approach. Both offer flexibility,
                  but online education brings the world to your screen,
                  enhancing engagement and interactivity. Embrace the modern
                  ways of learning and redefine your educational journey today!
                  Major Difference between Online and Distance mode of Education
                  are Approval/ Mode of Education and LMS. Turn on screen reader
                  support
                </p>
              </div>
              <div>
                <p>
                  To Know more , Watch our Video on the Latest Norm's
                  <span className="rounded">
                    <a
                      target="_blank"
                      href="https://youtu.be/73MA35EYmac?si=HUhVF4qxcBv4bKjS"
                    >
                      <img src={Playvideo} alt="" />
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="Question Question-6">
            <span className="numbering">F</span>

              <div>
                {/* <span>6</span> */}
                <h3 className="heading-Question">
                  List of Fake Universities, which are not authorise to deliver
                  Online Education in India.
                </h3>
              </div>
              <div>
                <p>
                  Beware of counterfeit institutions! Stay informed and choose
                  genuine education providers. Ensure your future is built on a
                  strong foundation from recognized universities. Don't let fake
                  promises shatter your dreams—opt for reputable and accredited
                  educational institutions that pave the way to a successful
                  career. Your educ
                </p>
              </div>
              <div>
                <p>
                  To Know more , Watch our Video on the Latest Norm's
                  <span className="rounded">
                    <a
                      target="_blank"
                      href="https://youtu.be/PML_J-qXJOM?si=VH94XIBEthgf-GeW"
                    >
                      <img src={Playvideo} alt="" />
                    </a>
                  </span>
                </p>
              </div>
              <img className="Universities" src={Universities} alt="" />
            </div>
          </div>
          <div className="grid-2">
            <div className="Question Question-7">
            <span className="numbering">G</span>

              <div>
                {/* <span>7</span> */}
                <h3 className="heading-Question">
                  List of Universities Approved to provide Online Degree
                  Programs in India Turn on scree?
                </h3>
              </div>
              <div>
                <p>
                  Embark on your academic journey with confidence! Discover a
                  curated list of accredited universities offering top-notch
                  online degree programs. Elevate your education through
                  reputable institutions that bring the classroom to your
                  fingertips. From renowned names to specialized programs,
                  choose the right path for your aspirations. Unlock a world of
                  knowledge and opportunity with trusted online education
                  providers. Your future begins here!
                </p>
              </div>
              <div>
                <p>
                  To Know more , Watch our Video on the Latest Norm's
                  <span className="rounded">
                    <a
                      target="_blank"
                      href="https://youtu.be/Lo1Wjw1dfjY?si=9VzjzZC-gVZFExjf"
                    >
                      <img src={Playvideo} alt="" />
                    </a>
                  </span>
                </p>
              </div>
              <img
                className="universities-list"
                src={universitiesList}
                alt=""
              />
            </div>
            <div className="Question Question-8">
            <span className="numbering">H</span>

              <div>
                {/* <span>8</span> */}
                <h3 className="heading-Question">
                  Admission and Registration Process for Online Education Turn
                  on.
                </h3>
              </div>
              <div>
                <p>
                  Embark on your academic journey effortlessly with our
                  streamlined online degree admission and registration process.
                  Begin by exploring our diverse range of programs and selecting
                  the one that aligns with your goals. Next, submit your
                  application online, accompanied by necessary documents. Our
                  admissions team will guide you through any additional steps,
                  ensuring a smooth and swift registration process. Secure your
                  spot and dive into a world of online learning excellence.
                </p>
              </div>
              <div>
                <p>
                  To Know more , Watch our Video on the Latest Norm's
                  <span className="rounded">
                    <a
                      target="_blank"
                      href="https://youtu.be/WJlFd-p3dlE?si=KsDEEATHadgqSHW8"
                    >
                      <img src={Playvideo} alt="" />
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="Question Question-9">
            <span className="numbering">I</span>

              <div>
                {/* <span>9</span> */}
                <h3 className="heading-Question">
                Know your University Status</h3>
              </div>
              <div>
                <p>
                  Ensure your academic journey is backed by the gold standard!
                  Verify your university's status and recognition, guaranteeing
                  a reputable education. Discover a world of accredited
                  excellence that paves the way for promising careers. Choose
                  wisely, thrive confidently—let your credentials speak volumes
                  in the global arena. Your future deserves the assurance of a
                  recognized institution.
                </p>
              </div>

              <div>
                <p>
                  To Know more , Watch our Video on the Latest Norm's
                  <span className="rounded">
                    <a
                      target="_blank"
                      href="https://youtu.be/dJJMyvaYJfc?si=z-5H2ZgLT8pxD9Ph"
                    >
                      <img src={Playvideo} alt="" />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="govt-div-heading">Did you know?</h1>
        <div className="Govt-Doc">
          <div className="E-book-Box">
            <h1>Get Online College</h1>
            <h2>Ebook - University Selection Made Simple</h2>
            <ul>
              <li className="E-book-li">
                <span className="dot">&#x2022;</span>Enriched with Updated and
                Relevant Content
              </li>
              <li className="E-book-li">
                <span className="dot">&#x2022;</span>Comprehensive Course
                Information
              </li>
              <li className="E-book-li">
                <span className="dot">&#x2022;</span>Expert Guidance on
                University Selection
              </li>
              <li className="E-book-li">
                <span className="dot">&#x2022;</span>Complete guidance to the
                Application Process
              </li>
            </ul>
            <button className="btn-Ebook">
              <a href="" download={GoCollegeEBook}>
                Download E-Book
              </a>
            </button>
          </div>
          <div className="govtDocs">
            <div className="govt-peper">
              <h1>Government</h1>
              <h1>
                Companies Accept <br />
                Online Degree
              </h1>
              <div className="pdf-card">
                <a download={GovtApproval} href="">
                  <img className="govt-pdf" src={GovtApproval} alt="" />
                </a>
              </div>
              <button className="Govt-btn">
                <a href="" download={GovtApproval}>
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="loan-heading">Loan & EMI Partners</h1>
          <div className="Partners">
            <img src={Eduvanz} alt="Eduvanz" />
            <img src={Jodo} alt="Eduvanz" />
            <img src={Earlysalary} alt="Eduvanz" />
            <img src={Equiloans} alt="Eduvanz" />
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
*{
   padding: 0;
   margin: 0;
   font-family: 'Poppins', sans-serif;
}
 .row1{
   margin: auto;
   max-width: 80%;
 }
 h2, h1 ,li {
   text-align: center;
 }
 li{
   list-style: none;
   color: blue;
   margin-bottom: 30px;
 }
 p{
   color: #000;
   font-size: 18px;
   padding: 8px 0;

 }
 h2{
   font-weight: 600;
   font-size: 30px;
 }
 span{
   padding: 8px;
   text-align: center;
   border-radius: 50%;
   margin-right: 5px;
 }
 .study-img{
   width: 200px;
 }
 .Degree-img{
   width: 200px;
   margin-top: 60px;
 }
 .Online-education{
   width: 300px;
 }
 .Universities{
   width: 200px;
 }
 .universities-list{
 width: 200px;
 }

 .grid-1{
    display: grid;
   grid-template-columns: 40% 60%;
   gap: 10px;
   margin-top: 50px;
 }
 .grid-2{
    display: grid;
   grid-template-columns: 60% 40%;
   gap: 10px;
   margin-top: 50px;
 }
 .Question > div{
   display: flex;
   align-items: center;

 }
 .Question{
   border: 1px #000;
   border-radius: 20px;
   padding: 35px;
   background-color:#FCE9F1;
   margin-bottom: 20px;
 }
 .numbering{
  background-color: #fff;
  margin-bottom: 20px;
}
.heading-Question{
  margin-top: 10px;
}

 /* .Question:hover{
     transform: scale(1.1);
     transition-duration: 1s;
   } */
 .center{
   display: flex;
  align-items: center;
 }
 .playvideo-1{
  position: relative;
  top: 18px;
    right: 206px;
 }
 span img{
  width: 40px;
  cursor: pointer;
  animation-name: circleScale;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  border-radius: 50%;
  position: relative;
    top: 14px;

 }


 @keyframes circleScale {
	0% {transform: scale(0)  }
	50% { transform: scale(1) }
  100% { transform: scale(0) }
}
 .Question-5{
  background-color: #c5c8fc;

  }
 .Question-2 p{
   font-size: 20px;
 }
 .Question-3{
   /* background-color: #6528F7; */
   background-color: #c5c8fc;

 }
 .Question-2{
   /* background-color: #444ce3; */
   background-color: #c5c8fc;

 }
 .Question-7{
   /* background-color: #9400FF; */
   background-color: #c5c8fc;

 }
 .Question-9{
   /* background-color: #4E4FEB; */
   margin-bottom: 20px;
 }
 .Question-6{
  /* background-color: #c5c8fc; */

 }
 .Question > div > h3{
   font-size: 30px;
   font-weight: 100;
 }
 .rounded:hover{
   transform: scale(1.1);
     transition-duration: 1s;
 }
 .loan-heading, .govt-div-heading{
  margin-top: 100px;
  margin-bottom: 30px;
 }
 
  .Partners {
    display: flex;
    justify-content: space-around;
}



 .Govt-Doc{
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 20px;
 }
/* .govt-div-heading{
  margin: 35px 0px;
} */
 .E-book-Box{
  background-color: #c5c8fc;
  border-radius: 10px;
 }
 .E-book-Box h1{
  text-align: left;
  color: blue;
  margin-left: 37px;
  margin-top: 20px;
 }
 .E-book-Box h2{
  text-align: left;
  color: #000;
  margin: 8px 0 25px 37px;
 }
 .dot{
  color: #000;
  margin-left: 44px;
 }

 .govtDocs{
  background-color: #c5c8fc;
  border-radius: 10px;

 }
 .E-book-li{
  color: #000;
  margin-bottom: 15px;
  text-align: left;
  font-size: 20px;
 }
 .btn-Ebook{
  padding: 16px 25px;
  background-color: blue;
  margin: 10px 0 10px 58px;
  border: none;
  font-weight: 900;
  border-radius: 10px;
}
.btn-Ebook a{
  text-decoration: none;
  color: #fff;
 }
 .govt-peper{
  margin: 10px 0 0 20px;
  text-align: left;
 }
 .govt-peper h1{
  text-align: left;
  /* color: blue; */
 }
 .Govt-btn{
  padding: 8px 20px;
  background-color: blue;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;

  align-items: center;
 }
 .Govt-btn a{
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  text-decoration: none;
 }
 .pdf-card{
  /* object-fit: cover; */
  max-width: 200px;
 }
 .govt-pdf{
  width: 200px;
  margin: 10px 0;
  cursor: pointer;
 }
 @media (max-width: 768px)
 {
  .grid-1{
    display: grid;
   grid-template-columns: 100%;
   gap: 10px;
   margin-top: 50px;
 }
 .grid-2{
    display: grid;
   grid-template-columns: 100%;
   gap: 10px;
   margin-top: 50px;
 }
 .Govt-Doc{
  display: grid;
  grid-template-columns: 100%;
  gap: 20px;
 }
 .govt-peper {
    margin: 10px 0 0 20px;
    text-align: center;
}
.govt-peper h1 {
    text-align: center;
}
.govt-pdf {
    
    margin: 10px 0 10px 187px;
    
}
.Partners img {
  width: 100px;
}
.btn-Ebook{
  
  margin: 10px 0 10px 223px;
  
}
.loan-heading, .govt-div-heading {
    margin-top: 17px;
    margin-bottom: 24px;
}

}

 @media (max-width: 425px)
 {
  .row1{
    max-width: 100%;

  }
  .main-heading{
    font-size: 16px;
  }
  .grid-1{
    display: grid;
   grid-template-columns: 100%;
   gap: 10px;
   margin-top: 50px;
 }
 .grid-2{
    display: grid;
   grid-template-columns: 100%;
   gap: 10px;
   margin-top: 50px;
 }
 .btn-govt{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.UGC-Notice {
  padding: 10px 5px;
  font-size: 14px;
  margin: 20px 0;
}
.check {

  font-size: 14px;
  padding: 10px;
}

 .Partners {
  display: flex;
  flex-direction: column;
  align-items: center;

 }
 .Partners img {
  width: 100px;
  margin-top: 10px;
 }
 .E-book-Box h2 {
    text-align: left;
    color: #000;
    margin: 8px 0 25px 37px;
    font-size: 20px;
}
 .E-book-li {
    color: #000;
    margin-bottom: 15px;
    text-align: left;
    font-size: 15px;
}
.govt-pdf {
    
    margin: 10px 0 10px 95px;
    
}
.btn-Ebook{
  
  margin: 10px 0 10px 123px;
  
}
.loan-heading, .govt-div-heading {
    margin-top: 17px;
    margin-bottom: 24px;
}

}
@media (max-width: 375px)
 
{
  .main-heading{
    font-size: 14px;
  }
  .grid-1{
    display: grid;
   grid-template-columns: 100%;
   gap: 10px;
   margin-top: 50px;
 }
 .grid-2{
    display: grid;
   grid-template-columns: 100%;
   gap: 10px;
   margin-top: 50px;
 }
 .Partners {
  display: flex;
  flex-direction: column;
  align-items: center;

 }
 .check {

font-size: 14px;
padding: 10px;
}

.Partners img {
width: 100px;
margin-top: 10px;
}
.loan-heading{
font-size: 15px;
}
.govt-pdf {
  
  margin: 10px 0 10px 65px;
  



}
 .loan-heading, .govt-div-heading {
    margin-top: 17px;
    margin-bottom: 24px;
}
.btn-govt{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.UGC-Notice {
  padding: 10px;
  font-size: 14px;
  margin: 20px 0;
}
 .btn-Ebook{
  
  margin: 10px 0 10px 99px;
  
}
 .playvideo-1 {
    position: relative;
    top: 35px;
    right: 87px;}
 
 }

@media (max-width: 320px)
 {
  .row1{
    max-width: 100%;

  }
  li{
    margin-bottom: 15px;
  }
  .main-heading{
    font-size: 10px;
  }
  .grid-1{
    display: grid;
   grid-template-columns: 100%;
   gap: 10px;
   margin-top: 50px;
 }
 .grid-2{
    display: grid;
   grid-template-columns: 100%;
   gap: 10px;
   margin-top: 50px;
 }
 .Question>div>h3 {
    font-size: 14px;
    font-weight: 900;}
    p {
    color: #000;
    font-size: 12px;
    padding: 8px 0;}
    .Question-2 p {
    font-size: 13px;

}
.playvideo-1 {
  position: relative;
    top: 11px;
    right: 31px;
}
.btn-govt{
  display: flex;
  flex-direction: column;
  text-align: center;
}

 .Partners img {
  width: 100px;
  margin-top: 10px;
 }
 .Govt-Doc{
  display: grid;
  grid-template-columns: 100%;
  gap: 20px;
 }
 .E-book-Box h1{
  text-align: left;
  color: blue;
  margin-left: 37px;
  margin-top: 20px;
  font-size: 20px;
 }
 .E-book-Box h2{
  text-align: left;
  color: #000;
  margin: 8px 0 25px 37px;
  font-size: 15px;
 }
 .E-book-li{
  color: #000;
  margin-bottom: 15px;
  text-align: left;
  font-size: 10px;
 }
 .btn-Ebook{
  padding: 12px 25px;
  background-color: blue;
  margin: 10px 0 10px 58px;
  border: none;
  font-weight: 200;
  border-radius: 10px;
}
.loan-heading, .govt-div-heading {
    margin-top: 17px;
    margin-bottom: 24px;
}
.btn-Ebook a{
  text-decoration: none;
  color: #fff;
 }
 .govt-peper{
  margin: 10px 0 0 20px;
  text-align: left;
 }
 .govt-peper h1{
  text-align: left;
  font-size: 15px;
  /* color: blue; */
 }
 .govt-peper h1 {
    text-align: center;
    font-size: 15px;
 }
 .govt-pdf {
    
    margin: 10px 0 10px 31px;
    
}

 .btn-Ebook{
  
  margin: 10px 0 10px 73px;
  
}
.Govt-btn {
   margin-left: 72px;

}
 }
`;
