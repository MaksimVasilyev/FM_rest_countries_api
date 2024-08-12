import { useTheme } from "@/providers/themeContext";
import { themeProperties, ThemeType } from "@/styles/theme";

export const useCurrentTheme = () => {
  const { theme } = useTheme();
  const currentTheme =
    themeProperties[theme as ThemeType] || themeProperties.light;
  return currentTheme;
};
