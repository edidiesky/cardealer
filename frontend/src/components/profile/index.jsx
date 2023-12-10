import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Orders from "./Orders";
export default function ProfileIndex() {
  return (
    <ProfileIndexContainer>
      <div className="profileIndexWrapper">
        <div className="flex-1">
          <Form />
        </div>
        <div className="flex-1">
          <Orders />
        </div>
      </div>
    </ProfileIndexContainer>
  );
}

const ProfileIndexContainer = styled.div`
  width: 100%;

  .profileIndexWrapper {
    width: 100%;
    display: flex;
    gap: 3rem;
    flex-direction: column;

    padding-top: 6rem;
    @media (max-width: 780px) {
      padding-top: 3rem;
      flex-direction: column;
    }
  }
`;
