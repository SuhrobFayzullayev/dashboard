import { Row } from "react-bootstrap";
import styled from "styled-components";

export const StudentWrapper = styled(Row)`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 25px;
    overflow: hidden;
    padding: 10px !important;
    .students-data {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .img-wrapper {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 50%;
        }
      }

      .right-side {
        background-color: white;
        padding: 5px 10px;
        p {
          margin: 0;
          padding: 0;
        }
        .text {
          font-size: 12px !important;
          color: #acacac;
        }
        .number {
          font-size: 26px !important;
        }
      }
    }
  }
  .table-content {
    background-color: white;
    margin: 20px 0;
    border-radius: 30px;
    padding: 20px;
    .table-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      height: 100px;
      .title {
        font-size: 22px;
      }
      .text {
        font-size: 14px;
        color: #16c098;
      }
      .right-side {
        height: 50px;
        background-color: white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0;
        button {
          margin-top: 3px;
          margin-right: 10px;
          height: 35px;
          background: rgba(22, 192, 152, 0.38);
          border: 1px solid #00b087;
          border-radius: 4px;
          color: #008767;
          svg {
            margin-left: 5px;
            margin-top: -4px;
            font-size: 25px;
          }
        }
        .input-group {
          margin-top: 20px;
          width: 227px;
          border-radius: 10px;
          background: #f9fbff;
          overflow: hidden !important;
          input,
          .input-group-text {
            background-color: transparent;
            box-shadow: none;
            border: none;
            svg {
              font-size: 20px;
            }
          }
        }
      }
    }

    .table-main {
      table {
        thead tr {
          color: #b5b7c0;
          font-size: 13px;
          font-style: normal;
        }
        tbody tr {
          color: #292d32;
          font-size: 13px !important;
          font-weight: 200 !important;
          th {
            position: relative;
            button {
              top: 5px;
              left: -5px;
              position: absolute;
              background: rgba(22, 192, 152, 0.38);
              border: 1px solid #00b087;
              border-radius: 4px;
              color: #008767;

              &.in-active {
                background: #ffc5c5;
                color: #df0404;
                border-color: #df0404 ;
              }
            }
          }
        }
      }
    }
  }
`;
