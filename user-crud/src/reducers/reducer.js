const initialState = {
  isLoadingData: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_DATA":
      return { ...state, isLoadingData: action.payload };
    default:
      return state;
  }
};

export default reducer;
