"use client";

import { useTheme } from "@/providers/themeContext";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

import styled from "styled-components";

const Container = styled.div<{ $backgroundColor: string }>`
  cursor: pointer;
  height: 336px;
  width: 264px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  background-color: ${(props) => props.$backgroundColor};
`;

const FlagContainer = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
`;

const FlagImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: fill;
`;

const H2 = styled.h2<{ $color: string }>`
  font-family: Nunito Sans;
  font-size: 18px;
  font-weight: 800;

  letter-spacing: 0px;
  text-align: left;
  margin-top: 24px;
  margin-bottom: 16px;
  margin-left: 24px;
  color: ${(props) => props.$color};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 24px;
`;

const P = styled.p<{ $color: string }>`
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 300;

  letter-spacing: 0px;
  text-align: left;
  margin: 0px;

  color: ${(props) => props.$color};
`;

const Span = styled.span`
  font-weight: 600;
`;
interface CountryCardProps {
  code: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  handleClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  code,
  name,
  population,
  region,
  capital,
  handleClick,
}) => {
  const { theme } = useTheme();
  const { color, elementBg } = useCurrentTheme();

  return (
    <Container $backgroundColor={elementBg} onClick={handleClick}>
      <FlagContainer>
        <FlagImage src={`https://flagcdn.com/w320/${code}.png`} alt="Flag" />
      </FlagContainer>
      <H2 $color={color}>{name}</H2>
      <TextWrapper>
        <P $color={color}>
          <Span>Population: </Span>
          {population}
        </P>
        <P $color={color}>
          <Span>Region: </Span>
          {region}
        </P>
        <P $color={color}>
          <Span>Capital: </Span>
          {capital}
        </P>
      </TextWrapper>
    </Container>
  );
};

export default CountryCard;
