"use client";
import styled from "styled-components";
import { useTheme } from "@/providers/themeContext";
import { colors } from "@/styles/colors";

const Container = styled.div<{ $backgroundColor: string }>`
  height: 80px;
  display: flex;
  padding: 0 80px 0 80px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
`;

const H1 = styled.h1<{ $color: string }>`
  font-family: Nunito Sans;
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.$color};
`;
const ModeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10.5px;
  cursor: pointer;
`;
const ModeText = styled.p<{ $color: string }>`
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.$color};
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();

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

  const themeModText = theme === "light" ? "Dark mode" : "Light mode";
  const themeModImg = theme === "light" ? "moon" : "sun";

  const currentTheme =
    themeProperties[theme as keyof typeof themeProperties] ||
    themeProperties.light;

  return (
    <Container $backgroundColor={currentTheme.backgroundColor}>
      <H1 $color={currentTheme.color}>Where in the world?</H1>
      <ModeSwitcherContainer onClick={toggleTheme}>
        <img
          src={`icons/${themeModImg}.svg`}
          alt="Icon"
          width={24}
          height={24}
        />
        <ModeText $color={currentTheme.color}>{themeModText}</ModeText>
      </ModeSwitcherContainer>
    </Container>
  );
};
export default Header;
