"use client";
import React, { useEffect, useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState("palestain");
  useEffect(() => {
    const getCountry = async () => {
      try {
        const resp = await fetch("https://ipwhois.app/json/");
        const data = await resp.json();
        setCountry(data.country);
      } catch (e) {
        console.log(e);
      }
    };
    getCountry();
  }, []);
  //   console.log(country);
  return <div>{country}</div>;
}

export default CountryLookup;
