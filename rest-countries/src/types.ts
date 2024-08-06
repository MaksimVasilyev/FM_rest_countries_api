export interface Country {
  cca2: string;
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
}

export interface ExtractedCountryData {
  code: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export interface MainPageProps {
    countries: ExtractedCountryData[];
  }