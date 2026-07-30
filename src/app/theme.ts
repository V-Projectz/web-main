import { createTheme } from "@mantine/core";

/** */
export const theme = createTheme({
  defaultRadius: "lg",
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
  // Colors
  white: "#FCFCFD", // Text color
  black: "#181818", // Text color
  colors: {
    light: ["#EDEDED", "#E3E3E3", "#D6D6D6", "#C7C7C7", "#B0B0B0", "#969696", "#737373", "#555555", "#3A3A3A", "#242424"],
    dark: ["#F5F5F5", "#E8E8E8", "#D1D1D1", "#B8B8B8", "#999999", "#707070", "#505050", "#383838", "#242424", "#181818"],
    brand: ["#FAFAF9", "#F5F5F4", "#E7E5E4", "#D6D3D1", "#A8A29E", "#78716C", "#57534E", "#44403C", "#292524", "#1C1917"],
  },
});

/** */
export default theme;
