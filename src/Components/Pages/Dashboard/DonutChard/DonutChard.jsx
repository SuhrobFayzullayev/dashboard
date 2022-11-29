import React from "react";
import { Col } from "react-bootstrap";
import DonutChart from "react-donut-chart";

const reactDonutChartdata = [
  {
    label: "Ketganlar",
    value: 25,
    color: "#ffffff",
  },
  {
    label: "Bitirganlar",
    value: 65,
    color: "#FEB019",
  },
  {
    label: "O'qimoqda",
    value: 25,
    color: "#FF4560",
  },
];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;

let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};
export default function DonutChard() {
  return (
    <Col md={4} className="chart-2">
      <p className="title">O'quvchilar</p>
      <p className="text">Guruhdagi o'quchilar guruhi </p>
      <div className="total-score">
        <p className="score">65%</p>
        <p className="text">Umimiy o'quvchilar</p>
      </div>
      <DonutChart
        className="mx-auto"
        width={400}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
    </Col>
  );
}
