import React, { useState } from "react";
import { Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { LayoutWrapper } from "../../StyledComponents/Wrappers/LayoutWrapper";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineCube, HiOutlineKey } from "react-icons/hi";
import { IoIosArrowUp, IoMdNotificationsOutline } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";

import { CiDark, CiSearch } from "react-icons/ci";

const links = [
  {
    text: "Dashboard",
    logo: <HiOutlineKey />,
  },
  {
    text: "Groups",
    logo: <HiOutlineCube />,
  },
  {
    text: "Students",
    logo: <AiOutlineUser />,
  },
];
export default function Layout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <LayoutWrapper fluid="xl" className="border">
      <Row>
        <Col
          lg={3}
          className={`left-side shadow ${
            (!openSidebar && "close-sidebar") || ""
          }
          }`}
        >
          <button
            onClick={() =>
              setOpenSidebar((prev) => (prev == true ? false : true))
            }
            className="sidebar-close-btn"
          >
            <IoIosArrowUp className="arrow" />
          </button>
          <div className="logo">
            <NavLink to="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/dashboard-cb9b7.appspot.com/o/logo.png?alt=media&token=29168dad-4d9e-4a51-bc7a-0f2e876414ad"
                alt=""
              />
              {openSidebar && <p className="logo-text">Dashboard</p>}
            </NavLink>{" "}
          </div>
          <ListGroup>
            {links.map((v, i) => (
              <NavLink
                key={v.text + i}
                to={`${v.text == "Dashboard" ? "" : v.text.toLowerCase()}`}
                className="list-group-item"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <div className="link-logo">{v.logo}</div>
                  {(openSidebar && (
                    <div className="link-text">{v.text}</div>
                  )) || <></>}
                </div>
                {(openSidebar && <IoIosArrowUp className="arrow" />) || <></>}
              </NavLink>
            ))}
          </ListGroup>
        </Col>
        <Col lg={9} className="right-side">
          <div className="header">
            <div className="title">Hi, Suhrob 👋🏼,</div>
            <div className="right-section">
              <CiDark />
              <BsFillPlusCircleFill />
              <IoMdNotificationsOutline />
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <CiSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Qidiruv..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  type="text"
                />
              </InputGroup>
            </div>
          </div>
          <div className="main">
            <Outlet />
          </div>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
