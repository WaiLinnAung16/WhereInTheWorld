import React from "react";
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className=" flex items-center gap-3 w-full md:max-w-[500px] shadow px-5 py-3 bg-white rounded text-[#858585]">
      <IoIosSearch className=" text-xl" />
      <input
        className="w-full outline-none text-[#111517] placeholder:text-[#858585]"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;