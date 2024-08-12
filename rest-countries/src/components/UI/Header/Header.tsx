"use client";
import styled from "styled-components";
import { useTheme } from "@/providers/themeContext";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import Image from "next/image";
import { Media } from "@/styles/breakpoints";

const Container = styled.div<{ $backgroundColor: string }>`
  height: 80px;
  display: flex;
  padding: 0 80px 0 80px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};

    @media ${Media.Mobile} {
     padding: 0 16px 0 16px;
  }
`;

const H1 = styled.h1<{ $color: string }>`
  font-family: Nunito Sans;
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.$color};

  @media ${Media.Mobile} {
    font-size: 14px;
  }
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
  @media ${Media.Mobile} {
    font-size: 12px;
  }
`;
const ImageContainer = styled.div`
  width: 13.75px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${Media.Desktop} {
    width: 11px;
    height: 12px;
  }
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { elementBg, color } = useCurrentTheme();

  const themeModText = theme === "light" ? "Dark mode" : "Light mode";
  const themeModImg = theme === "light" ? "moon" : "sun";

  return (
    <Container $backgroundColor={elementBg}>
      <H1 $color={color}>Where in the world?</H1>
      <ModeSwitcherContainer onClick={toggleTheme}>
        <ImageContainer>
          <Image
            src={`icons/${themeModImg}.svg`}
            alt="Icon"
            width={13.75}
            height={15}
          />
        </ImageContainer>
        <ModeText $color={color}>{themeModText}</ModeText>
      </ModeSwitcherContainer>
    </Container>
  );
};
export default Header;
