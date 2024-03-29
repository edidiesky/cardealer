import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {
  getAllProduct,
  handleProductSearch,
  clearProductAlert,
  clearProductDetails,
} from "../../../Features";
import {Pagination, Header } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { TableCard, Links, Alert } from "../components";
import { Table } from "./styles";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";

export default function Products() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const {
    noOfPages,
    page,
    product,
    isLoading,
    isError,
    alertText,
    alertType,
    isSuccess,
    showAlert,
  } = useSelector((store) => store.product);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearProductDetails());
    dispatch(getAllProduct({ search }));
  }, [page, dispatch, search]);

  // clear the product alert
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearProductAlert());
      }, 4000);
    }
  }, [showAlert, dispatch]);

  // Search functionality


  // useEffect(() => {
  //   // dispatch(handleProductSearch(search));
  //   if (search) {
  //     dispatch(getAllProduct({ search }));
  //   }
  // }, [search, dispatch]);

  // console.log(product);

  return (
    <>
      <Message
        showAlert={showAlert}
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearProductAlert}
      />
      {isLoading && <LoaderIndex loading={isLoading} />}
      {/* <Header
        text={"My Products"}
        subtext={"Here is what is happening with your products today"}
      /> */}
      <ProductsContainer>
        <div className="profile_top w-100">
          <h3 className="fs-24 text-dark">
            Product List
            <span
              style={{ marginTop: "1rem" }}
              className="fs-14 family1 block text-dark text-light"
            >
              Here is my list of your awesome car collections that are being
              leased out for sale
            </span>
          </h3>
        </div>
        <div className="w-100">
          <Table>
            {isSuccess && (
              <Message
                alertText={"Your Customers have been succesfully gotten"}
                alertType={"success"}
              />
            )}
            <div className="TableTop">
              <div className="TableTopLeft">
                <form>
                  <FaSearch />
                  <input
                    type="text"
                    placeholder="Search for product"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </form>
                <Link
                  to={"/car-dealership/dashboard/create-product"}
                  className="editBtn"
                >
                  Add Product
                </Link>
              </div>
            </div>
            <div className="TableContainer">
              <table className="tableWrapper">
                <thead>
                  <tr>
                    <th> Id</th>
                    <th> Image</th>
                    <th> Name</th>
                    <th> Price</th>
                    <th> CountInStock</th>
                    <th> Brand</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {product?.map((x) => {
                    return <TableCard x={x} key={x?._id} />;
                  })}
                </tbody>
              </table>
            </div>
            {noOfPages > 0 && <Pagination />}
          </Table>
        </div>
      </ProductsContainer>
    </>
  );
}

const ProductsContainer = styled.div`
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
