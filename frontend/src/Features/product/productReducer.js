import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetching all product
export const getAllProduct = createAsyncThunk(
  "/fetch/allproduct",
  async (product, thunkAPI) => {
    try {
      const {
        page,
        category,
        sort,
        colors,
        limit,
        minprice,
        maxprice,
        tag,
      } = thunkAPI.getState().product;
      let productUrl = `${import.meta.env.VITE_API_BASE_URLS}/api/v1/product`;
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      if (page) {
        productUrl = productUrl + `?page=${page}`;
      }
      if (category || tag) {
        productUrl = productUrl + `?category=${category}&tag=${tag}`;
        const { data } = await axios.get(productUrl, config);
        return data;
      }
      if (sort) {
        productUrl = productUrl + `?sort=${sort}`;
      }
      if (colors) {
        productUrl = productUrl + `?colors=${colors}`;
        const { data } = await axios.get(productUrl, config);
        return data;
      }
      if (minprice) {
        productUrl = productUrl + `?minprice=${minprice}`;
        const { data } = await axios.get(productUrl, config);
        return data;
      }
      if (maxprice) {
        productUrl = productUrl + `?maxprice=${maxprice}`;
        const { data } = await axios.get(productUrl, config);
        return data;
      }
      if (limit) {
        productUrl = productUrl + `?limit=${limit}`;
      }
      // if (product.search !== '') {
      //   productUrl = productUrl + `&search=${product.search}`;
      // }
      const { data } = await axios.get(productUrl, config);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching all product category
export const getAllProductCategory = createAsyncThunk(
  "/fetch/allproductcategory",
  async (search, thunkAPI) => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/api/v1/product/products`);
      return data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching single product based on its id
export const getSingleProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/api/v1/product/${name}`);

      return data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching single product based on its id
export const CreateSingleProductDetails = createAsyncThunk(
  "product/createProduct",
  async (productData, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URLS}/api/v1/product`, productData, config);

      return data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Update a single Product for the admin
export const adminUpdateProduct = createAsyncThunk(
  "/updateProduct",
  async (productData, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
          "content-type": "application/json",
        },
      };
      // const { _id } = state.product.productDetails;
      // console.log(productData);
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_BASE_URLS}/api/v1/product/admin/${productData?._id}`,
        productData,
        config
      );
      let productUrl = `${import.meta.env.VITE_API_BASE_URLS}/api/v1/product`;
       await axios.get(productUrl)
      // localStorage.setItem("products", JSON.stringify(data.updatedproduct));
      return data.updatedproduct;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Delete a single Product for the admin
export const adminDeleteProduct = createAsyncThunk(
  "/admin/deleteProduct",
  async (productid, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URLS}/api/v1/product/admin/${productid}`,
        config
      );
      return productid;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Create a review access point for the user
export const createReviewProduct = createAsyncThunk(
  "/user/reviewProduct/",
  async ({ Reviewdata, id }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URLS}/api/v1/product/review/${id}`,
        Reviewdata,
        config
      );
      return data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Get al toprated product for the user
export const getTopRatedProduct = createAsyncThunk(
  "/get/topRatedProduct",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/api/v1/product/rated`, config);
      return data.toprated;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Get al toprated product for the user
export const getProductStats = createAsyncThunk(
  "/get/getProductStats",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/api/v1/product/stats`, config);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
