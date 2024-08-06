import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { useTheme } from "@/providers/themeContext";

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.div<{ $backgroundColor: string; $color: string }>`
  box-sizing: border-box;
  width: 200px;
  height: 56px;
  border-radius: 5px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  padding: 18px 19.5px 18px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backgroundColor};
`;

const DropdownList = styled.div<{ $backgroundColor: string; $color: string }>`
  margin-top: 4px;
  position: absolute;
  border-radius: 5px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  left: 0;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backgroundColor};
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
`;

const DropdownItem = styled.div<{ $backgroundColor: string; $color: string }>`
  padding: 10px;
  cursor: pointer;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backgroundColor};

  &:hover {
    background-color: ${(props) => props.$color}; /* Add hover effect */
    color: ${(props) => props.$backgroundColor};
  }
`;

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const Dropdown = ({ onSelect }: { onSelect: (region: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Filter by region");
  const { theme } = useTheme();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (region: string) => {
    setSelectedRegion(region);
    setIsOpen(false);
    onSelect(region);
  };

  const themeProperties = {
    dark: {
      backgroundColor: colors.dark_blue,
      color: colors.white,
    },
    light: {
      backgroundColor: colors.white,
      color: colors.very_dark_blue_text,
    },
  };

  const currentTheme =
    themeProperties[theme as keyof typeof themeProperties] ||
    themeProperties.light;

  return (
    <DropdownContainer>
      <DropdownButton
        $color={currentTheme.color}
        $backgroundColor={currentTheme.backgroundColor}
        onClick={toggleDropdown}
      >
        {selectedRegion}
        <span style={{ marginLeft: "auto" }}>
          {isOpen ? "▲" : "▼"} {/* Change the symbol based on isOpen */}
        </span>
      </DropdownButton>
      {isOpen && (
        <DropdownList
          $color={currentTheme.color}
          $backgroundColor={currentTheme.backgroundColor}
        >
          {regions.map((region) => (
            <DropdownItem
              $color={currentTheme.color}
              $backgroundColor={currentTheme.backgroundColor}
              key={region}
              onClick={() => handleSelect(region)}
            >
              {region}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
