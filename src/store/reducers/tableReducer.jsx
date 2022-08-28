const initialState = {
  name: "",
};
const tableReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return {
        ...state,
        name: [...state.name, payload],
      };
    default:
      return {
        ...state,
      };
  }
};
export default tableReducer;
