import { useReducer } from "react";

export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="">
      <h1 className="mb-4 text-3xl">Counter</h1>
      <div className="mb-4 text-2xl">{count}</div>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => {
            handleIncrement();
          }}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded"
          onClick={() => {
            handleDecrement();
          }}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 text-white bg-green-500 rounded"
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      return state - 1;
    }
    case "RESET": {
      return 0;
    }
    default: {
      return state;
    }
  }
}
