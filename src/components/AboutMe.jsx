import React from "react";
import UnderLine from "./UnderLineEffect";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="about-content">
        <h2>
          O MNIE
          <UnderLine />
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo
          officia neque veniam amet dolore consectetur, sed praesentium cumque
          quaerat vero culpa impedit ex officiis sequi modi molestiae?
          Recusandae, amet! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quis nemo officia neque veniam amet dolore consectetur, sed
          praesentium cumque quaerat vero culpa impedit ex officiis sequi modi
          molestiae? Recusandae, amet!
        </p>
      </div>
      <div className="about-image">
        <svg
          id="avatar"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="none"
          viewBox="0 0 247 230"
        >
          <path
            fill="#F6F6F6"
            d="M6.178 107.74C-12.14 75.685 11.582 31.941 60.083 9.441 100.583-9.347 163.428 29.492 198 76c34.753 46.752 76.5 100 23 151-37.115 35.38-114.744 22.151-124.5-18-13-53.5-62.322-52.26-90.322-101.26z"
          ></path>
          <path
            fill="url(#pattern0)"
            d="M48.606 69C64 28 69 .745 128.707.745c61.837 0 92.231 25.462 110.5 86.5C253.5 135 222 180 199 195.5 169.063 215.675 98.86 269.059 41.606 175c-14-23-6.552-69.908 7-106z"
          ></path>
          <defs>
            <pattern
              id="pattern0"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use
                transform="translate(-.472) scale(.00101)"
                xlinkHref="#image0"
              ></use>
            </pattern>
            <image
              id="image0"
              width="1920"
              height="1080"
              href="./assets/avatar.jpg"
            ></image>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AboutMe;
