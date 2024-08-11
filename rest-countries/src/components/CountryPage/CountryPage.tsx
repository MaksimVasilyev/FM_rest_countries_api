"use client";
import styled from "styled-components";
import { useTheme } from "@/providers/themeContext";
import { colors } from "@/styles/colors";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MainContainer = styled.div<{ $backgroundColor: string; $color: string }>`
  display: flex;
  flex-direction: column;
  gap: 90px;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  min-height: 100vh;
  padding-top: 80px;
  padding-left: 80px;
  padding-right: 82px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 120.29px;
`;
const FlagContainer = styled.div`
  width: 559.71px;
  height: 401px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const FlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
const DataContainer = styled.div`
  gap: 68px;
  display: flex;
  flex-direction: column;
`;
const TextContainer = styled.div`
  display: flex;
  gap: 141px;
`;
const LeftDataContainer = styled.div`
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  gap: 23px;
`;
const RightDataContainer = styled.div`
  margin-top: 106px;
`;
const TextColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const BorderContainer = styled.div`
  max-width: 598px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const H1 = styled.h1`
  font-family: Nunito Sans;
  font-size: 32px;
  font-weight: 800;
  margin: 0px;
`;

const P = styled.p`
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 300;
  margin: 0px;
`;
const Span = styled.span`
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 600;
`;
const BorderContainerSpan = styled.span`
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 600;
  margin-right: 6px;
`;

const BorderButton = styled.button<{ $elementBg: string; $color: string }>`
  width: 96px;
  height: 28px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.$elementBg};
  color: ${(props) => props.$color};
`;
const BackButton = styled.button<{ $elementBg: string; $color: string }>`
  width: 136px;
  height: 40px;
  cursor: pointer;
  font-family: Nunito Sans;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  border: 0px;
  display: flex;
  gap: 10px;
  border-radius: 6px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
  background-color: ${(props) => props.$elementBg};
  color: ${(props) => props.$color};
`;

interface CountryPageProps {
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

const CountryPage: React.FC<CountryPageProps> = ({
  name,
  flag,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}) => {
  const { theme } = useTheme();
  const router = useRouter();
  const buttonBack = theme === "light" ? "back-arrow-light" : "back-arrow-dark";

  const themeProperties = {
    dark: {
      backgroundColor: colors.very_dark_blue_bg,
      color: colors.white,
      elementBg: colors.dark_blue,
    },
    light: {
      backgroundColor: colors.very_light_grey,
      color: colors.very_dark_blue_text,
      elementBg: colors.white,
    },
  };

  const currentTheme =
    themeProperties[theme as keyof typeof themeProperties] ||
    themeProperties.light;

  return (
    <MainContainer
      $backgroundColor={currentTheme.backgroundColor}
      $color={currentTheme.color}
    >
      <BackButton
        onClick={() => router.push("/")}
        $elementBg={currentTheme.elementBg}
        $color={currentTheme.color}
      >
        <Image
          src={`icons/${buttonBack}.svg`}
          alt="Icon"
          width={24}
          height={24}
        />
        Back
      </BackButton>
      <Wrapper>
        <FlagContainer>
          <FlagImage src={flag} alt="Flag" />
        </FlagContainer>
        <DataContainer>
          <TextContainer>
            <LeftDataContainer>
              <H1>{name}</H1>
              <TextColumnContainer>
                <P>
                  <Span>Native Name: </Span>
                  {nativeName}
                </P>
                <P>
                  <Span>Population: </Span>
                  {population}
                </P>
                <P>
                  <Span>Region: </Span>
                  {region}
                </P>
                <P>
                  <Span>Sub Region: </Span>
                  {subRegion}
                </P>
                <P>
                  <Span>Capital: </Span>
                  {capital}
                </P>
              </TextColumnContainer>
            </LeftDataContainer>
            <RightDataContainer>
              <TextColumnContainer>
                <P>
                  <Span>Top Level Domain: </Span>
                  {topLevelDomain}
                </P>
                <P>
                  <Span>Currencies: </Span>
                  {currencies}
                </P>
                <P>
                  <Span>Languages: </Span>
                  {languages}
                </P>
              </TextColumnContainer>
            </RightDataContainer>
          </TextContainer>
          <BorderContainer>
            <BorderContainerSpan>Border countries: </BorderContainerSpan>
            {borderCountries.map((country) => (
              <BorderButton
                onClick={() => {
                  router.push(`${country}`);
                }}
                key={country}
                $elementBg={currentTheme.elementBg}
                $color={currentTheme.color}
              >
                {country}
              </BorderButton>
            ))}
          </BorderContainer>
        </DataContainer>
      </Wrapper>
    </MainContainer>
  );
};
export default CountryPage;
