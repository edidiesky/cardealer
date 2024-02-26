import React, { useEffect } from "react";
import styled from "styled-components";
import { ToggleSidebar } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";
import { CgMenuRight } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
const HeaderWrapper = styled.div`
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 80px;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  .icon {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.08);
  }
  form {
    padding: 1.2rem 3rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 4.5rem;
    width: 500px;

    background: var(--grey-3);
    @media (max-width: 780px) {
      width: 80%;
    }

    svg {
      font-size: 1.7rem;

      color: var(--grey);
    }

    input {
      flex: 1;
      border: none;
      background: inherit;
      font-size: 1.5rem;
      outline: none;
      height: 100%;
      border: none;
      font-family: "Barlow", sans-serif !important;

      font-weight: 500;
      color: #222;
      font-family: inherit;
      &::placeholder {
        font-size: 1.5rem;
        font-weight: 400;
        color: #333;
      }
    }
  }
  h5 {
    @media (max-width: 580px) {
      display:none;
    }
  }
  .headerContainer {
    width: 95%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    @media (max-width: 380px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
      gap: 2rem;
    }

    .headerLeft {
      display: flex;
      align-items: center;
      gap: 2rem;
      flex: 1;
      justify-content: flex-end;
      @media (max-width: 380px) {
        justify-content: space-between;
        width: 100%;
      }

      .Icon {
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 780px) {
          display: none;
        }
        svg {
          font-size: 3rem;
        }
      }
      .imageIcon {
        width: auto;
        height: 5rem;
      }
    }
    h4 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--dark-1);
      flex: 1;
      text-align: start;
      padding: 0 1rem;
      .span1 {
        display: block;
        color: var(--grey-2);
        font-size: 1.3rem;
        font-weight: 500;
        padding-top: 1rem;
        font-family: "Barlow", sans-serif;
      }
    }
  }
`;

export default function Header({ text, subtext }) {
  const { thememode } = useSelector((store) => store.toggle);
  const { userInfo } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.className = thememode;
    localStorage.setItem("theme", thememode);
  }, [thememode]);
  return (
    <HeaderWrapper>
      <div className="headerContainer">
        <Link to={"/"}>
          <img
            style={{ width: "9rem" }}
            className="imageIcon"
            src="/images/dealer1.png"
            alt="images"
          />
        </Link>

        <div className="flex item-center justify-center w-100">
          <form>
            <TfiSearch />
            <input
              type="text"
              placeholder="Search for car collections"
              name="search"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>

        <div className="headerLeft">
          <div className="flex item-center gap-1">
            <h5 className="fs-14 family1 text-bold">essien@gmail.com</h5>
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                background: "#000",
                color: "#Fff",
              }}
              className="fs-16 text-white flex item-center justify-center"
            >
              {userInfo?.firstname.charAt(0)}
            </div>
          </div>
          <div className="Icon" onClick={() => dispatch(ToggleSidebar())}>
            <CgMenuRight />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}
