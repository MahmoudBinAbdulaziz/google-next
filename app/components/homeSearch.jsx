"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useDebouncedCallback } from "use-debounce";
function HomeSearch() {
  const searchParams = useSearchParams();
  //   const pathname = usePathname();
  const router = useRouter();
  const word = searchParams.get("searchTerm")?.toString();
  const [searchTerm, setSearchTerm] = useState(word ? word : "");
  const handleSearch = useDebouncedCallback((input) => {
    setSearchTerm(input);
  }, 500);
  const searchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("searchTerm", searchTerm);
    } else {
      params.delete("searchTerm");
      return;
    }
    router.push(`search/web?searchTerm=${searchTerm}`);
  };
  const handleRandomSearch = async () => {
    try {
      const resp = await fetch("https://random-word-api.herokuapp.com/word");
      //   setSearchTerm(resp[0]);
      const word = await resp.json();
      setSearchTerm(word[0]);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form
        onSubmit={searchSubmit}
        className="max-w-[90%] sm:max-w-xl lg:max-w-2xl flex w-full 
      mt-5 mx-auto border border-gray-200 px-5 py-3 rounded-full 
      hover:shadow-md focus-within:shadow-md transition-shadow"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          // value={searchTerm}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className=" text-lg" />
      </form>
      <div
        className="flex flex-col sm:space-y-0 
      space-y-2 items-center justify-center sm:space-x-4 sm:flex-row my-8"
      >
        <button
          onClick={searchSubmit}
          className="bg-[#f8f9fa] rounded-md
        text-sm w-36 h-10 text-gray-800 focus:outline-none
      active:ring-gray-300 hover:ring-gray-200 transition-shadow "
        >
          Google Search
        </button>
        <button
          onClick={handleRandomSearch}
          className="bg-[#f8f9fa] rounded-md
        text-sm w-36 h-10 text-gray-800 focus:outline-none
      active:ring-gray-300 hover:ring-gray-200 transition-shadow "
        >
          I am Feeling Lucky
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
