import { createContext, useReducer } from "react";

export const Store = createContext([]);

const initialState = {
  isShow: true,
  page: 0,
  rows: [
    {
      id: "1",
      text: "1",
    },
  ],
  allOptions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_ROWS": {
      const rows = action.payload;
      return { ...state, rows };
    }
    case "SHOW_FIELDS": {
      const isShow = action.payload;
      return { ...state, isShow };
    }
    case "RENDER_COMPONENT": {
      const page = action.payload;
      return { ...state, page };
    }
    case "SAVE_OPTIONS": {
      const allOptions = action.payload;
      return { ...state, allOptions: [...state.allOptions, ...allOptions] };
    }
    default:
      return state;
  }
};

export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
