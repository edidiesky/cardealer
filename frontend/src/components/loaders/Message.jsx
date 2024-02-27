import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
export default function Message({
  showAlert,
  alertText,
  alertType,
  handleClearAlert,
}) {
  // dispatch
  const dispatch = useDispatch();

  return (
    <MessageContent
      className={
        showAlert
          ? "gap-1 flex item-center justify-space active"
          : "gap-1 flex item-center justify-space"
      }
    >
      <div className="flex w-100 item-center gap-1">
        {alertType === "danger" && (
          <CgDanger className="fs-24" color={"#bd162d"} />
        )}
        <h5 className={alertType === 'danger'? "flex active":"flex"}>{alertText}</h5>
      </div>
      <div className="flex-1">
        <div
          className="icon1 flex item-center justify-center"
          onClick={() => dispatch(handleClearAlert())}
        >
          <RxCross1 />
        </div>
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 300px;
  padding: 1rem 1.6rem;
  min-height: 6rem;
  box-shadow: var(--shadow);
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12) !important;
  background-color: #fff;
  position: fixed;
  font-family: "Barlow", sans-serif;

  z-index: 10000;
  left: 2%;
  border-radius: 2px;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--dark-1);
  transition: all 0.6s;
  top: 2%;
  left: 50%;
  transform: translate(-50%, -1000%);
  opacity: 0;
  visibility: hidden;

  top: -5%;

  &.active {
    top: 5%;
    transform: translateX(-50%);
    opacity: 1;
    visibility: visible;
  }
  &.danger {
    background-color: #bd162d;
    color: #fff;
    border-left: 4px solid var(--red);
  }
  h5 {
    font-size: 1.35rem;
    &.active {
      color: #bd162d;
    }
  }
  @media (max-width: 780px) {
    min-width: 200px;
    justify-content: flex-start;
    font-size: 1.3rem;
  }
  @media (max-width: 480px) {
    min-width: 200px;
    justify-content: flex-start;
    padding: 1rem 2rem;
  }
  .flex1 {
    flex: 1;
  }
  .icon {
    width: 1.6rem;
    height: 1.6rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: #f5f5f5;
    cursor: pointer;
    &:hover {
      background-color: var(--grey-1);
      svg {
        color: #fff;
      }
    }
    svg {
      width: 50%;
      height: 50%;
      color: var(--dark-1);
    }
  }
`;
