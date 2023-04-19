import React from "react";
import styled from "styled-components";
const BodySection = ({ rightContent = [], mainContent }) => {
  return (
    <S_BodySection>
      <div className="main__content ">
        {mainContent.map((item, index) => (
          <div key={index} className="wrap_main__content ">
            {item}
          </div>
        ))}
      </div>
      {/* bỏ đi thay thế cái này bằng lịch */}
      <div className="right__content">
        {rightContent.map((item, index) => (
          <div key={index} className="wrap_right__content">
            {item}
          </div>
        ))}
      </div>
    </S_BodySection>
  );
};

export default BodySection;

const S_BodySection = styled.section`
  max-width: 100%;
  min-height: 500px;
  padding-top: 15px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
      0deg,
      #e5dee2,
      #e5dee2 20%,
      #aba2b4 60%,
      #59516e 90%,
      #59516e
    );
  .wrap_main__content{
    /* position: absolute;
    left: 50%;
    transform: translateX(-50%); */

  }
  .main__content {
    width: 800px;
    border-radius: 6px;
    /* position: absolute;
    left: 50%;
    transform: translateX(-50%); */
  }

  .right__content {
    min-width: 20%;
    border-radius: 6px;
    margin-left: 20px;
  }
`;
