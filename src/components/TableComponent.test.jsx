import { render } from "@testing-library/react";
import TableComponent from "./TableComponent";

describe(TableComponent, () => {
  it("Table get Called", () => {
    const { getByTestId } = render(<TableComponent />);
    const dataTable = getByTestId("tableComponent");
    expect(dataTable).toBeVisible();
  });

  it("should render with datatable", () => {
    const component = render(<TableComponent />);
    expect(component).toMatchSnapshot();
  });
});
