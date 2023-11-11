import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BCA from "../assets/OnlineBca-img/online-bca-program.webp";
import Education from "../assets/OnlineBca-img/who-should-pursue-bca-distance-education-course.webp";
import AdmissionProcedure from "../assets/OnlineBca-img/AdmissionProcedure.jpg";
import CVCourseBcaSalary from "../assets/OnlineBca-img/CVCourseBcaSalary.png";
import CVCourseBcaSalaryGraph from "../assets/OnlineBca-img/CVCourseSalaryGraph.png";
import { BsFillCheckSquareFill } from "react-icons/bs";

export const OnlineBca = () => {
  return (
    <>
      <Main>
        <div className="row">
          <div className="img-div">
            <img className="bca-img" src={BCA} alt="" />
            <div className="para-div">
              <p className="para-updated">UPDATED AT : NOVEMBER 7,2023</p>
              <h1 className="main-heading">Online BCA Program</h1>
              <p className="main-para">
                Online BCA is a 3 years comprehensive bachelor's degree that
                covers a wide range of topics, from the basics of computer
                science to advanced code languages, databases, software
                engineering, and more. This all-around program ensures that
                students have a strong base in many different parts of computer
                applications and gives them the skills they need for many jobs
                in the tech field.
              </p>
              <div className="media-div">
                <h4 className="watch-video">Watch Video</h4>
                <h4>Listen Podcast</h4>
              </div>
            </div>
          </div>
          <div className="row-2">
            <div className="top-div">
              <div className="UC-div">
                <p>Universities</p>
                <p>15</p>
              </div>
              <div className="UC-div">
                <p>Duration</p>
                <p>3 Years</p>
              </div>
              <div className="UC-div">
                <p className="Eligi-para">Eligibiliy</p>
                <p>12th Pass out</p>
                <div>
                  <p className="info-para">info</p>
                </div>
              </div>
            </div>
            <p className="para first-para">
              In the digital age, where technology is everywhere, getting an
              Online BCA (Bachelor of Computer Application) has become a great
              way for people excited about computers and technology to change
              their lives. The program is made to be open and easy to use so
              that students can fully know computer science and its many uses.
            </p>
            <p className="para">
              UGC-DEB has approved online BCA and has the same value as a normal
              BCA. One of the best things about online BCA programs is their
              flexibility. These programs consider learners' many tasks, such as
              a full-time job, family obligations, or other duties. Online
              learning lets students build their study plans around what they
              already do to keep a good mix between work, school, and life.
            </p>
            <h1 className="second-heading">Why Online BCA?</h1>
            <p className="para-2">
              Online BCA is delivered completely online and focuses on learning
              through interaction. Virtual classes, chat platforms, and group
              projects help students and teachers from different parts of the
              world work together. This variety of points of view makes learning
              more interesting and gives a taste of how tech is used worldwide.
            </p>
            <div>
              <img className="education-img" src={Education} alt="" />
            </div>
            <p className="para-2">
              Online BCA programs build their courses around what the tech
              industry needs. This ensures that graduates have the skills and
              information useful in an industry that is always changing. From
              computer languages like Java and Python to building websites,
              making mobile apps, and managing data, students learn skills that
              can be used immediately in the real world.
            </p>
            <p className="para-2">
              Students automatically learn digital knowledge and technical
              skills by pursuing an Online BCA program. Using online learning
              platforms, working with virtual teamwork tools, and solving tech
              problems have become second nature. Moreover, the program is a
              great way to meet new people. Students work with their peers,
              teachers, and workers from many fields. With a bigger network, you
              can work together, get job leads, and learn about a wider range of
              views in the tech field.
            </p>
            <h1 className="second-heading">Who Should Pursue Online BCA?</h1>
            <p className="para-2">
              Online BCA program is available to many people who want to learn
              computer science and start a job in the tech industry, which is
              always changing. The following groups should consider getting an
              online BCA:
            </p>
            <div>
              <div className="para-div-2">
                <BsFillCheckSquareFill className="icons" />
                <p className="">
                  {" "}
                  <span className="highlight">
                    People who want to work as computer professionals:
                  </span>{" "}
                  Online BCA is a great choice for people who want to work as
                  computer professional. This program gives you the information
                  and skill to start your job if you are interested in
                  technology, Programming, and digital systems.
                </p>
              </div>
              <div className="para-div-2">
                <BsFillCheckSquareFill className="icons-1" />
                <p className="">
                  {" "}
                  <span className="highlight">Working Professionals:</span>{" "}
                  Online BCA is very helpful for people already working in
                  non-technical areas but want to switch to a tech-related job.
                  It lets them learn new skills while keeping their current job,
                  which can lead to new chances in the tech field.
                </p>
              </div>
              <div className="para-div-2">
                <BsFillCheckSquareFill className="icons-2" />
                <p className="">
                  {" "}
                  <span className="highlight">
                    Geographically Diverse Learners:
                  </span>{" "}
                  Students from many places can attend online BCA. Online
                  learning is a good option if you live in an area where going
                  to school on campus is hard to get to or if you have personal
                  issues that keep you from going regularly.
                </p>
              </div>
              <div className="para-div-2">
                <BsFillCheckSquareFill className="icons-3" />
                <p className="">
                  {" "}
                  <span className="highlight">Remote Professionals: </span> The
                  flexibility of Online BCA can help professionals whose jobs
                  require them to move a lot or work from home. It's easier for
                  them to keep up with their schoolwork because they can access
                  course materials and attend class from anywhere.
                </p>
              </div>
            </div>
            <h1 className="second-heading">When to do an Online BCA?</h1>
            <p className="para-2">
              The best time to pursue online BCA depends on your situation and
              job goals. Online BCA programs are flexible enough to work with
              many different scenarios. If you just graduated from high school,
              this is a great way to start a tech-related job without studying
              full-time in college. People who are already working and want to
              change careers or get better at their jobs in technology can do so
              without quitting. People who can't go to college because of where
              they live or want a more open learning setting can also start
              their Online BCA at any age. The decision is mostly based on the
              person's goals, circumstances, and willingness to embark on a
              fulfilling journey in computer apps.
            </p>
            <h1 className="second-heading">
              Popular and Affordable Online BCA Colleges Or Universities in
              India?
            </h1>
            <div className="gird-div">
              <div className="inner-div">
                {" "}
                <strong>Private Universities Offering BCA</strong>{" "}
              </div>
              <div className="inner-div">
                {" "}
                <strong>NIRF Ranking</strong>{" "}
              </div>
              <div className="inner-div">
                {" "}
                <strong>Starting Fee Range</strong>
              </div>
              <div className="inner-div">
                {" "}
                <Link to="">Amrita University online</Link>
              </div>
              <div className="inner-div">
                {" "}
                <p>7</p>{" "}
              </div>
              <div className="inner-div">
                {" "}
                <p>INR 1,40,000</p>{" "}
              </div>
              <div className="inner-div">
                {" "}
                <Link to="">LPU Online</Link>
              </div>
              <div className="inner-div">
                {" "}
                <p>38</p>{" "}
              </div>
              <div className="inner-div">
                {" "}
                <p>INR 1,30,000</p>{" "}
              </div>
              <div className="inner-div">
                {" "}
                <Link to="">Amity University Online</Link>
              </div>
              <div className="inner-div">
                {" "}
                <p>35</p>
              </div>
              <div className="inner-div">
                {" "}
                <p>INR 1,30,000</p>{" "}
              </div>
              <div className="inner-div">
                {" "}
                <Link to="">UPES Online</Link>
              </div>
              <div className="inner-div">
                {" "}
                <p>52</p>
              </div>
              <div className="inner-div">
                {" "}
                <p>INR 1,40,000</p>
              </div>
              <div className="inner-div">
                {" "}
                <Link to="">Chandigarh University Online</Link>
              </div>
              <div className="inner-div">
                {" "}
                <p>27</p>
              </div>
              <div className="inner-div">
                {" "}
                <p>INR 1,50,000</p>
              </div>
              <div className="inner-div">
                {" "}
                <Link to="">DMIMS Online</Link>
              </div>
              <div className="inner-div">
                {" "}
                <p>39</p>
              </div>
              <div className="inner-div">
                {" "}
                <p>INR 1,45,000</p>
              </div>
            </div>
            <h1 className="second-heading">
              Key Highlight of online BCA In India
            </h1>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
                With an online BCA program, you can learn at your own pace and
                fit school in around work and other obligations.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
                The program helps students develop technical skills related to
                computer programming, data visualisation, cloud computing, etc.{" "}
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-3" />
              <p>
                The Online BCA program covers various topics, from the basics to
                more advanced computer tools, to prepare you for various tech
                jobs.{" "}
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-4" />
              <p>
                Learn in a digital setting to improve your digital Knowledge and
                technical skills
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-5" />
              <p>
                Make virtual connections with peers and professionals to grow
                your network and find new ways to work together and advance your
                job.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-6" />
              <p>
                You can move through your schoolwork at your own pace and change
                it to fit your learning style and what you already know.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-7" />
              <p>
                Use the program's flexibility to get into tech-related jobs,
                such as software creation and IT counselling.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-8" />
              <p>
                With an online BCA program, engage with teachers and peers
                worldwide through virtual classes and group projects for a more
                varied learning experience.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-9" />
              <p>
                Learn skills needed in the job market, such as computer
                languages, web creation, and data management.
              </p>
            </div>
            {/* //Online BCA Course Subjects */}
            <div>
              <h1 className="second-heading">Online BCA Course Subjects</h1>
              <p className="para-2 Subject-para">
                The online BCA program curriculum is meant to teach students
                everything they need to know about computer science and how it
                can be used in real life. Even though the exact syllabus can
                change from university to university, here is a general overview
                of what is usually taught in an online BCA program:
              </p>
            </div>

            <div className="subject-grid">
              <div className="inner-div">
                <p>Computer Fundamenals</p>
              </div>
              <div className="inner-div">
                <p>Programming Fundamentals</p>
              </div>
              <div className="inner-div">
                <p>Digital Electronics</p>
              </div>
              <div className="inner-div">
                <p>Mathematics for Computing</p>
              </div>
              <div className="inner-div">
                <p>Communication Skills</p>
              </div>
              <div className="inner-div">
                <p>Data Structures and Algorithms</p>
              </div>
              <div className="inner-div">
                <p>Database Managements Systems</p>
              </div>
              <div className="inner-div">
                <p>Object-Oriented Programming</p>
              </div>
              <div className="inner-div">
                <p>Operating Systems</p>
              </div>
              <div className="inner-div">
                <p>Software Engineering</p>
              </div>
              <div className="inner-div">
                <p>Web Development</p>
              </div>
              <div className="inner-div">
                <p>Mobile App Development</p>
              </div>
              <div className="inner-div">
                <p>Cloud Computing</p>
              </div>
              <div className="inner-div">
                <p>Computer Graphics and multimedia</p>
              </div>
            </div>
            <h1 className="second-heading">
              Top Specializations in Online BCA
            </h1>
            <p className="para-2 ">
              When students enroll in an online BCA Program, they can often pick
              from several specialisation that fit their hobbies and job goals.
              Here are a few of the <a href="">best BCA specialisation:</a>
            </p>
            <div className="Top-Specializations-grid">
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online In Computer Science
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online In Data Analytics
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online In Cyber Security
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online In Database Management
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online In cloud Security
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online In Artficial Intelligence and Machine Learning
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online In Multimedia and Animation
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online In Data Science and Big Data
                </Link>
              </div>
            </div>
            <h1 className="second-heading">
              Top Specializations in Online BCA
            </h1>
            <p className="para-2 ">
              Besides Online BCA Programs, there are different kinds of BCA
              programs for students with different learning styles and ways of
              life:
            </p>
            <p className="">
              {" "}
              <span className="highlight">
                1. Regular on-Campus BCA program:
              </span>{" "}
              Regular on-campus BCA programs offer a standard and in-depth way
              to learn. Students attend classes in real classrooms on university
              or college grounds and interact directly with teachers and other
              students. This program lets students meet in person, which can be
              helpful for in-depth talks, group projects, and quick access to
              educational resources like labs and libraries. It also helps
              students feel like they are part of the university community by
              letting them participate in events and activities outside of
              class. This method provides an organised and guided education, but
              students may need to be on campus all the time, which can be hard
              for those who have other obligations or need help getting to
              college.
            </p>
            <p className="Ranking-heading">
              {" "}
              <span className="highlight">
                Top Universities for BCA As Per NIRF Ranking 2023
              </span>
            </p>
            <p className="para-2">
              Here is a list of the top best universities in India as per the
              NIRF Ranking 2023
            </p>
            <div className="Top-Universities-grid">
              <div className="inner-div">
                {" "}
                <p className="center">
                  {" "}
                  <strong className="center">Universities/Institution</strong>
                </p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">
                  <strong>NIRF 2023 Ranking in University Category</strong>
                </p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">Indian Institute of Science</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">1</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">Jawaharlal Nehru University</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">2</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">Jamia Millia Islamia</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">3</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">Jadavpur University</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">4</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">Banaras Hindu University</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">5</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">
                  Manipal Academy Of Higher Education-Manipal
                </p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">6</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">Amrita Vishwa Vidyapeetham</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">7</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">Vellore Institute of Technology</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">8</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">Aligarh Muslim University</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">9</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">University of Hyderabad</p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">10</p>
              </div>
            </div>
            <p className="para-2">
              {" "}
              <span className="highlight">2. Distance BCA:</span> Students who
              need more flexible schedules can use{" "}
              <a className="link-tag" href="">
                distance BCA programs
              </a>
              . These programs use various distance learning methods, such as
              written study guides, online tools, and tutoring from afar. Apart
              from online classes, you must attend university to take your
              exams. Students can access course materials from home or anywhere
              else with an internet connection. This freedom will benefit people
              balancing work, family, or other obligations while getting their
              BCA degree. Distance BCA programs are especially helpful for
              people who may need help to easily go to school on campus because
              of where they live. However, self-discipline and time management
              are very important for doing well in online learning.
            </p>
            <p className="para-2">
              {" "}
              <span className="highlight">3. Part Time BCA:</span> Part time BCA
              programs are designed for people with full-time jobs or
              responsibilities. Because these programs offer evening or weekend
              classes, students can keep their jobs and improve their skills
              simultaneously.{" "}
              <a className="link-tag" href="">
                Part time BCA
              </a>
              . students can interact with teachers and classmates during class
              time, which can help them make connections and work together to
              learn. One good thing about part-time classes is that they give
              you the freedom to get your BCA while still working. It is
              important to remember that part-time BCA programs may take longer
              to finish than full-time ones because they usually have lighter
              course loads to suit students who work full-time jobs. The table
              below enlists the key differences between a regular, distance,
              online and part time BCA.
            </p>
            <p className="para-2">
              The table below enlists the key difference between a regular,
              distance, online and part time BCA:
            </p>
            <div className="part-time-BCA">
              <div className="inner-div">
                {" "}
                <p className="center">
                  {" "}
                  <strong className="center">Aspect</strong>
                </p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">
                  {" "}
                  <strong className="center">Regular BCA</strong>
                </p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">
                  {" "}
                  <strong className="center">Distance BCA</strong>
                </p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">
                  {" "}
                  <strong className="center">Online BCA</strong>
                </p>
              </div>
              <div className="inner-div">
                {" "}
                <p className="center">
                  {" "}
                  <strong className="center">Part-Time-BCA</strong>
                </p>
              </div>
              <div className="inner-div inner-part-time ">
                {" "}
                <p className=" part-time-para">
                  {" "}
                  Learning <br /> Environment
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  On-Campus classes with in-person interactions
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Mostly remote with occasinal in-person session
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Entirely online <br /> with virtual <br /> interactions
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  On-campus or virtual part-time schedule
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Classroom <br /> Attendance
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Mandatory in- <br /> person Attendance
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  No mandatory in- <br /> person classes
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  No in-person <br /> classes, Entirely <br /> virtual
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  part-time, with some <br /> in-person sessions
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para"> Flexibility</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Limited flexibility, <br /> fixed class schedules
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  High flexibility, self-paced learning
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Maximum flexibility, study at your own pace
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Moderate flexibility with evening/weekend <br /> classes
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para"> Interaction with Peers</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Extensive face-to-face interaction
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Limited in-person interactions
                </p>
              </div>

              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Virtual access to digital resources
                </p>
              </div>

              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  In-person and virtual interactions
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para"> Access to Campus Resources</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Full access to libraries, labs, and campus facilities
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Limited access, often remote resources
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Virtual access to digital resources
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  {" "}
                  Partial access to campus facilitiess
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para"> Learning Materials</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Printed textbooks, physical resources
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Printed and online materials, occasional workshops
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Online materials, digital resources
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Varied, including printed and online
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">Tutor/Instructor Support</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  In-person support from professors
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Remote tutor support and occasional in-person sessions
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Virtual support from instructors
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">In-person and virtual support</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">Schedule Duration</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Typically 3 years of full-time study
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Variable, depending on self-paced progress
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Variable, often flexible for working professionals
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Longer duration due to part-time schedule
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Suitable for Working Professionals
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Less suitable due to full-time commitment
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Highly suitable, as it accommodates work schedules
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Ideal for working professionals, flexible schedule
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Designed specifically for working individuals
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">Geographical Accessibility</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Limited to students living near the campusy
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Accessible to students across different locations
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Accessible to students worldwide
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Depending on the institution's location
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">Time Management Skills</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Requires effective time management
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Demands strong self-discipline and time managementt
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Necessitates self-motivation and time management
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para">
                  Requires good time management for work-study balance
                </p>
              </div>
            </div>
            <h1 className="second-heading">Online BCA Eligibility</h1>
            <p className="para-2">
              Depending on the university that offers the program, na online BCA
              program's eligibiliy requirements and duration can differ. But
              there are same things that students usually need to do before they
              can enroll:
            </p>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
                Applicants must have finished their 10+2 eduction from a
                recognized board or a similar test.{" "}
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
                Most school expect students to have gotten at least a certain
                number of marks on their 10+2 exams, usually at least 50%.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
                There may not be strict subject requirements, but knowing math
                and computer science can be helpful.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-4" />
              <p className="para-3">
                Since the program is taught in English, it is generally assumed
                that you know a certain amount of that language. Some school
                might want you to take a test to see how well you speak English.
              </p>
            </div>
            <h1 className="second-heading">Online BCA Duration</h1>
            <p className="para-2">
              Most online BCA programs take about 3 to 4 years to finish. This
              time is broken into six semesters, each about six months long. The
              program's framework is set up so that the courses and topics are
              spread evenly over the three years. This way, students can slowly
              build their knowledge and skills in computer applications.
            </p>
            <h1 className="second-heading">Skills Required for online BCA</h1>
            <p className="para-2">
              You must have certain skills and traits to do well in an online
              BCA program. Here are some important skills you need to be
              successfull:
            </p>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-4" />
              <p className="para-3">
                <strong>Self-motivation and Discipline: </strong>
                To stay focused on your schoolwork, meet deadlines, and handle
                your study plan while studying, you must be self-motivated and
                disciplined.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-5" />
              <p className="para-3">
                <strong>Effective Time Management: </strong>
                You must manage your time well to balance schoolwork with other
                obligations and ensure enough time for learning and tasks.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-4" />
              <p className="para-3">
                <strong>Digital Literacy and Adaptability: </strong>
                You must know how to use digital platforms, tools, and apps
                well. It's important to adapt and learn new tools in the tech
                business, which changes quickly.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-6" />
              <p className="para-3">
                <strong>Critical Thinking and Problem-handling: </strong>A lot
                of the work in online BCA classes is handling hard problems.
                Being able to think critically helps you understand and solve
                complex problems well.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons icon-4" />
              <p className="para-3">
                <strong>Communication and Teamwork: </strong>
                You must communicate clearly both orally and in writing to
                participate in online talks, ask for help, and work well with
                others on group tasks.
              </p>
            </div>
            <h1 className="second-heading">BCA Entrance Exams 2023</h1>
            <p className="para-2">
              The followaing is a list of some of the most prevalent admission
              examinations for BCA degrees in India:
            </p>

            <div className="BCA-exams-grid">
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  DU JAT (Delhi University Joint Admission Test)
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  IPU CET (Indraprastha University Common Entrance Test)
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  CUET (Commmon University Entrance Test)
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  SET (Symbiosis Entrance Test)
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  NPAT (NMIMS Programs After Twelfth)
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  UGAT (Under Graduate Apitiude Test)
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  DU JAT (Delhi University Joint Admission Test)
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  SET (Symbiosis Entrance Test)
                </p>
              </div>
            </div>
            <div className="inner-div  ">
              {" "}
              <p className="center Book-para">
                IPU CET (Indraprastha University Common Entrance Test)
              </p>
            </div>
            <h1 className="second-heading Books-heading">Recommended Books:</h1>
            <div className="Books-grid">
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  <strong>Book Title</strong>
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  <strong>Subject</strong>
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  <strong>Author Name</strong>
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Database Management Systems
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Database Management</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Raghu Ramakrishnan</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Introduction to the Theory of Computation
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Theory of Computation
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Michael Sipser</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Data Structures and Algorithm Analysis in C++
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Data Structures and Algorithms
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Mark A. Weiss</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Operating System Concepts
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Operating Systems</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Abraham Silberschatz</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Computer Network</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Computer Network</p>
              </div>

              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Andrew S.Tanenbaum</p>
              </div>

              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Software Engineering: A Practitioner's Approach
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Software Engineering</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Roger S.pressman</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Artificial Intelligence: A Modern Approach
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Artificial Intelligence
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Stuart Russell and peter Norvig
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Web Technologies: HTML, CSS JavaScript, and XML
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Web Development</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Jeffrey C.Jackson</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Programming in Java</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Java Programming</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">E.Balagurusamy</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Introduction to Computer Graphics and the Vulkan API
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Computer Graphics</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Kenwright</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Cryptography and NetWork Security: Principles and Practice
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Network Security</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">William Stallings</p>
              </div>
            </div>
            <h1 className="second-heading Books-heading">
              Online BCA Academic Fees
            </h1>
            <p className="para-2">
              Fees for the online BCA Program usually cost between 50,000 INR
              and 2 lakhs INR. The university name causes this difference, the
              program's length, how complete the education is, and what other
              support services are offered. The low cost of these programs and
              the fact that they can be done online make them a good choice for
              people who want to get a good education in computer applications.
            </p>
            <h1 className="second-heading Books-heading">
              Online BCA Admission Procedure
            </h1>
            <p className="para-2">
              Several steps in the admissions process for online BCA schools
              make registration easy and quick. Applicants must complete their
              forms online and include important personal and academic details.
              Depending on the school, candidates might have to take an entrance
              test to see how good they are at computer science. Also,
              applicants might have to send their college records, proof of
              identity, and English language proficiency test marks. Some
              applicants who made the shortlist might be asked to see how
              motivated they are and if they are a good fit for the program.
              Once a student is accepted, they get an offer letter with
              information about the school and how to pay the fees. This
              simplified process makes it easy for people who want to learn to
              start their online BCA path and learn more about the world of
              technology.
            </p>
            <img className="education-img" src={AdmissionProcedure} alt="" />
            <h1 className="second-heading Books-heading">
              Why Opt for an Education Loan for an Online BCA?
            </h1>
            <p className="para-2">
              A student loan can be used to pay for an Online BCA program. Like
              any other course, this can be paid for with a student loan. The
              minimum requirements for getting a student loan for the BCA school
              are the same as for the other classes. That is, the person must
              live in India and be between the ages of 18 and 35. They must also
              have a letter of acceptance from a recognised university. If you
              meet all these requirements, you can apply for an education loan
              for any school, whether online or offline.
            </p>
            <h1 className="second-heading Books-heading">
              Is Online BCA Worth It?
            </h1>
            <p className="para-2">
              Pursuing an Online BCA is a good idea in the digital age as it
              offers many benefits, freedom and convenience that can't be found
              anywhere else. The program lets people fit their learning around
              other things they must do, like work, family, or personal
              interests. This makes education available to more people.
            </p>
            <p className="para-2">
              The courses in the online BCA program cover a lot of ground, are
              up-to-date, and are based on interactive learning, which disproves
              the idea that online learning is done alone. Students interact
              with teachers and classmates worldwide through virtual classrooms,
              conversation forums, and group projects. This creates a learning
              atmosphere that is diverse and rich. Another important benefit is
              that it saves money. Tuition for online BCA is often less than for
              standard on-campus programs. They are also attractive because they
              save money on transportation and moving costs.
            </p>
            <img className="education-img" src={CVCourseBcaSalary} alt="" />
            <p className="para-2"> <strong>Source:</strong> <span className="blue-para">Payscale</span>  </p>
            <p className="para-2">
            To sum up, choosing to go to an online BCA school is a smart move. In an age ruled by technological progress, its importance is shown by its flexibility, strong curriculum, interactive learning, industry alignment, global networking, technological skills, and job possibilities. It's an investment that adds to your skills and puts you at the center of a technology-driven future.
            </p>
            <img className="education-img" src={CVCourseBcaSalaryGraph} alt="" />
            <h1 className="second-heading Books-heading">
             Job Opportunities For Online BCA Degree
            </h1>
            <p className="para-2">
            Graduates of online BCA programs have plenty of job possibilities, and most companies recognize the skills they've learned. The program's full coursework prepares people for jobs in software creation, web design, IT consulting, and other fields. Employers like the real skills and flexibility graduates show through online learning, making them very competitive in the job market. Here are some job prospects after Online BCA. 
            </p>
            <div className="jop-grid">
            <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Software Developer
                </p>
              </div>
            <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Web Developer
                </p>
              </div>
            <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                 Database Administrator
                </p>
              </div>
            <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                 IT Consultant
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                 System Analyst
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Mobile App Developer
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Network Administrator
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Quality Assurance Analyst
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Technical Support Specialist
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  E-commerce Specialist
                </p>
              </div>
            </div>
            <h1 className="second-heading Books-heading">
             Top Recruiters
            </h1>
            <p className="para-2 last-para">
            India's IT business has grown to over $250 billion. It is growing by 7.7% every year. India is home to many IT parks, such as those in Bangalore, Hyderabad, Pune, Noida, and Mumbai, all looking for Online BCA grads. Here are some of the leading companies which are actively hiring Online BCA graduates.
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
     text-decoration: none;
   }
   .center{
    text-align: center;
   }
   .row{
     max-width: 70%;
     margin: auto;
     padding-left: 200px;
   }
  .bca-img{
     width: 350px;
     border-radius: 7px;
}
.main-heading{
     font-size: 1.5rem;
     color: #212529;
     margin-bottom: 17px;
}
.img-div{
     display: flex;
     background-color: #F8F9FA;
     width: 81%;
     padding-right: 50px;
     border-radius: 8px;
     margin-bottom: 100px;
   }
   .para-div{
     padding-top: 35px;
     margin-left: 30px;
   }
   .para-updated{
     font-size: 0.7rem;
     font-weight: 500;
     color: #A5ABB0;
}
.main-para{
     color: #6D7073;
     font-size: 1rem;
   }
   .media-div{
     display: flex;
     margin-top: 30px;
   }
   .watch-video{
     margin-right: 135px;
   }
   .top-div{
    display: flex;
    justify-content: space-around;
    border:0.131rem solid #0056d2;
    /* align-items: center; */
    position: relative;
    top: -49px;
    left: 43px;
    width: 90%;
    background-color: #f0f8ff;
    padding: 10px;
    border-radius: 8px;
   }
   .UC-div p{
      text-align: center;
      font-size: 1rem;
   }
   .Eligi-para{
    padding-top: 1px;
   }
   .info-para{
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
    background-color: #212529;
    color: #fff;
    font-size: 0.7rem !important;
    width: 20%;
    border-radius: 25px;
    margin-left: 30px;
   }
   .row-2{
    border: 1px solid #A5ABB0;
    padding: 2px 24px;
    margin-top: 50px;
    width: 81%;
    border-radius: 8px;
   }
   .para{
    margin-bottom: 18px;
    color: #3C3F43;
   }
   .second-heading{
    font-size: 1.6rem;
    color: #212529;
   }
   .para-2{
    color: #3C3F43;
    margin-bottom: 20px;
   }
   .education-img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-top: 20px;
  margin-bottom: 20px;
   }
   .highlight{
    font-weight: bold;
   }
   .para-div-2{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
   }
   .icons{
    font-size: 2.4rem;
    margin-bottom: 50px;
    margin-right: 5px;
    color: #BDE3FF;
   }
   .icons-1{
    font-size: 2.4rem;
    margin-bottom: 27px;
    margin-right: 5px;
    color: #BDE3FF;
   }
   .icons-2{
    font-size: 2.4rem;
    margin-bottom: 27px;
    margin-right: 5px;
    color: #BDE3FF;
   }
   .icons-3{
    font-size: 2.4rem;
    margin-bottom: 50px;
    margin-right: 5px;
    color: #BDE3FF;
   }
   .gird-div{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    /* border: 0.3rem solid; */
    margin-bottom: 15px;
   }
   .inner-div{
    padding: 10px;
    border: 1px solid;
   }
   .para-div-3{
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
   }
   .second-icons{
    font-size: 1rem;
    margin-bottom: 4px;
    margin-right: 5px;
    margin-left: 6px;
    color: #BDE3FF;
  }
  .icon-3{
     margin-bottom: 27px;
   }
  .icon-4{
     margin-bottom: 1px;
   }
  .icon-5{
     margin-bottom: 25px;
   }
  .icon-6{
     margin-bottom: 1px;
   }
  .icon-7{
     margin-bottom: 1px;
   }
  .icon-8{
     margin-bottom: 22px;
     font-size: 1.2rem;
   }
  .icon-9{
     margin-bottom: 1px;
   }
   .Subject-para{
    margin: 10px 0;
   }
   .subject-grid{
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 10px 0;
   }
   .para-2 a{
    color: #568CDA;
   }
   .Top-Specializations-grid{
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 15px;
   }  
   .link-tag{
    text-decoration: underline;
    color: #0056d2;
   }
   .Ranking-heading{
    margin-top: 10px;
    margin-bottom: 10px;
   }
   .Top-Universities-grid{
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 20px;
  }
   .part-time-BCA{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 20px;
   }
   .inner-part-time{
    display: flex;
    align-items: end;
  }
  .part-time-para{
     padding: 0 10px;
   }
   .icon-4{
    font-size: 1.4rem;
    margin-bottom: 25px;
   }
   .icon-5{
    font-size: 1.2rem;
    margin-bottom: 25px;
   }
   .icon-6{
    font-size: 1.5rem;
    margin-bottom: 25px;
   }
   .para-3{
    color: #3C3F43;
   }
   .BCA-exams-grid{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .Books-heading{
     margin-top: 20px;
  }
  .Books-grid{
  display: grid;
  grid-template-columns: 44% 28% 28%;
  /* margin-top: 20px; */
  margin-bottom: 20px;
   }
   .Book-para{
    /* padding-top: 10px ; */
    padding-bottom: 10px ;
   }
   .blue-para{
    color: #7752FE;
    font-weight: 900;
   }
   .jop-grid{
    display: grid;
    grid-template-columns: 50% 50%;
   }
   .last-para{
    margin-bottom: 40px;
   }
   // for S mobile
   @media (max-width : 320px) {
    .img-div {
      flex-direction: column;
    }
    .row {
    max-width: 70%;
    margin: auto;
    padding-left: 0;
}
  }
`;
