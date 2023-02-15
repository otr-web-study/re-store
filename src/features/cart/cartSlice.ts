import { createSlice, createEntityAdapter, PayloadAction, EntityId } from "@reduxjs/toolkit";
import { Cart } from "types/cart";

export const cartAdapter = createEntityAdapter<Cart>();

const initialState = cartAdapter.getInitialState<{total: number, count: number}>({
  total: 0,
  count: 0,
})

type CartState = typeof initialState;
type PrepareParams = {id: number, price: number};

const prepareItem = (id: number, total: number, count: number) => {
  return {
    payload: {
      id,
      total,
      count, 
    }
  }
}

const updateOrder = (state: CartState, action: PayloadAction<Cart>) => {
  const { payload: { id, total, count } } = action;
  const item = state.entities[id];
  if (!item) {
    cartAdapter.addOne(state, action);
    return;
  }

  const newCount = item.count + count;
  if (!newCount) {
    cartAdapter.removeOne(state, id);
    return;
  }
  
  cartAdapter.upsertOne(state, {
    id,
    count: newCount,
    total: total * newCount,
  });
}

const updateTotalSum = (state: CartState) => {
  const { ids, entities } = state;
  state.total = ids.reduce((acc: number, current) => {
    const item = entities[current];
    if (item) {
      return acc + item.total;
    }
    return acc;
  }, 0);
  state.count = ids.length;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    itemAdd: {
      reducer: (state, action: PayloadAction<Cart>) => {
        updateOrder(state, action);
        updateTotalSum(state);
      },
      prepare: ({id, price}: PrepareParams) => prepareItem(id, price, 1)
    },
    itemIncrease: {
      reducer: (state, action: PayloadAction<Cart>) => {
        updateOrder(state, action);
        updateTotalSum(state);
      },
      prepare: ({id, price}: PrepareParams) => prepareItem(id, price, 1)
    },
    itemDecrease: {
      reducer: (state, action: PayloadAction<Cart>) => {
        updateOrder(state, action);
        updateTotalSum(state);
      },
      prepare: ({id, price}: PrepareParams) => prepareItem(id, price, -1)
    },
    itemDelete: (state, action: PayloadAction<EntityId>) => {
      cartAdapter.removeOne(state, action);
      updateTotalSum(state);
    },
  },
});

export const { itemIncrease, itemDecrease, itemDelete, itemAdd } = cartSlice.actions;

export default cartSlice.reducer;

