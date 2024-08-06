interface Country {
  cca2: string;
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
}

interface ExtractedCountryData {
  code: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export const extractCountryData = (
  countries: Country[]
): ExtractedCountryData[] => {
  return countries.map((country) => ({
    code: country.cca2.toLowerCase(),
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital:
      country.capital && country.capital.length > 0 ? country.capital[0] : "",
  }));
};
