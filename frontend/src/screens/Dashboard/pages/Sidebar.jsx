import React, { useState } from "react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { ClearUserInfo, ClearauthInfo, ClearBagData } from "../../../Features";
import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdAddBusiness } from "react-icons/md";
import { BsCollection } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const SidebarWrapper = styled.div`
  width: 100%;
  background: var(--white);
  height: 100%;
  overflow: auto;
  border-right: 1px solid rgba(0, 0, 0, 0.09);
  /* min-height: 100%; */

  /* @media (max-width: 480px) {
    display: inline-block;
    position: fixed;
    top: 0;
    left: -100%;
    display: none;
  } */
  .sidebar_top {
    @media (max-width: 1280px) {
      width: 7.7rem;
      height: 7.7rem;
      display: none;
    }
  }
  .profile_image {
    width: 10rem;
    background: #512da7;
    height: 10rem;
    font-size: 4rem;
    border-radius: 50%;
    @media (max-width: 1180px) {
      width: 7.7rem;
      height: 7.7rem;
      display: none;
    }
  }

  .sidebarContainer {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    gap: 2rem;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    .imageWrapper {
      width: 100%;
      padding: 1.6rem 2rem;
      .sidebarIcon {
        height: 5rem;
      }
    }

    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      &.List1 {
        padding-top: 2rem;
        padding-bottom: 0;
        border-top: 1px solid #ccc;
        border-bottom: none;
      }
      h3 {
        color: #777;
        font-size: 1.6rem;
        font-weight: 600;
        width: 100%;
        margin: 1.5rem 0;
        padding: 1rem 0;
        text-align: start;
      }
      .nav-link {
        padding: 10px 30px;
        font-size: 1.36rem;
        min-height: 5rem;
        font-weight: 500;
        margin: 0 auto;
        width: 100%;
        color: rgb(13, 13, 13);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 3rem;
        position: relative;
        @media (max-width: 1180px) {
          padding: 10px 0;
          justify-content: center;
          flex-direction:column;
          gap:1rem;
        }

        span {
          /* @media (max-width: 1180px) {
            display: none;
          } */
        }

        &:hover {
          background: #f9f9f9;
        }
        svg {
          font-size: 2rem;
        }
        &.active {
          /* position: absolute; */
          background: rgb(232 239 249 / 77%);
          color: var(--blue-1);
          &:after {
          position: absolute;
          background:#A435F0;
          width: 4px;
          height: 100%;
          left: 0;
          top: 0;
          content:"";
          }
        }
      }
    }
  }
`;

export const sidebarData = [
  {
    id: 1,
    icon1: <MdDashboard />,
    title: "Dashboard",
    path: "",
  },
  {
    id: 3,
    icon1: <MdAddBusiness />,
    title: "Add Products",
    path: "/create-product",
  },
  { id: 4, icon1: <BsCollection />, title: "Orders", path: "/order" },
  { id: 5, icon1: <HiUsers />, title: "Customers", path: "/customer" },
  { id: 6, icon1: <CgProfile />, title: "Profile", path: "/profile" },
];

export const sidebarData2 = [
  { id: 2, icon1: <FiLogOut />, title: "Log Out", path: "" },
];
export default function Sidebar() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(ClearBagData());
    dispatch(ClearUserInfo());
    dispatch(ClearauthInfo());
    window.location.reload();
  };
  return (
    <SidebarWrapper>
      <div className="sidebarContainer flex item-center  column">
        <div className="w-100 sidebar_top flex item-center justify-center  column gap-1">
          <div className="profile_image flex item-center justify-center text-white fs-30">
            E
          </div>
          <h5 className="fs-16 family1 text-center text-dark text-bold">
            Edidiong Essien
            <span className="fs-13 py-1 text-dark text-light block">
              My Dashboard
            </span>
          </h5>
        </div>
        <div className="list">
          {sidebarData.map((x) => {
            return (
              <NavLink
                className={"nav-link family1 fs-15"}
                activeClassName="active"
                exact={true}
                to={`/car-dealership/dashboard${x.path}`}
                key={x.id}
                end
              >
                {x.icon1}
                <span>{x.title}</span>
              </NavLink>
            );
          })}
        
        </div>

        <div className="list List1">
          {sidebarData2.map((x) => {
            return (
              <div
                className="nav-link family1"
                onClick={handleLogOut}
                key={x.id}
              >
                {x.icon1} <span>{x.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </SidebarWrapper>
  );
}
