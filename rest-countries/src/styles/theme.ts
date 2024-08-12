import { colors } from "./colors";

export const themeProperties = {
  dark: {
    backgroundColor: colors.very_dark_blue_bg,
    color: colors.white,
    elementBg: colors.dark_blue,
    inputColor: colors.white,
  },
  light: {
    backgroundColor: colors.very_light_grey,
    color: colors.very_dark_blue_text,
    elementBg: colors.white,
    inputColor: colors.dark_grey,
  },
};

export type ThemeType = keyof typeof themeProperties;
