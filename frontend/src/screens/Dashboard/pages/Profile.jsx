import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/forms";
import { Links, Header, Alert } from "../components";

import { useDispatch, useSelector } from "react-redux";
import {
  UpdateProfile,
  getSingleCustomer,
  clearUserAlertError,
} from "../../../Features";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";
import { inputData } from "../../../data/formdata";

export default function Profile() {
  // getting the userinfo

  // user's state
  const {
    userDetails,
    userInfo,
    isLoading,
    alertType,
    alertText,
    showAlert,
  } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getSingleCustomer(userInfo?._id));
  }, [userInfo?._id]);

  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
    isAdmin: "",
    phone: "",
    city: "",
    address: "",
  });

  useEffect(() => {
    if (userDetails) {
      const {
        firstname,
        lastname,
        email,
        country,
        isAdmin,
        phone,
        city,
        address,
      } = userDetails;
      setFormData({
        firstname,
        lastname,
        email,
        country,
        isAdmin,
        phone,
        city,
        address,
      });
    }
  }, [setFormData, userDetails]);

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // handling the users profile update
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    dispatch(UpdateProfile(formdata));
  };

  // navigate back to the user dashboard when update is successfull
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 4000);
    }
  }, [dispatch, showAlert]);

  return (
    <>
      <Message
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearUserAlertError}
      />
      {isLoading && <LoaderIndex loading={isLoading} />}
      {/* <Header text={"My Profile"} /> */}
      <ProfileContainer>
        <div className="profileWrapper">
          <div className="profile_top w-100">
            <h3 className="fs-24 text-dark">My Profile
            <span style={{marginTop:"2rem"}} className="fs-14 family1 block text-dark text-light">Make changes to your profile such as your name, 
            
            lastname, email,
            password etc.</span>
            </h3>
          </div>
          <form className="profileForm" onSubmit={handleUpdateUserProfile}>
            <div className="profileFormBottom">
              {inputData.slice(0, 6).map((input) => {
                return (
                  <Input
                    id={input.text}
                    onChange={onChange}
                    placeholder={input.placeholder}
                    type={input.type}
                    name={input.name}
                    value={formdata[input.name]}
                    input={input}
                    key={input.id}
                    required={input.required}
                    pattern={input.pattern}
                    errorMessage={input.errorMessage}
                  />
                );
              })}
            </div>
            <div className="ProfileBottom">
              <h3>Personal Address</h3>
              <div className="profileFormBottom">
                {inputData.slice(6, 9).map((input) => {
                  return (
                    <Input
                      id={input.text}
                      onChange={onChange}
                      placeholder={input.placeholder}
                      type={input.type}
                      name={input.name}
                      value={formdata[input.name]}
                      input={input}
                      key={input.id}
                      required={input.required}
                      pattern={input.pattern}
                      errorMessage={input.errorMessage}
                    />
                  );
                })}
              </div>
            </div>
            <div className="btnWrapper">
              <button type="submit" className="editBtn">
                Edit Profile
              </button>
            </div>
          </form>
        </div>
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.div`

  width: 100%;

  .profile_top {
    padding: 0 3rem;
    padding-top: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    span {
      padding: 1rem 0;
    }
  }
  .profileWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    .EditProfileWrapperTopLeft {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      h3 {
        font-size: 2rem;
        color: var(--text-color);
        font-weight: 700;
        text-transform: uppercase;
        font-family: "Barlow", sans-serif;
      }
    }
    .profileForm {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 3.7rem;
      background: var(--white);
      /* border: 1px solid rgba(0, 0, 0, 0.2); */
      border-radius: 6px;
      flex-direction: column;
      .btnWrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 2rem 0;
      }
      .ProfileBottom {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        padding: 2.4rem 0;
        h3 {
          font-size: 1.8rem;
          color: var(--text-color);
          font-weight: 700;
          text-transform: uppercase;
          font-family: "Barlow", sans-serif;
        }
      }
      .profileFormBottom {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 3rem;
        padding: 0.4rem 0;
        @media (max-width: 780px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;
