import "styled-components";
import { theme } from "./src/util";

type ITheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
