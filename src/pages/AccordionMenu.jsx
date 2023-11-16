import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import styled from "styled-components";


const AccordionMenu = () => {
  const [currentlyActive, setCurrentlyActive] = useState(1);

  const handleAccordionClick = (newActiveAccordion) => {
    setCurrentlyActive(
      newActiveAccordion === currentlyActive ? null : newActiveAccordion
    );
    console.log(`currently active item: ${currentlyActive}`);
    console.log(
      `newly active item: ${newActiveAccordion} previous active item ${currentlyActive}`
    );
  };

  return (
     <Main>

    <div className="accordion-menu">
      <h1 className="title">Let's clear up some doubts about Online BCA</h1>
      <div className="accordion-items">
        <AccordionItem
          title="Which universities are best for online BCA degree course In India?"
          content="Here are some of the top universities for Online BCA:- Chandigarh University, Amity Online University, Lovely Professional University, Amrita University, Manipal University etc."
          isActive={currentlyActive === 1}
          onClick={() => handleAccordionClick(1)}
        />
        <AccordionItem
          title="What is the eligibility criterion for online BCA In India?"
          content="You must have passed 10+2 with any stream and Maths as the compulsory subject."
          isActive={currentlyActive === 2}
          onClick={() => handleAccordionClick(2)}
        />
        <AccordionItem
          title="Is there any entrance examination for taking admission in online BCA degree programs in India?"
          content="There is no entrance examination to get enrolled in online BCA. You just need a minimum percentage (45% to 50% aggregate marks depending on the university) in your intermediate examinations to get enrolled in online BCA."
          isActive={currentlyActive === 3}
          onClick={() => handleAccordionClick(3)}
        />
        <AccordionItem
          title="What is the examination mode of semester examination of online BCA degree in India?"
          content="The mode of examination depends from university to university. Some universities offer online examination mode while some have offline examination centres."
          isActive={currentlyActive === 4}
          onClick={() => handleAccordionClick(4)}
        />
        <AccordionItem
          title="Can I pursue an MCA after online BCA degree?"
          content="Yes, one can pursue an MCA after a online BCA degree. One can opt for a regular MBA as well after getting a online BCA degree."
          isActive={currentlyActive === 5}
          onClick={() => handleAccordionClick(5)}
        />
        <AccordionItem
          title="Is computer background required to take admission in online BCA course?"
          content="There is no requirement of any computer background to pursue online BCA. Being from a computer background helps but it is not necessary."
          isActive={currentlyActive === 6}
          onClick={() => handleAccordionClick(6)}
        />
        <AccordionItem
          title="Are online programs eligible for education loans?"
          content="Yes, like regular programs one can also get an education loan for the online program."
          isActive={currentlyActive === 7}
          onClick={() => handleAccordionClick(7)}
        />
        <AccordionItem
          title="Is the Online BCA program UGC/DEB approved?"
          content="The University Grants Commission (UGC) or the Distance Education Bureau (DEB) should ideally approve online BCA programs to ensure they are legitimate and well-known. It's important to ensure the school and college are properly accredited."
          isActive={currentlyActive === 8}
          onClick={() => handleAccordionClick(8)}
        />
        <AccordionItem
          title="If I plan to migrate abroad, will Online BCA be helpful/recognised?"
          content="Getting an online BCA degree recognised in another country may depend on the country and the institution's rules on recognition. It is very important to find out if the place you want to go will accept an online degree."
          isActive={currentlyActive === 9}
          onClick={() => handleAccordionClick(9)}
        />
        <AccordionItem
          title="Why should I choose the online BCA Program?"
          content="It's easy to get to and flexible with online BCA classes so that you can mix your studies with other obligations. The classes are usually the same as college ones, so you can get a good degree while studying from anywhere."
          isActive={currentlyActive === 10}
          onClick={() => handleAccordionClick(10)}
        />
        <AccordionItem
          title="What is the course duration for online BCA?"
          content="Online BCA studies usually last 3 years, the same time as on-campus BCA programs. But some schools may offer different lengths of time."
          isActive={currentlyActive === 11}
          onClick={() => handleAccordionClick(11)}
        />
        <AccordionItem
          title="Will the online BCA be recognised while applying for jobs?"
          content="How well companies recognise online BCA degrees can depend on how well-known and accredited the school is. Many companies do accept online degrees, but it's still a good idea to ensure the program and school are legitimate."
          isActive={currentlyActive === 12}
          onClick={() => handleAccordionClick(12)}
        />
        <AccordionItem
          title="Can online BCA degrees be recognised in all regions of Canada??"
          content="Yes, Online BCA degrees are recognised in Canada, but it may depend on the area and the university. It's important to learn about the unique standards of each province and how Canadian universities handle recognition."
          isActive={currentlyActive === 13}
          onClick={() => handleAccordionClick(13)}
        />
        <AccordionItem
          title="What jobs will I get after online BCA?"
          content="When you finish your online BCA, you can work as a software developer, web developer, database administrator, network administrator, IT expert, or in other tech and computer-related jobs. Job chances rely on what you're good at and what you specialise in."
          isActive={currentlyActive === 14}
          onClick={() => handleAccordionClick(14)}
        />
      </div>
    </div>
    </Main>

  );
};

export default AccordionMenu;
const Main = styled.div`
.accordion-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
  border-radius: 15px;
  border: 1px solid #bdbdbd;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: auto;
  margin-top: 20px;
}

h1.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  color: #2f80ed;
  font-size: 2.1rem;
  font-weight: 700;
}

.accordion-items {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: flex-start;
  gap: 15px;
  Max-width: 80%;
  margin: auto;
}

.accordion-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 600px; */
  padding: 20px;
  border-radius: 15px;
  padding-left: 72px;
  background-color: white;
  cursor: pointer;
  transition: 0.25s background-color;
}

.accordion-item.active {
  background-color: #f2f8fe;
}

h1.accordion-tile {
  color: #000;
  font-size: 16px;
  font-weight: 500;
}

p.accordion-content {
  max-height: 0;
  overflow: hidden;
  color: #000;
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  transition: 0.5s max-height, 0.5s margin;
}

p.accordion-content.active {
  max-height: 4.3rem;
  margin: 1rem 0;
}

.icon-container {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  z-index: 2;
  border-radius: 39px;
  transform: translateX(-3rem) translateY(0.25rem);
  padding: 0.5rem;
  transition: background-color 0.5s, box-shadow 0.5s;
}

.icon-container.active {
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.stroke-one,
.stroke-two {
  content: "";
  position: relative;
  z-index: 1;
  transition: 0.5s all;
}

.stroke-one {
  width: 3px;
  height: 12px;
  background-color: #000;
  transform: translateX(calc(12px / 2 - 1.5px)) rotate(0deg);
}

.stroke-one.active {
  transform: translateX(calc(12px / 2 - 1.5px)) rotate(90deg);
}

.stroke-two {
  height: 3px;
  width: 12px;
  background-color: #000;
  transform: translateY(calc(-12px / 2 - 1.5px));
}

`