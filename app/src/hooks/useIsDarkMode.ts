
import { useTheme } from "@material-ui/core";

export default function useIsDarkMode() {
  return useTheme().palette.type === "dark";
}