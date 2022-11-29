import React, {  useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const initialValue = {
  name: "",
  direction: "",
  phone: "",
  pay: "",
  group: "",
  status: false,
};

export default function StudentsForm({ show, handleClose, setData, data }) {
  const [value, setValue] = useState(initialValue);
  const [active, setActive] = useState(false)

  const addStudent = (e) => {
    e.preventDefault();

    setValue(prev => prev.status = active)
    const copy = [...data];
    copy.push(value);
    setData(copy);

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
        <Modal.Title>Yangi Student qo'shish</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => addStudent(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              type="text"
              placeholder="Toliq Ism Familingizni va Otangiz ismini kiriting..."
              value={value.name}
              name="name"
              onChange={(e) => changeValue(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              type="text"
              placeholder="Yo'nalish"
              value={value.direction}
              onChange={(e) => changeValue(e)}
              name="direction"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              placeholder="Telefon raqamingizni kiriting..."
              value={value.phone}
              onChange={(e) => changeValue(e)}
              name="phone"
              type="number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              placeholder="Qancha tolov qilmoqchisiz..."
              value={value.pay}
              onChange={(e) => changeValue(e)}
              name="pay"
              type="number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              placeholder="Qaysi guruhga kirmoqchisiz..."
              value={value.group}
              onChange={(e) => changeValue(e)}
              name="group"
            />
          </Form.Group>

          <Form.Check
            type="switch"
            id="custom-switch"
            label="Aktiv o'quvchimisiz..."
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
