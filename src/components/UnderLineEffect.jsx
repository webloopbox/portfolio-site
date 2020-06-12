import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";

const UnderLine = styled.div`
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 7px;
  width: 0;
  transition: width 0.5s;
  background-color: #26b5b3;
  /* animation: 0.5s first-uline;
  animation-fill-mode: both; */

  & div:first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #4c83e7;
    width: 0;
    transition: width 0.5s;
    transition-delay: 0.2s;
    /* animation: 0.5s second-uline;
    animation-delay: 0.2s;
    animation-fill-mode: both; */
  }
  & div:last-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    transition: width 0.5s;
    transition-delay: 0.4s;
    background-color: #9a34ff;
    /* animation: 0.5s last-uline;
    animation-delay: 0.4s;
    animation-fill-mode: both; */
  }
`;

const LineEffect = () => {
  return (
    <Reveal effect="fadeInUp">
      <UnderLine>
        <div></div>
        <div></div>
      </UnderLine>
    </Reveal>
  );
};

export default LineEffect;
