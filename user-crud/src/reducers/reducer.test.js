import reducer from "./reducer";

describe("Function to manage the charger globally / reducer", () => {
  test("Should change the receive state with the parameter that you pass in object. payload", () => {
    expect(reducer({ isLoadingData: false }, { type: "LOADING_DATA", payload: 2 })).toEqual({ isLoadingData: 2 });
  });

  test("Should return the initial state if it does not receive the first parameter", () => {
    expect(reducer(undefined, {})).toEqual({ isLoadingData: false });
  });

  test("Should return the initial state if it type is diferent to LOADING_DATA", () => {
    expect(reducer({ isLoadingData: "Hi there" }, { type: "Hello", payload: true })).toEqual({
      isLoadingData: "Hi there",
    });
  });
});
