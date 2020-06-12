import React, { useState } from "react";
import styled from "styled-components";

const NavItemsOverlay = styled.div`
  position: absolute;
  right: 40px;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ open }) => {
    return open ? "orange" : "transparent";
  }};
  transition: 0.4s;
  box-shadow: ${({ open }) => {
    return open
      ? "40px 50px 0px 250px rgba(102, 116, 221, 0.9), 55px 60px 0px 270px rgba(102, 116, 221, 0.5)"
      : "0px 0px #7F2FE0";
  }};

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ScollLinks = styled.div`
  position: absolute;
  display: flex;
  visibility: ${({ open }) => {
    return open ? "visible" : "hidden";
  }};
  opacity: ${({ open }) => {
    return open ? "1" : "0";
  }};
  align-items: center;
  flex-direction: column;
  top: 80px;
  right: 20px;
  z-index: 100;
  text-align: center;

  @media (min-width: 1024px) {
    position: relative;
    top: auto;
    right: auto;
    display: flex;
    flex: 1;
    visibility: visible;
    opacity: 1;
    justify-content: flex-end;
    flex-direction: row;
  }

  a {
    position: relative;
    color: white;
    font-size: 20px;
    margin: 8px 0;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      width: 0px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      border-radius: 9px;
      height: 1px;
      transition: 0.3s;
    }
    &:hover::after {
      width: 100%;
    }

    &[data-cls~="active"]::after {
      width: 100%;
    }

    @media (min-width: 1024px) {
      margin: 0px 15px;

      &:last-child {
        margin-right: 30px;
      }

      &::before {
        content: attr(data-hover);
        position: absolute;
        box-sizing: border-box;
        left: 0;
        bottom: 0;
        height: 0px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
        color: pink;
        transition: 0.5s;
      }

      &:hover::before {
        height: 100%;
      }

      &[data-cls~="active"]::before {
        height: 100%;
      }
    }
  }
`;

const NavItems = (props) => {
  const items = [
    {
      name: "Home",
      section: "hero-container",
    },
    {
      name: "O Mnie",
      section: "about",
    },
    {
      name: "Technologie",
      section: "",
    },
    {
      name: "Portfolio",
      section: "",
    },
    {
      name: "Kontakt",
      section: "",
    },
  ];

  const [activeItem, setActive] = useState(0);

  return (
    <>
      {/* <NavItemsOverlay open={props.open} />

      <ScollLinks open={props.open}>
        {items.map((item, index) => {
          return (
            <CSSTransition
              in={props.open}
              key={index}
              timeout={{
                enter: 100 * index,
                exit: 0,
              }}
              classNames="fade"
            >
              <Link
                to={item.section}
                smooth={true}
                duration={500}
                data-hover={item.name}
                data-cls={activeItem === index ? " active" : ""}
                onClick={() => setActive(index)}
              >
                {item.name}
              </Link>
            </CSSTransition>
          );
        })}
      </ScollLinks> */}
    </>
  );
};

export default NavItems;
