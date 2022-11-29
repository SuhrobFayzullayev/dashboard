import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { StudentWrapper } from "../../../StyledComponents/Wrappers/StudentWrapper";
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import StudentsForm from "./StudentsForm";
import { Data } from "../../../Data/Data";

export default function Students() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(Data.students);
  const [activeStudents, setActiveStudents] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    data.map((v) => (v.status ? setActiveStudents((prev) => prev + 1) : ""));
  }, []);

  return (
    <StudentWrapper>
      <div className="header shadow-sm students-statistics">
        <div className="all-students students-data">
          <div className="img-wrapper" style={{ backgroundColor: "#DFFFEE" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dashboard-cb9b7.appspot.com/o/Screenshot%20(200).png?alt=media&token=d75f33b8-6ab6-4a53-a6ae-f5dc49fc7ad9"
              alt=""
            />
          </div>
          <div className="right-side">
            <p className="text">Hamma o'quvchilar</p>
            <p className="number">{data.length} ta</p>
            <p className="icon"></p>
          </div>
        </div>
        <div className="graduated-students students-data">
          <div className="img-wrapper" style={{ backgroundColor: "#DFFFEE" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dashboard-cb9b7.appspot.com/o/Screenshot%20(202).png?alt=media&token=35ee764f-a759-429b-9bac-f16a0cea3b35"
              alt=""
            />
          </div>
          <div className="right-side">
            <p className="text">Bitirgan o'quvchilar</p>
            <p className="number">{10} ta</p>
            <p className="icon"></p>
          </div>
        </div>
        <div className="left-students students-data">
          <div className="img-wrapper" style={{ backgroundColor: "#FFBFE4" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dashboard-cb9b7.appspot.com/o/Screenshot%20(205).png?alt=media&token=10396e8b-d0ca-4dac-9b08-aa553506e070"
              alt=""
            />
          </div>
          <div className="right-side ">
            <p className="text">Ketgan o'quvchilar</p>
            <p className="number">{data.length - activeStudents} ta</p>
            <p className="icon"></p>
          </div>
        </div>
        <div className="active-students students-data">
          <div className="img-wrapper" style={{ backgroundColor: "#DCFFEC" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dashboard-cb9b7.appspot.com/o/Screenshot%20(207).png?alt=media&token=7afdd857-6a29-48cb-b578-f76b6e399018"
              alt=""
            />
          </div>
          <div className="right-side">
            <p className="text">Faol o'quvchilar</p>
            <p className="number">{activeStudents} ta</p>
            <p className="icon"></p>
          </div>
        </div>
      </div>
      <div className="shadow-sm table-content">
        <div className="table-header">
          <div className="left-side">
            <p className="title">Hamma o'quvchilar</p>
            <p className="text">Faol o'quvchilar</p>
          </div>
          <div className="right-side">
            <Button variant="success" onClick={handleShow}>
              O'quvchi qo'shish <AiOutlinePlus />
            </Button>
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
        <div className="table-main p-0">
          <Table>
            <thead>
              <tr>
                <th>F.I.O</th>
                <th>Yo'nalish</th>
                <th>Telefon nomer</th>
                <th>To'lov</th>
                <th>Guruh</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => (
                <tr key={i}>
                  <th>{v.name}</th>
                  <th>{v.direction}</th>
                  <th>{v.phone}</th>
                  <th>{v.pay} 000 so'm</th>
                  <th>{v.group}</th>
                  <th>
                    {(v.status && (
                      <Button variant="success py-0">Active</Button>
                    )) || (
                      <Button variant="danger in-active py-0">InActive</Button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      {(show && (
        <StudentsForm
          data={data}
          setData={setData}
          show={show}
          handleClose={handleClose}
        />
      )) || <></>}
    </StudentWrapper>
  );
}
