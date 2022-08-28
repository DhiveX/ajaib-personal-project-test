const initialState = {
  dataFetch: [],
};
const tableReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return {
        ...state,
        dataFetch: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default tableReducer;
