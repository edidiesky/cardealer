import React, { useEffect } from "react";
import { Banner, Meta } from "../components/common";
import { useSearchParams, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderIndex from "../components/order";
import Info from "../components/order/Info";
import styled from "styled-components";
import { updateCustomersOrderToPaid } from "../Features";
import { clearBagItems } from "../Features/bag/bagSlice";

export default function Order() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

   const { id } = useParams();
   console.log(id)
   const dispatch = useDispatch();
   const { order } = useSelector((store) => store.order);
   // console.log(order);
   useEffect(() => {
     if (id) {
       dispatch(updateCustomersOrderToPaid(id));
       dispatch(clearBagItems())
     }
   }, [id]);
  return (
    <>
      <Meta title={"My Orders"} />
      {/* <Banner1/> */}
      <Banner title="Order Success" />
      <div style={{minHeight:"100vh"}} className="w-100">
        <OrderWrapper
          className="py-2 w-90 auto flex column"
          style={{ border: "1px solid rgba(0,0,0,.1)", margin: "2rem auto" }}
        >
          <OrderIndex />
          <Info />
        </OrderWrapper>
      </div>
    </>
  );
}

const OrderWrapper = styled.div`

  .py-3 {
    padding: 0;
    @media (max-width: 480px) {
      padding: 2rem 0rem;
    }
  }
  h2 {
    font-size: 28px;

    @media (max-width: 680px) {
      font-size: 2.6rem !important;
    }
  }
`;
