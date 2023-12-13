import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditProductImages from "./EditProductImages";
import OtherInfo from "./OtherInfo";
import ProductInfo from "./ProductInfo";
import LoaderIndex from "../../../../components/loaders/index";
import {
  adminUpdateProduct,
  clearProductAlert,
  clearProductDetails,
  CreateSingleProductDetails,
  getSingleProductDetails,
} from "../../../../Features";
import Message from "../../../../components/loaders/Message";

export default function CreateProductIndex() {
  // initailizing parameters
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    productDetails,
    isLoading,
    alertText,
    alertType,
    showAlert,
  } = useSelector((store) => store.product);
  const [formdata1, setFormData1] = useState({
    price: "",
    discount: "",
    countInStock: "",
    colors: "",
    percentage: 0,
    capacity: 0,
  });
  const [formdata2, setFormData2] = useState({
    title: "",
    brand: "",
    description: "",
    shortdescription: "",
  });
  const [uploadimage, setUploadImage] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [tags, setTagData] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearProductDetails());
    dispatch(clearProductAlert());
    dispatch(getSingleProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    // clear the alert message
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearProductAlert());
      }, 4000);
    }
  }, [showAlert, dispatch]);
  // get the data from the product details
  useEffect(() => {
    if (productDetails) {
      const {
        image,
        tags,
        colors,
        shortdescription,
        price,
        countInStock,
        capacity,
        description,
        brand,
        title,
        discount,
      } = productDetails;
      setFormData1({
        image,
        tags,
        colors,
        shortdescription,
        price,
        countInStock,
        capacity,
        discount,
      });
      setFormData2({ description, brand, title });
      setUploadImage(image);
      setTagData(tags);
      setColors(colors);
    }
  }, [productDetails]);

  const onChange1 = (e) => {
    setFormData1({ ...formdata1, [e.target.name]: e.target.value });
  };

  const onChange2 = (e) => {
    setFormData2({ ...formdata2, [e.target.name]: e.target.value });
  };

  // console.log(productDetails);

  const filterColors = [
    { id: 1, color: "#222222", title: "black" },
    { id: 2, color: "#BD162D", title: "red" },
    { id: 4, color: "#f7f7f7", title: "grey" },
    { id: 3, color: "#23608c", title: "blue" },
    { id: 5, color: "#fff", title: "White" },
  ];

  const productData = {
    ...formdata1,
    ...formdata2,
    image: uploadimage,
    tags,
    colors,
  };
  const handleAdminProduct = (e) => {
    e.preventDefault();
    dispatch(adminUpdateProduct(productData));
  };

  return (
    <>
      <Message
        showAlert={showAlert}
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearProductAlert}
      />

      {isLoading && <LoaderIndex loading={isLoading} />}
      <EditProductContainer>
        <div className="EditProductWrapper">
          <div className="profile_top w-100">
            <h3 className="fs-24 text-dark">
              Edit Your Car Collection
              <span
                style={{ marginTop: "2rem" }}
                className="fs-14 family1 block text-dark text-light"
              >
                Here is my list of your awesome car collections that are being
                leased out for sale
              </span>
            </h3>
          </div>
          <div className="EditProductWrapperTop w-90 auto">
            <div className="btnWrapper w-90 auto">
              <button className="editBtn" onClick={handleAdminProduct}>
                Edit Car
              </button>
            </div>
          </div>
          <div className="w-90 auto flex gap-3 column editwrapper">
            <ProductInfo
              onChange2={onChange2}
              formdata2={formdata2}
              setFormData2={setFormData2}
            />
            <EditProductImages
              uploadimage={uploadimage}
              uploading={uploading}
              setUploadImage={setUploadImage}
              setUploading={setUploading}
              tagdata={tags}
              setTagData={setTagData}
              colors={colors}
              setColors={setColors}
              filterColors={filterColors}
            />
          </div>
          <div className="editwrapper">
            <OtherInfo
              onChange1={onChange1}
              formdata1={formdata1}
              setFormData1={setFormData1}
            />
          </div>
        </div>
      </EditProductContainer>
    </>
  );
}

const EditProductContainer = styled.div`
  width: 100%;
  .profile_top {
    padding: 0 3rem;
    padding-top: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    span {
      padding: 1rem 0;
    }
  }
  .EditProductWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;
    .EditProductWrapperTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .w-90 auto {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 2rem 0;
      }

      .EditProductWrapperTopLeft {
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
    }

    .editwrapper {
      background-color: #fff;
      padding: 3rem 2rem;
      width: 100%;
      place-items: start;
      border-radius: 6px;
    }
  }
`;
