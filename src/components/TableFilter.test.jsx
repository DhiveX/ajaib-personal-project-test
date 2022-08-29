import { render } from "@testing-library/react";
import TableFilter from "./TableFilter";

describe(TableFilter, () => {
  it("Filter get Visible to User", () => {
    const { getByTestId } = render(<TableFilter />);
    const tableFilter = getByTestId("tableFilter");
    expect(tableFilter).toBeVisible();
  });

  it("should render with filter form", () => {
    const component = render(<TableFilter />);
    expect(component).toMatchSnapshot();
  });
});
