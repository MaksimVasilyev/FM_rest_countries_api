"use client";
import styled from "styled-components";
import { useTheme } from "@/providers/themeContext";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import { useState } from "react";
import { Media } from "@/styles/breakpoints";

const Container = styled.div<{ $backgroundColor: string }>`
  position: relative;
  width: 480px;
  height: 56px;
  border-radius: 5px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.$backgroundColor};
  @media ${Media.Mobile} {
    height: 48px;
    width: 100%;
  }
`;

const Input = styled.input<{
  $inputColor: string;
  $backgroundColor: string;
  $color: string;
}>`
  width: 100%;
  height: 100%;
  padding-left: 74px;
  box-sizing: border-box;
  font-size: 14px;
  color: ${(props) => props.$inputColor};
  background-color: ${(props) => props.$backgroundColor};
  border: none;
  border-radius: 5px;
  &:focus {
    border: none;
    box-shadow: none;
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.$inputColor};
    opacity: 1;
  }

  @media ${Media.Mobile} {
    font-size: 12px;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 16px; /* Adjust according to your design */
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;
const SearchInput = ({ onChange }: { onChange: (value: string) => void }) => {
  const [inputValue, setInputValue] = useState("");
  const { theme } = useTheme();
  const { elementBg, inputColor } = useCurrentTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  const imgName = theme === "light" ? "search-light" : "search-dark";

  return (
    <Container $backgroundColor={elementBg}>
      <SearchIcon src={`icons/${imgName}.svg`} alt="Search icon" />
      <Input
        onChange={handleChange}
        value={inputValue}
        $backgroundColor={elementBg}
        $inputColor={inputColor}
        $color={inputColor}
        placeholder="Search for a country"
      />
    </Container>
  );
};

export default SearchInput;
