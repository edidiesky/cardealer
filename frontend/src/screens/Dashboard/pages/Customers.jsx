import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Pagination, Header, TableCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "./styles";
import {
  handleUserSearch,
  getAllCustomer,
  clearUserAlertError,
} from "../../../Features";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";

export default function Customers() {
  // getting the userinfo

  // user's state
  const {
    isLoading,
    users,
    isError,
    isSuccess,
    alertType,
    alertText,
    userpage,
    totalUser,
    usernoOfpage,
    showAlert,
  } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getAllCustomer());
  }, [userpage]);

  useEffect(() => {
    if (showAlert || isError) {
      setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 4000);
    }
  }, [showAlert, dispatch, isError]);

  // Search functionality
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(handleUserSearch(search));
    if (!search) {
      dispatch(getAllCustomer());
    }
  }, [search, dispatch]);

  return (
    <>
      <Message
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearUserAlertError}
      />
      {isLoading && <LoaderIndex loading={isLoading} />}

      <CustomersContainer>
        <div className="profile_top w-100">
          <h3 className="fs-24 text-dark">
            Customers List
            <span
              style={{ marginTop: "2rem" }}
              className="fs-14 family1 block text-dark text-light"
            >
              Here is a list of your customers who have signed up to your website
            </span>
          </h3>
        </div>
        <Table>
          <div className="TableTop">
            <div className="TableTopLeft">
              <form>
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search for Customers"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className="TableContainer">
            <table className="tableWrapper">
              <thead>
                <tr>
                  <th>Customers Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Country</th>
                  <th>Phone</th>
                  <th>isAdmin</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((x) => {
                  return <TableCard x={x} key={x?._id} type="users" />;
                })}
              </tbody>
            </table>
          </div>
          {usernoOfpage > 0 && <Pagination type="users" />}
        </Table>
      </CustomersContainer>
    </>
  );
}

const CustomersContainer = styled.div`
  width: 100%;

  .profile_top {
    padding: 0 3rem;
    padding-top: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    span {
      padding: 1rem 0;
    }
  }
`;
