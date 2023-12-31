import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const Registerurl = `${import.meta.env.VITE_API_BASE_URLS}/api/v1/auth/register`;
const Loginurl = `${import.meta.env.VITE_API_BASE_URLS}/api/v1/auth/login`;

export const registerCustomer = createAsyncThunk(
  "registerUser",
  async (registerData, thunkAPI) => {
    try {
      const { data } = await axios.post(Registerurl, registerData);
      localStorage.setItem("customer", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
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

export const loginCustomer = createAsyncThunk(
  "loginCustomer",
  async (loginData, thunkAPI) => {
    try {
      const { data } = await axios.post(Loginurl, loginData);
      localStorage.setItem("customer", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
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

// get all user for the admin
export const getAllCustomer = createAsyncThunk(
  "getAllCustomer",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
     try {
       const config = {
         headers: {
           authorization: `Bearer ${state.user.token}`,
           "content-type": "application/json",

         },
       };
       const { userpage } = state.user;

       const { data } = await axios.get(
         `${import.meta.env.VITE_API_BASE_URLS}/api/v1/auth?page=${userpage}`,
         config
       );
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

// get all user for the admin
export const getUserStats = createAsyncThunk(
  "getStats",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/api/v1/auth/stats`);
      return data.usersStats;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// get a single user for the admin
export const getSingleCustomer = createAsyncThunk(
  "getSingleCustomer",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
   try {
     const config = {
       headers: {
         authorization: `Bearer ${state.user.token}`,
         "content-type": "application/json",
       },
     };
     const { data } = await axios.get(
       `${
         import.meta.env.VITE_API_BASE_URLS
       }/api/v1/auth/admin/profile/${name}`,
       config
     );
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

// Update a single user for the admin
export const adminUpdateCustomer = createAsyncThunk(
  "adminUpdateCustomer",
  async (Userformdata, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { _id } = state.user.userDetails;
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_BASE_URLS}/api/v1/auth/admin/profile/${_id}`,
        Userformdata
      );
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

// Update a single user for the admin
export const UpdateProfile = createAsyncThunk(
  "UpdateProfile",
  async (profiledata, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { _id } = state.user.userInfo;
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_BASE_URLS}/api/v1/auth/profile/${_id}`,
        profiledata
      );
      localStorage.setItem("customer", JSON.stringify(data.updatedUser));
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

// Delete a single user for the admin
export const adminDeleteCustomer = createAsyncThunk(
  "adminDeleteCustomer",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_API_BASE_URLS}/api/v1/auth/admin/profile/${name}`);
      return name;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const handleTokenKey = createAsyncThunk(
  "/api/config/token",
  async (orderItems, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const { data } = await axios.get("/api/config/token");
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
