"use client";
import { useState } from "react";
import styled from "styled-components";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import { MainPageProps } from "@/types";
import CountryCard from "@/components/mainPage/CountryCard/CountryCard";
import SearchInput from "@/components/mainPage/SearchInput/SearchInput";
import Dropdown from "@/components/mainPage/DropDown/DropDown";
import { useRouter } from "next/navigation";

const Wrapper = styled.div<{ $backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-color: ${(props) => props.$backgroundColor};
  padding: 48px 80px 45px 78px;
  min-height: 100vh;
`;

const CountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 67px 60px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainPage: React.FC<MainPageProps> = ({ countries }) => {
  const { backgroundColor } = useCurrentTheme();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };
  const handleSelect = (value: string) => {
    setSelectValue(value === "All" ? "" : value);
  };

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .startsWith(searchValue.toLowerCase());
    const matchesRegion = selectValue ? country.region === selectValue : true;

    return matchesSearch && matchesRegion;
  });

  return (
    <Wrapper $backgroundColor={backgroundColor}>
      <FilterContainer>
        <SearchInput onChange={handleInputChange} />
        <Dropdown onSelect={handleSelect} />
      </FilterContainer>
      <CountriesContainer>
        {filteredCountries.map((country) => (
          <CountryCard
            handleClick={() => router.push(`/${country.name}`)}
            key={country.code}
            code={country.code}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </CountriesContainer>
    </Wrapper>
  );
};

export default MainPage;
