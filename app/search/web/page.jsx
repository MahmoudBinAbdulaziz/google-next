import React from "react";
import Link from "next/link";
import WebSearchResults from "@/app/components/webSearchResults";
export default async function Page(context) {
  const { searchParams } = await context; // Await the context to access searchParams
  const word = await searchParams;
  const searchTerm = word?.searchTerm || "";
  let data;
  if (!searchTerm) {
    return <h1>No search term provided</h1>;
  }
  try {
    const resp = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}`
    );

    data = await resp.json();
  } catch (error) {}
  const results = data?.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found for {searchTerm}</h1>
        <p className="text-lg">
          Try searching the web or images for something else{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <div>{results && <WebSearchResults results={data} />}</div>;
}
