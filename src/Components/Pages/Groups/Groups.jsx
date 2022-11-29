import React, { useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { GroupWrapper } from "../../../StyledComponents/Wrappers/GroupWrapper";
import { AiOutlinePlus } from "react-icons/ai";
import GroupItem from "./GroupItem";
import GroupsForm from "./GroupsForm";
import { Data } from "../../../Data/Data";

export default function Groups() {
  const [todayDate, setTodayDate] = useState("");
  const [groups, setGroups] = useState(Data.groups);
  const [activeGroups, setActiveGroups] = useState(0);

  useEffect(() => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date();
    setTodayDate(
      month[date.getMonth().toString()] +
        ", " +
        date.getDate() +
        ", " +
        date.getFullYear()
    );

    groups.map((v) => (!v.graduate ? setActiveGroups((prev) => prev + 1) : ""));
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <GroupWrapper className="shadow">
      
      <div className="header">
        <p className="title">Guruhlar</p>
        <p className="time">{todayDate}</p>
      </div>
      <div className="information">
        <div className="d-flex justify-content-start align-items-center">
          <div className="total-groups data-group">
            <p>{groups.length}</p>
            <p>Umumiy Guruhlar</p>
          </div>
          <div className="active-groups data-group">
            <p>{activeGroups}</p>
            <p>Faol Guruhlar</p>
          </div>
          <div className="finished-groups data-group">
            <p>{groups.length - activeGroups}</p>
            <p>Tugallangan Guruhlar</p>
          </div>
        </div>

        <Button variant="success" onClick={handleShow}>
          Guruh qo'shish <AiOutlinePlus />
        </Button>
      </div>
      {(show && (
        <GroupsForm
          groups={groups}
          setGroups={setGroups}
          show={show}
          handleClose={handleClose}
          todayDate={todayDate}
        />
      )) || <></>}
      <div className="groups-wrapper">
        {groups.map((v, i) => (
          <GroupItem value={v} key={i} />
        ))}
      </div>
    </GroupWrapper>
  );
}
