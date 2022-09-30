import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { ButtonStyles as Button } from "./components/Button";
import { TextSyles as Text } from "./components/Text";

const breakpoints = createBreakpoints({
  xs: "480px",
  sm: "600px",
  md: "768px",
  lg: "1000px",
  xl: "1200px",
  "2xl": "1536px",
});

export const theme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      accent: "black",
      primaryText: "",
      secondaryText: "",
      mainText: "",
    },
  },
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
        fontFamily: "Mali",
        margin: 0,
        textDecoration: "none",
      },
      body: {
        bg: "grey.100",
        fontFamily: "Poppins",
        boxSizing: "border-box",
        overflowX: "hidden",
      },
    },
  },
  components:{
    Button,
    Text
  }
});
