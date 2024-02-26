import React, { useState } from "react";
import styled from "styled-components";
import { AiFillWarning } from "react-icons/ai";

export default function Input({ id, onChange, errorMessage, ...props }) {
  const [touched, setTouched] = useState(false);
  const handleTouch = () => {
    setTouched(true);
  };
  return (
    <LabelContainer htmlFor={id} className="family1">
      {id}
      <input
      className='input'
        {...props}
        onBlur={handleTouch}
        onFocus={() => (props.name === "password2" ? setTouched(true) : "")}
        focused={touched.toString()}
        onChange={onChange}
      />
    </LabelContainer>
  );
}

const LabelContainer = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.5rem;
  color: var(--dark-1);
  font-weight: 600;
  text-transform: capitalize;

  input {

    &::placeholder {
      font-size: 1.4rem;
      /* font-family: "Barlow", sans-serif; */
    }
    &:focus {
      border: 1.7px solid #222;
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: flex;
    }
    &:invalid[focused="true"] {
      border-bottom: 2px solid var(--red);
    }
    &:valid[focused="true"] {
      border-left: 3px solid var(--green);
    }
  }

  span {
    font-size: 1.2rem;
    color: #c61212;
    font-weight: 600;
    display: none;
  }
`;
