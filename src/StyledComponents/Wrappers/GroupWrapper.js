import { Row } from "react-bootstrap";
import styled from "styled-components";

export const GroupWrapper = styled(Row)`
  background-color: white;
  padding: 10px 30px;
  border-radius: 40px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
      padding: 0;
    }
  }

  .information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    > div div {
      width: 150px;
      p {
        margin: 0;
        padding: 0;
        &:nth-child(1) {
          font-size: 26px;
        }
        &:nth-child(2) {
          font-size: 14px !important;
          color: #838383;
        }
      }
    }

    .input-group {
      position: relative;
      &.empty {
        .empty-text {
          display: block;
        }
      }
      input {
        box-shadow: none;
      }
      .input-group-text {
        cursor: pointer;
        background-color: #55cb8b;
        color: white;
        font-size: 22px;
      }

      .error-text {
        position: absolute;
        top: 38px;
        left: 5px;
        color: red;
        font-size: 15px;
        display: none;

        &.same-text {
          display: block;
        }
      }
    }
  }

  .groups-wrapper {
    padding: 30px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .card {
      margin: 10px auto;
      border: none;
      width: 32%;
      border-radius: 25px;
      background-color: #fee4cb;
      &.is-finished-true {
        background-color: #dbf6fd;
      }

      .text {
        font-size: 12px;
        color: #6f6f6f;
      }
      .title {
        font-size: 22px;
        font-weight: 700;
      }

      .progress-wrapper {
        .progress {
          height: 4px !important;
          .percent {
            background-color: #ff942e;
          }
        }
        .number-precent {
          text-align: right;
        }
      }
    }
  }
`;
