import MainPage from "@/components/mainPage/MainPage";
import { extractCountryData } from "@/utils/extractCountriesData";

export default async function Home() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const unextractedCountries = await response.json();
  const extractedCountries = extractCountryData(unextractedCountries);
  console.log(extractedCountries);

  return <MainPage countries={extractedCountries} />;
}
