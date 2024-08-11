import React from "react";
import CountryPage from "@/components/CountryPage/CountryPage";
import { extractCountryData } from "@/utils/extractCountryData";
import { ExtractedCountryData } from "@/types"; // Ensure this type matches ExtractedCountryData

export default async function Page({
  params,
}: {
  params: { countryName: string };
}) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${params.countryName}`
  );
  const unextractedCountryData = await response.json();
  const extractedCountryData = extractCountryData(unextractedCountryData);

  return <CountryPage {...extractedCountryData} />;
}
