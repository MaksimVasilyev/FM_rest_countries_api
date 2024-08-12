import { countryCodeToName } from "@/utils/countryCodeToName";

interface ExtractedCountryData {
  name: string;
  flag: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borderCountries: string[];
}

export function extractCountryData(data: any): ExtractedCountryData {
  return {
    name: data[0].name.common,
    flag: data[0].flags.png,
    nativeName: Object.values(data[0].name.nativeName)
      .map((n: any) => n.common)
      .join(", "),
    population: data[0].population,
    region: data[0].region,
    subRegion: data[0].subregion,
    capital: data[0].capital[0],
    topLevelDomain: data[0].tld[0],
    currencies: Object.values(data[0].currencies)
      .map((c: any) => c.name)
      .join(", "),
    languages: Object.values(data[0].languages).join(", "),
    borderCountries:
      (data[0].borders || []).map((code: string) => countryCodeToName[code]) ||
      [],
  };
}
