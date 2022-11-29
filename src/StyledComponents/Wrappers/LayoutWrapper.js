import { Container } from "react-bootstrap";
import styled from "styled-components";

export const LayoutWrapper = styled(Container)`
  overflow: hidden;
  .left-side {
    padding: 0px;
    height: 100vh;
    position: relative;
    transition: all 0.2s linear;
    &.close-sidebar {
      width: 68px;
    }
    .sidebar-close-btn {
      border: none;
      position: absolute;
      top: 27px;
      right: -13px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      svg {
        transform: rotateZ(90deg);
      }
    }

    .logo {
      a {
        padding: 0 !important;
        margin-left: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center !important;

        p {
          position: relative;
          z-index: 2;
          margin-top: 20px !important;
          color: black;
          font-weight: bold;
          font-size: 20px;
        }

        img {
          transition: all 0.4s linear;
          margin-left: -4px;
        }
      }
    }

    .list-group {
      margin: 10px 0;
      padding: 0 10px;
      border-radius: 0;
      a {
        border: none;
        border-radius: 8px;
        color: #9197b3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0;
        padding: 10px 8px;
        &:hover {
          background-color: #fafbff;
          /* color: unset; */
        }
        &.active {
          background-color: #5932ea;
          color: white;
          &:hover {
            /* background-color: #5932EA;
            color: white; */
          }
          .link-logo {
            border-color: white;
            color: white;
          }

          .arrow {
            display: none;
          }
        }

        .link-logo {
          border: 2px solid #9197b3;
          margin-right: 8px;
          font-size: 22px;
          border-radius: 8px;
          padding: 2px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #9197b3;
        }

        .link-text {
          margin-top: 1px;
        }

        .arrow {
          transform: rotateZ(90deg);
        }
      }
    }
  }

  .right-side {
    padding: 0 40px;
    background-color: #fafbff;
    flex: 1;
    .header {
      margin: 10px 0;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 24px;
      }

      .right-section {
        display: flex;
        align-items: center;
        .input-group {
          margin-top: 15px;
          width: 227px;
          border-radius: 10px;
          background: #f9fbff;
          overflow: hidden !important;
          background-color: white;
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
        svg {
          color: #7E7E7E;
          font-size: 25px;
          margin: 0 10px;
        }
      }
    }
  }
`;
