import React from "react";
import SearchHeader from "../components/searchHeader";
import "@/app/globals.css";
import SearchHeaderOptions from "../components/searchHeaderOptions";
function layout({ children }) {
  return (
    <>
      <SearchHeader />
      <SearchHeaderOptions />
      {children}
    </>
  );
}

export default layout;
