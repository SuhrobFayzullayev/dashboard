import React from "react";
import { Card } from "react-bootstrap";

export default function GroupItem({ value }) {
  return (
    <Card className={`is-finished-${value.graduate}`}>
      <Card.Body>
        <Card.Text className="text">{value.time}</Card.Text>

        <Card.Title className="title">{value.groupName}</Card.Title>
        <Card.Text className="text">
          O'quvchilar soni : {value.numberOfStudents}
        </Card.Text>
        <div className="progress-wrapper">
          <p>O'rtacha o'zgarishlar</p>
          <div className="progress">
            <div
              className="percent"
              style={{ width: value.averageChange + "%" }}
            ></div>
          </div>
          <p className="number-precent">{value.averageChange} %</p>
        </div>
        <Card.Text className="text">
          O'qituvchilar soni : {value.numberOfStudents}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
