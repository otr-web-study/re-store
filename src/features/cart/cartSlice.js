import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
  total: 0,
  count: 0,
})

const prepareItem = (id, total, count) => {
  return {
    payload: {
      id,
      total,
      count, 
    }
  }
}

const updateOrder = (state, action) => {
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

const updateTotalSum = (state) => {
  const { ids, entities } = state;
  state.total = ids.reduce((acc, current) => {
    return acc + entities[current].total;
  }, 0);
  state.count = ids.length;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    itemAdd: {
      reducer: (state, action) => {
        updateOrder(state, action);
        updateTotalSum(state);
      },
      prepare: ({id, price}) => prepareItem(id, price, 1)
    },
    itemIncrease: {
      reducer: (state, action) => {
        updateOrder(state, action);
        updateTotalSum(state);
      },
      prepare: ({id, price}) => prepareItem(id, price, 1)
    },
    itemDecrease: {
      reducer: (state, action) => {
        updateOrder(state, action);
        updateTotalSum(state);
      },
      prepare: ({id, price}) => prepareItem(id, price, -1)
    },
    itemDelete: (state, action) => {
      cartAdapter.removeOne(state, action);
      updateTotalSum(state);
    },
  },
});

export const { itemIncrease, itemDecrease, itemDelete, itemAdd } = cartSlice.actions;

export default cartSlice.reducer;

export const {
  selectIds: selectAllCartIds,
  selectById: selectCartItemById,
  selectAll: selectAllCartItems,
} = cartAdapter.getSelectors(state => state.cart);
