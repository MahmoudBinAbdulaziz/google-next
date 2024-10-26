import React from "react";
import SearchHeader from "../components/searchHeader";
import "@/app/globals.css";

function Layout({ children }) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}

export default Layout;
