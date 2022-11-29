import React, { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const initialValue = {
  groupName: "",
  numberOfStudents: "",
  numberOfTeachers: "",
  averageChange: "",
  graduate: "",
  time: "",
};

export default function GroupsForm({
  show,
  handleClose,
  setGroups,
  groups,
  todayDate,
}) {
  const [value, setValue] = useState(initialValue);
  const [active, setActive] = useState(false);

  const addGroup = (e) => {
    e.preventDefault();
    setValue((prev) => {
      prev.time = todayDate;
      prev.graduate = active;
    });
    const copy = [...groups];
    copy.push(value);
    setGroups(copy);

    setValue(initialValue);
  };

  const changeValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Yangi guruh yaratish</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => addGroup(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              type="text"
              placeholder="Guruh nomini kiriting..."
              value={value.groupName}
              name="groupName"
              onChange={(e) => changeValue(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              type="number"
              placeholder="O'quvchilar sonini raqamda kiriting..."
              value={value.numberOfStudents}
              onChange={(e) => changeValue(e)}
              name="numberOfStudents"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="number"
              required
              placeholder="O'rtacha o'rgarishlarni raqamda kiriting..."
              value={value.averageChange}
              onChange={(e) => changeValue(e)}
              name="averageChange"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="number"
              required
              placeholder="O'qituvchilar sonini raqamda kiriting..."
              value={value.numberOfTeachers}
              onChange={(e) => changeValue(e)}
              name="numberOfTeachers"
            />
          </Form.Group>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Guruh tugatilganmi..."
            name="status"
            onChange={(e) => setActive(e.target.checked)}
          />
          <div className="d-flex justify-content-end align-items-center">
            <Button variant="primary" type="submit" className="mx-2">
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
