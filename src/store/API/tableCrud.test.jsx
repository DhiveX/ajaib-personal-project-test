import { getUserByFilter } from "./tableCrud";

describe("get user using Promises", () => {
  it("should load user data", () => {
    return getUserByFilter().then((data) => {
      expect(data).toBeDefined();
      expect(data.data.results).toHaveLength(1);
    });
  });

  it("should load user data with total data", () => {
    let params = `?results=50`;
    return getUserByFilter(params).then((data) => {
      expect(data).toBeDefined();
      expect(data.data.results).toHaveLength(50);
    });
  });
});
