import React from "react";

export default function TableFilter(props) {
  function handleFilter(value) {
    const temporaryFilterList = { ...value };
    props.setFilter(temporaryFilterList);
  }

  function handleKeyword(event) {
    let tempValue = props.appliedFilter;
    tempValue.keyword = event.target.value;
    handleFilter(tempValue);
    props.applyFilter();
  }

  function handleGender(event) {
    let tempValue = props.appliedFilter;
    tempValue.gender = event.target.value;
    handleFilter(tempValue);
  }

  function handleSortBy(event) {
    let tempValue = props.appliedFilter;
    tempValue.sortBy = event.target.value;
    handleFilter(tempValue);
  }
  function handleSortOrder(event) {
    let tempValue = props.appliedFilter;
    tempValue.sortOrder = event.target.value;
    handleFilter(tempValue);
  }

  const handleResetFilter = () => {
    let tempValue = props.appliedFilter;
    tempValue.page = 1;
    tempValue.pageSize = 10;
    tempValue.gender = null;
    tempValue.keyword = null;
    tempValue.sortBy = null;
    tempValue.sortOrder = "ascend";
    tempValue.results = 30;
    tempValue.seed = "ajaib";
    handleFilter(tempValue);
    document.getElementById("formFilter").reset();
    props.applyFilter();
  };
  return (
    <div>
      <form id="formFilter">
        <input type="text" onChange={handleKeyword}></input>
        <select onChange={handleGender}>
          <option value="">--select gender--</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <select onChange={handleSortBy}>
          <option value="">--select sort by--</option>
          <option value="username">username</option>
          <option value="name">name</option>
          <option value="email">email</option>
          <option value="gender">gender</option>
          <option value="registeredDate">registered date</option>
        </select>
        <select onChange={handleSortOrder}>
          <option value="">--select sort order--</option>
          <option value="ascend">ascending</option>
          <option value="descend">descending</option>
        </select>
        <button type="button" onClick={() => props.applyFilter()}>
          Apply Filter
        </button>
        <button type="button" onClick={() => handleResetFilter()}>
          Reset Filter
        </button>
      </form>
    </div>
  );
}
