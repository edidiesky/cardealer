import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header, Smallsidebar } from "../components";
import Sidebar from "./Sidebar";
const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background-color: #fff;
  .LayoutContainer {
    width: 100%;
    .OutletWrapper {
      overflow: auto;
      height: calc(100vh - 7rem);
      align-items:flex-start;
      border-right:1px solid rgba(0,0,0,.1);
      width:auto;
      .sidebar_wrapper {
        top: 0%;
        height:100%;
        position: sticky;
        overflow: auto;

      }
    }
  }
  h2 {
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
`;

export default function Layout() {
  return (
    <LayoutWrapper>
      {/* <Sidebar /> */}
      {/* <Smallsidebar /> */}
      <div className="LayoutContainer flex column">
        <Header />
        <div className="OutletWrapper flex">
          <div className="sidebar_wrapper">
            <Sidebar/>
          </div>
          <Outlet />
        </div>
      </div>
    </LayoutWrapper>
  );
}
