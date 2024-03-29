import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
export default function Links({
  handleAddressDetails,
  index,
  setIndex,
  type,
  step1,
  step2,
  step3,
}) {
  const { addressData } = useSelector((store) => store.user);

  if (type === "Details") {
    return (
      <LinkContainer>
        <div
          onClick={() => setIndex(0)}
          className={
            index === 0 ? "nav-link family1 active" : "nav-link family1"
          }
        >
          {step1}
        </div>
        <div
          onClick={() => setIndex(1)}
          className={
            index === 1 ? "nav-link family1 active" : "nav-link family1"
          }
        >
          {step2}
        </div>
        <div
          onClick={() => setIndex(2)}
          className={
            index === 2 ? "nav-link family1 active" : "nav-link family1"
          }
        >
          {step3}
        </div>
      </LinkContainer>
    );
  }
  return (
    <LinksContainer>
      <div
        onClick={() => setIndex(0)}
        className={index === 0 ? "nav-link family1 active" : "nav-link family1"}
      >
        Billing Details
      </div>
      <form
        onClick={(e) => handleAddressDetails(e, "payment")}
        className={
          index === 1 ? "nav-link family1 active" : "nav-link family1 disable"
        }
      >
        Review Payment
      </form>
    </LinksContainer>
  );
}

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;

  @media (max-width: 780px) {
    flex-direction: row;
    gap: 0;
    align-items: center;
  }
  @media (max-width: 780px) {
    font-size: 2.4rem;
  }
  .nav-link {
    background: transparent;
    font-size: 1.8rem;
    font-weight: 400;
    padding: 1.4rem;
    color: var(--blue-2);
    cursor: pointer;
    &.disable {
      z-index: -1;
      &:hover {
        color: red;
      }
    }
    @media (max-width: 780px) {
      border-bottom: none;
      font-size: 1.5rem;
      flex: 1;
      text-align: center;
      padding: 1rem 0;
    }
    &.active {
      color: var(--red);
      background-color: #fff;
    }

    &:hover {
      color: var(--red);
      background-color: #ffffff72;
    }
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  &.details {
    flex-direction: row;
    .nav-link {
      padding: 1.4rem 0;
      border: none;
      outline: none;
      width: 100%;
      text-align: center;
      background: transparent;
      font-size: 1.68rem;
      font-weight: 400;
      color: var(--dark-1);
      cursor: pointer;
      @media (max-width: 780px) {
        border-bottom: none;
        font-size: 1.8rem;
        flex: 1;
        text-align: center;
        padding: 1rem 0;
      }
      &.active {
        color: var(--red);
      }
    }
  }
  @media (max-width: 780px) {
    flex-direction: row;
    gap: 0;
    align-items: center;
  }
  .nav-link {
    padding: 1.4rem 0;
    border: none;
    outline: none;
    width: 100%;
    text-align: start;
    border-bottom: 1px solid var(--grey-2);
    background: transparent;
    font-size: 1.68rem;
    font-weight: 400;
    color: var(--dark-1);
    cursor: pointer;
    @media (max-width: 780px) {
      border-bottom: none;
      font-size: 1.9rem;
      flex: 1;
      text-align: center;
      padding: 1rem 0;
    }
    &.active {
      color: var(--red);
    }
  }
`;
