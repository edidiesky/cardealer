import { createSlice } from "@reduxjs/toolkit";

import {
  createCustomersOrder,
  getCustomerOrder,
  getAllCustomersOrder,
  updateCustomersOrderToPaid,
  getCustomerOrderById,
  updateCustomersOrderToIsDelivered,
  getCustomerOrderStats,
  handleStripeCheckout,
  handlePaypalKey,
} from "./orderReducer";

const initialState = {
  isSuccess: false,
  isError: false,
  order: null,
  orders: null,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  loadingPay: false,
  successPay: false,
  url: "",
  loadingdelivered: false,
  successdelivered: false,
  orderStats: null,
  keys: "",
  orderpage: 1,
  ordernoOfpage: 0,
  totalorder: 0,
  sort: 0,
  limit: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    orderPayReset: (state, action) => {
      state.loadingPay = false;
      state.successPay = false;
    },
    orderDelieveredReset: (state, action) => {
      state.loadingdelivered = false;
      state.successdelivered = false;
    },
    getOrderPage: (state, action) => {
      state.orderpage = action.payload;
    },
  },
  extraReducers: {
    // creating customers order
    [createCustomersOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [createCustomersOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.order = action.payload.order;
      state.url = action.payload.url;
      state.isSuccess = true;
    },
    [createCustomersOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting customers order
    [getCustomerOrderById.pending]: (state) => {
      state.isLoading = true;
    },
    [getCustomerOrderById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
    },
    [getCustomerOrderById.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // handle stripe checkout order
    [handleStripeCheckout.pending]: (state) => {
      state.isLoading = true;
    },
    [handleStripeCheckout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.keys = action.payload;
    },
    [handleStripeCheckout.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting customers order stats
    [getCustomerOrderStats.pending]: (state) => {
      state.isStatLoading = true;
    },
    [getCustomerOrderStats.fulfilled]: (state, action) => {
      state.isStatLoading = false;
      state.orderStats = action.payload;
    },
    [getCustomerOrderStats.rejected]: (state, action) => {
      state.isStatLoading = false;
      state.showAlert = true;
      state.isStatError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting customers order
    [getCustomerOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [getCustomerOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
    [getCustomerOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting all customers order
    [getAllCustomersOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCustomersOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.order;
      state.ordernoOfpage = action.payload.noOfPages;
      state.totalorder = action.payload.totalOrder;
    },
    [getAllCustomersOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // updating customers order to paid
    [updateCustomersOrderToPaid.pending]: (state) => {
      state.loadingPay = true;
    },
    [updateCustomersOrderToPaid.fulfilled]: (state, action) => {
      state.loadingPay = false;
      state.order = action.payload;
      state.successPay = true;
    },
    [updateCustomersOrderToPaid.rejected]: (state, action) => {
      state.loadingPay = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // updating customers order to delivered
    [updateCustomersOrderToIsDelivered.pending]: (state) => {
      state.loadingdelivered = true;
    },
    [updateCustomersOrderToIsDelivered.fulfilled]: (state, action) => {
      state.loadingdelivered = false;
      state.order = action.payload;
      state.successdelivered = true;
    },
    [updateCustomersOrderToIsDelivered.rejected]: (state, action) => {
      state.loadingdelivered = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
  },
});

// console.log(orderSlice);
export const {
  clearAlert,
  orderPayReset,
  orderDelieveredReset,
  getOrderPage,
} = orderSlice.actions;

export default orderSlice.reducer;
