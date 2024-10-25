import React from "react";
import SearchHeader from "../components/searchHeader";
import "@/app/globals.css";
function layout({ children }) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}

export default layout;
