import { createGlobalStyle } from "styled-components";
import { themes } from "./themes/colors";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  font-family: Helvetica, sans-serif;
  background-color: ${themes.color.tertiaryColor};
}

`;

