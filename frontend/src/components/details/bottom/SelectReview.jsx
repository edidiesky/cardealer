import React, { useState } from "react";
import styled from "styled-components";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getRating, createReviewProduct } from "../../../Features";
export default function SelectReview() {
  const { rating } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  return (
    <SelectReviewContainer>
      <div className="selectReviewWrapper">
        <div
          className={
            rating >= 1 ? "selectContent w-100 active" : "selectContent w-100"
          }
          onClick={() => dispatch(getRating(1))}
        >
          1
          <span className="selectSpan">
            {rating >= 1 ? (
              <>
                <BsStarFill />
              </>
            ) : (
              <>
                <BsStarFill />
              </>
            )}
          </span>
        </div>
        <div
          className={
            rating >= 2 ? "selectContent w-100 active" : "selectContent w-100"
          }
          onClick={() => dispatch(getRating(2))}
        >
          2
          <span className="selectSpan">
            {rating >= 2 ? (
              <>
                <BsStarFill />
                <BsStarFill />
              </>
            ) : (
              <>
                <BsStarFill />
                <BsStarFill />
              </>
            )}
          </span>
        </div>
        <div
          className={
            rating >= 3 ? "selectContent w-100 active" : "selectContent w-100"
          }
          onClick={() => dispatch(getRating(3))}
        >
          3
          <span className="selectSpan">
            {rating >= 3 ? (
              <>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </>
            ) : (
              <>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </>
            )}
          </span>
        </div>
        <div
          className={
            rating >= 4 ? "selectContent w-100 active" : "selectContent w-100"
          }
          onClick={() => dispatch(getRating(4))}
        >
          4
          <span className="selectSpan">
            {rating >= 4 ? (
              <>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </>
            ) : (
              <>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </>
            )}
          </span>
        </div>
        <div
          className={
            rating >= 5 ? "selectContent w-100 active" : "selectContent w-100"
          }
          onClick={() => dispatch(getRating(5))}
        >
          5
          <span className="selectSpan">
            {rating >= 5 ? (
              <>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </>
            ) : (
              <>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </>
            )}
          </span>
        </div>
      </div>
    </SelectReviewContainer>
  );
}

const SelectReviewContainer = styled.div`
  width: 100%;
  .selectReviewWrapper {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (max-width:780px) {
      flex-wrap: wrap;
    }
    .selectContent {
      padding: 1rem 1.5rem;
      background: #f9f9f9;
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      justify-content: space-between;
      font-weight: 600;
      color: var(--dark-1);
      transition: all 0.2s;
      gap: 1rem;
      border-radius: 6px;
      &.active {
        background-color: #ececec;
        .selectSpan {
          svg {
            color: #999999;
          }
        }
      }
      .selectSpan {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        gap: 0.3rem;
        font-weight: 600;

        svg {
          color: #999999;
          font-size: 1rem;
          transition: all 0.2s;
        }
      }
    }
  }
`;
