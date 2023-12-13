import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { getAllCustomersOrder } from "../../../Features";
import { Pagination, Header } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { TableCard, Links, Alert } from "../components";
import { Table } from "./styles";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";

export default function Order() {
  const dispatch = useDispatch();

  const { isLoading, orders, totalorder, orderpage } = useSelector(
    (store) => store.order
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getAllCustomersOrder());
  }, [orderpage]);

  return (
    <>
      <Alert />
      {isLoading && <LoaderIndex loading={isLoading} />}

      <OrdersContainer>
        <div className="profile_top w-100">
          <h3 className="fs-24 text-dark">
            Order List
            <span
              style={{ marginTop: "2rem" }}
              className="fs-14 family1 block text-dark text-light"
            >
              Here is my list of customers orders who have purchased my awesome
              car collections
            </span>
          </h3>
        </div>
        <Table>
          <div className="TableTop">
            <div className="TableTopLeft"></div>
          </div>
          <div className="TableContainer">
            <table className="tableWrapper">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Date</th>
                  <th>customer's Name</th>
                  <th>Total</th>
                  <th>Paid</th>
                  <th>Delivered</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((x) => {
                  return <TableCard x={x} key={x?._id} type="orders" />;
                })}
              </tbody>
            </table>
          </div>
          {totalorder > 0 && <Pagination type={"order"} />}
        </Table>
      </OrdersContainer>
    </>
  );
}

const OrdersContainer = styled.div`
width:100%;
  .profile_top {
    padding: 0 3rem;
    padding-top: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    span {
      padding: 1rem 0;
    }
  }
`;
