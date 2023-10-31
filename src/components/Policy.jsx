import React from "react";
import styled from "styled-components";

export const Policy = () => {
  return (
    <>
      <Main>
        <div className="row">
          <h1 className="main-heading">
            Privacy Policy for <span className="blue-head"> GoCollege </span>{" "}
          </h1>

          <div className="col-1">
            <h1>Introduction</h1>
            <p>
              GoCollege (along with its subsidiaries and affiliates,
              "GoCollege," "us," "we," or "our" or "the Company") is committed
              to protecting and handling personal data in order to operate
              efficiently and effectively for the benefit of our stakeholders,
              customers, and the community. We operate from Jammu and strictly
              adhere to the guidelines set by the Jammu court. However, it is
              critical to protect people's privacy by only using authorized and
              appropriate methods to handle personal data. As a result, we've
              implemented what's known as policy. When you send us electronic
              mail voluntarily, we will keep a record of it so that we can
              respond to you. Only when you register on our site or fill out a
              form do we collect information from you. You may also be asked to
              enter your name, e-mail address, or phone number when filling out
              a form on our site. However, you may visit our site anonymously.
              If you have provided us with your personal information and contact
              information, we reserve the right to contact you via phone, SMS,
              email, or WhatsApp about our products and offers, even if your
              phone number is set to DND.
            </p>
          </div>
          <div className="col-1">
            <h1>Aim</h1>
            <p>
              This policy aims to protect the personal information of our
              various stakeholders. This policy is intended to inform
              individuals of the fundamental principles in the firm's treatment
              of personal information ("personal data"), as well as a guest user
              and a browser (hence "you").
            </p>
          </div>
          <div className="col-1">
            <h1>Purpose</h1>
            <p>
              The goal of this policy is to define how GoCollege collects, uses,
              and communicates data about you via the online interfaces we own
              and control, which include but are not limited to our website and
              mobile apps (hereinafter the "website"). This policy also aims to
              provide information on how GoCollege safeguards data security,
              transmits data, and processes data subject requests. The Policy
              Control applies to all company information systems, including
              board members, directors, staff, and other third parties who have
              access to GoCollege's personal data.
            </p>
          </div>
          <div className="col-1">
            <h1>Scope</h1>
            <p>
              The company also agrees to ensure that its employees follow these
              and other related rules. If third parties process information on
              GoCollege's behalf, the company makes every effort to ensure that
              your personal information is always protected by such third
              parties. GoCollege provides online and distance education
              ("individually or collectively referred to as the "project"),
              specifically designed for higher education and business. This
              Privacy Policy applies to all of our services, unless otherwise
              stated.
            </p>
          </div>
          <div className="col-1">
            <h1>Data gathering sources</h1>
            <p>
              The company collects data from the user or through the use of our
              websites. Data is obtained.
            </p>
            <h4>Data Collection Sources </h4>
            <ul>
              <li>
                Register for one of our seminars, webinars, or other outreach
                efforts.
              </li>
              <li>
                Request a quote for any of the many goods and services we offer.
              </li>
              <li>
                Fill out any customer surveys that have been distributed, or
                contact our customer service online.
              </li>
              <li>View our services or go to our websites</li>
              <li>Visit our website.</li>
              <li>
                When you are taking online scholarships, exams or other
                assessments.
              </li>
            </ul>
          </div>
          <div className="col-1">
            <h1>Data protection principles</h1>
            <p>
              When a third party processes data on GoCollege's behalf, we make
              every effort to ensure that your personal data is always protected
              from such third parties. We acknowledge that any personal data
              kept in the form of manual records and computers must be
              processed, managed, and regulated, as well as stored and retained.
            </p>
            <h4>
              The following personal data will be collected and stored by the
              company:
            </h4>
            <ul>
              <li>
              Gathered in a proper, legal, and transparent manner for specific, stated, and justifiable goals. 


              </li>
              <li>
              Be gathered for specific, clear, and legal reasons.
              </li>
              <li>
              Be sufficient, relevant, and limited to what is needed for processing.
              </li>
              <li>Maintain accuracy by staying up to date. Every reasonable effort will be made to ensure that incorrect information is immediately corrected or deleted. 
</li>
              <li>Be handled in a way that ensures acceptable personal data security, including protection from unauthorized or illegal processing, accidental loss, destruction, or damage, using appropriate technological or organizational measures. 
</li>
              <li>
              Follow the applicable laws and procedures for international data transfers of Personal Data.

              </li>
            </ul>
          </div>
         
          <div className="col-1">
            <h1>Contact Us</h1>
            <p>
            Please contact us at [contact information] if you have any questions or concerns about our privacy practices.

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
     font-family: 'Poppins', sans-serif;
}
.row{
     max-width: 90%;
     margin: auto;
}
.main-heading{
     text-align: center;
     margin-top: 50px;
     margin-bottom: 70px;
     font-weight: 500;
}
.blue-head{
     color: blue;
}
.col-1{
     /* background-color: #B6FFFA; */
     padding: 20px;
     border-radius: 8px;
     margin-bottom: 5px;
}
.col-1 > h1{
     font-size: 1.8rem;
     font-weight: 500;
}
.col-1 > p{
     font-size: 1.1rem;
     margin-top: 8px;
     font-weight: 400;
}
h4{
  margin-top: 10px;
}
ul{
  margin-left: 20px;
}
       `;
