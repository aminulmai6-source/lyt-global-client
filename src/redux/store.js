import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Features/Cart/CartSlice";
import AuthApi from "./Features/Auth/AuthApi";
import AuthReducer from "./Features/Auth/AuthSlice";
import CasesApi from "./Features/Cases/CasesApi";
import CasesReducer from "./Features/Cases/CasesSlice";
// import ProductsApi from "./Features/Products/ProductsApi";
// import ReviewApi from "./Features/Reviews/ReviewsApi";
// import StatsApi from "./Features/Stats/StatsApi";
// import OrderApi from "./Features/Orders/orderApi";

export const store = configureStore({
  reducer: {
    // cart: cartReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    auth: AuthReducer,
    [CasesApi.reducerPath]: CasesApi.reducer,
    cases: CasesReducer,
    // [ProductsApi.reducerPath]: ProductsApi.reducer,
    // [ReviewApi.reducerPath]: ReviewApi.reducer,
    // [StatsApi.reducerPath]: StatsApi.reducer,
    // [OrderApi.reducerPath]: OrderApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApi.middleware,
      CasesApi.middleware
      // ProductsApi.middleware,
      // ReviewApi.middleware,
      // StatsApi.middleware,
      // OrderApi.middleware
    ),
});
