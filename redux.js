import { createStore } from "redux";

function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...state, action.payload];
    }
    case "REMOVE_FROM_CART": {
      return state.filter((cartItem) => cartItem.id != action.payload.id);
    }
  }
}

let store = createStore(cartReducer);
store.subscribe(() => {
  console.log("on state changes : ", store.getState());
});

const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 1,
    qty: 10,
  },
};
const action2 = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    qty: 5,
  },
};
const action3 = {
  type: "ADD_TO_CART",
  payload: {
    id: 3,
    qty: 15,
  },
};
const action4 = {
  type: "REMOVE_FROM_CART",
  payload: {
    id: 2,
  },
};

store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);
