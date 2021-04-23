import reducer from "./reducer";

// TESTS

//When second parameter of my functions is : { type: "LOADING_DATA", payload: 2 } the functions return:isLoadingData: 2
//Test Suites: 1 passed, 1 total
//Tests:       1 passed,

//When second parameter of my functions is : { type: "LOADING_DATA", payload: true } the functions return:isLoadingData: true
//Test Suites: 1 passed, 1 total
//Tests:       1 passed,

describe("Function to manage the charger globally / reducer", () => {
  test("Must change the initial state with the parameter that you pass in object. payload", () => {
    expect(reducer({ isLoadingData: false }, { type: "LOADING_DATA", payload: 2 })).toEqual({ isLoadingData: 2 });
  });
});
