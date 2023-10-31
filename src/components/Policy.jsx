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
              Welcome to GoCollege! This privacy policy outlines how we collect,
              use, and protect your personal information when you use our
              website.
            </p>
          </div>
          <div className="col-1">
            <h1>Information We Collect</h1>
            <p>
              We collect various types of information, including personal and
              non-personal data. This may include your name, contact
              information, and browsing behavior.
            </p>
          </div>
          <div className="col-1">
            <h1>How We Use Your Information</h1>
            <p>
              The information we gather is used to improve your experience on
              GoCollege. We may personalize content, send relevant updates, and
              enhance our services based on your preferences.
            </p>
          </div>
          <div className="col-1">
            <h1>Data Security</h1>
            <p>
              We prioritize the security of your information. Our measures
              include encryption, regular system updates, and access controls to
              safeguard your data.
            </p>
          </div>
          <div className="col-1">
            <h1>Cookies</h1>
            <p>
              We use cookies to enhance your browsing experience. You can choose
              to disable cookies, but this may affect certain features of the
              website.
            </p>
          </div>
          <div className="col-1">
            <h1>Children's Privacy</h1>
            <p>
              GoCollege is not directed at children under 13. We do not
              knowingly collect personal information from individuals in this
              age group.
            </p>
          </div>
          <div className="col-1">
            <h1>Changes to This Policy</h1>
            <p>
            We reserve the right to update our privacy policy. Check this page periodically for any changes.

            </p>
          </div>
          <div className="col-1">
            <h1>Contact Us
</h1>
            <p>
            If you have questions or concerns about our privacy practices, please contact us at [contact information].

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
     font-size: 1.2rem;
     margin-top: 8px;
     font-weight: 500;
}
       `;
