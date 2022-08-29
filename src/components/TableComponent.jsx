import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "username",
    selector: (row) => row.login.username,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => `${row.name.first} ${row.name.last}`,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
    sortable: true,
  },
  {
    name: "Registered Date",
    selector: (row) => row.registered.date,
    sortable: true,
  },
];

export default function TableComponent(props) {
  function handleFilter(value) {
    const temporaryFilterList = { ...value };
    props.setFilter(temporaryFilterList);
  }

  const handlePageChange = (page, perPage) => {
    let tempValue = props.appliedFilter;
    tempValue.page = page;
    handleFilter(tempValue);
    props.applyFilter();
  };

  return (
    <>
      <div data-testid="tableComponent">
        <DataTable
          keyField={1}
          columns={columns}
          progressPending={props.isLoading}
          data={props.dataFetch}
          pagination
          paginationComponentOptions={{ noRowsPerPage: true }}
          onChangePage={handlePageChange}
        />
      </div>
    </>
  );
}
