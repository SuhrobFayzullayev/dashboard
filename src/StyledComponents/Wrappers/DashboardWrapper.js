import { Row } from "react-bootstrap";
import styled from "styled-components";

export const DashboardWrapper = styled(Row)`
  display: flex;
  justify-content: space-between;
  padding: 40px 20px;
  .chart-1 {
    background-color: white;
    border-radius: 30px;
    padding: 20px;
    height: fit-content;
    p {
      font-size: 22px;
    }
  }
  .chart-2 {
    position: relative;
    overflow: hidden;
    background-color: white;
    border-radius: 30px;
    padding: 20px;
    height: 370px;
    .mx-auto-legend{
      display: none !important;
    }
    p{
      /* margin: 0; */
    }
    .title {
      margin: 0;
      font-size: 22px;
    }
    .text {
      color: #ACACAC;
      font-size: 14px;
    }

    .total-score {
      position: absolute;
      top: 55%;
      left: 30%;
      p{
        text-align: center;
        padding: 0;
        margin: 0;
        &.score {
          font-size: 25px;
          font-weight: 600;
        }
        &.text{
          font-size: 13px;
        }
      }
    }
  }
`;
