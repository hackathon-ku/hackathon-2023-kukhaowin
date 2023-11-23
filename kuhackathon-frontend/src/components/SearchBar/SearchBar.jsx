"use client";
import React, { useState ,useEffect} from "react";
import PropTypes from "prop-types";
import { Button, TextInput, Label, Radio, Select } from "flowbite-react";
import { Filter } from "lucide-react";

const SearchBar = ({
  searchValue,
  setSearchValue,
  filterValue,
  setFilterValue,
  filterOptions,
  filterType ,
  haveFilter 
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

const _renderFilter = () => {
  if (filterType === "list") {
    return filterOptions.map((option, index) => (
      <button
        key={index}
        className={`ml-2 text-sm font-bold text-[#197060] border-2 border-[#197060] px-4 py-1 rounded-md ${
          filterValue !== option.value ? "bg-[#197060] text-white" : ""
        }`}
        onClick={() => {
          setFilterValue(option.value);
        }}
      >
        {option.label}
      </button>
    ));
  } else{
    return filterOptions.map((option, index) => (
      <div className="flex items-center">
       <Radio 
        className="ml-2 mr-1"
        value={option.value}
        checked={filterValue == option.value}
        onChange={(e) => setFilterValue(e.target.value)}
        />
        <Label>{option.label}</Label>
      </div>
    ));
  }

}

    

  return (
    <div className="flex flex-col py-4 bg-white p-4 rounded-lg my-2">
      <p className="text-xl font-bold mb-1">ค้นหา</p>
      <div className="flex items-center">
        <TextInput
          placeholder="Search"
          className="mr-4 w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          color="success"
          onClick={() => setSearchValue(value)}
        >
          Search
        </Button>
      </div>
      {haveFilter &&
      <div className="flex items-start mt-4">
        <div className="flex items-center">
          <Filter className="h-6 w-6" style={{ color: "#197060" }} />
          <p className="text-sm font-bold text-[#197060]">Filter</p>
        </div>
<div className="flex items-center flex-wrap">
        {_renderFilter()}
        </div>
   
      </div>
      }
    </div>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  filterValue: PropTypes.bool.isRequired,
  setFilterValue: PropTypes.func.isRequired,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired,
    })
  ).isRequired,
  haveFilter : PropTypes.bool
};

SearchBar.defaultProps = {
  searchValue: "",
  setSearchValue: () => {},
  filterValue: false,
  setFilterValue: () => {},
  filterOptions: [],
  haveFilter : true,
};

export default SearchBar;
