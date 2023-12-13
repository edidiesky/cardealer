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
  width: 28rem;
  background: var(--white);
  height: 100%;
  overflow: auto;
  border-right: 1px solid rgba(0, 0, 0, 0.09);
  /* min-height: 100%; */

  @media (max-width: 480px) {
    display: inline-block;
    position: fixed;
    top: 0;
    left: -100%;
    display: none;
  }
  .profile_image {
    width: 10rem;
    background: #512da7;
    height: 10rem;
    font-size:4rem;
    border-radius: 50%;
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
        height: 5rem;
        font-weight: 500;
        margin: 0 auto;
        width: 100%;
        color: rgb(13, 13, 13);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 3rem;
        position: relative;

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
          /* width: 4px;
          height: 100%;
          left: 0;
          top: 0; */
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
    path: "create-product",
  },
  { id: 4, icon1: <BsCollection />, title: "Orders", path: "order" },
  { id: 5, icon1: <HiUsers />, title: "Customers", path: "customer" },
  { id: 6, icon1: <CgProfile />, title: "Profile", path: "profile" },
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
        <div className="w-100 flex item-center justify-center  column gap-1">
          <div className="profile_image flex item-center justify-center text-white fs-30">
            E
          </div>
          <h5 className="fs-16 family1 text-center text-dark text-bold">
            Edidiong Essien
            <span className="fs-12 py-1 text-dark text-light block">
              Your Dashboard
            </span>
          </h5>
        </div>
        <div className="list">
          {sidebarData.map((x) => {
            return (
              <NavLink
                className="nav-link family1"
                activeClassName="active"
                to={`/car-dealership/dashboard/${x.path}`}
                key={x.id}
              >
                {x.icon1}
                {x.title}
              </NavLink>
            );
          })}
        </div>

        <div className="list List1">
          {sidebarData2.map((x) => {
            return (
              <div className="nav-link family1" onClick={handleLogOut} key={x.id}>
                {x.icon1} {x.title}
              </div>
            );
          })}
        </div>
      </div>
    </SidebarWrapper>
  );
}
