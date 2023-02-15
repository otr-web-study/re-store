import { RootState } from "store";

import { cartAdapter } from "./cartSlice";

export const {
  selectIds: selectAllCartIds,
  selectById: selectCartItemById,
  selectAll: selectAllCartItems,
} = cartAdapter.getSelectors((state: RootState) => state.cart);