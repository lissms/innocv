import { setLoadingData } from "./actionsCreator";

describe("Actions creator / setLoadingData", () => {
  test("should return the rigth action with the passed parameter as payload", () => {
    expect(setLoadingData(2)).toEqual({ type: "LOADING_DATA", payload: 2 });
  });
});
