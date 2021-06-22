import "./App.css";
import 'animate.css';
import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { createMuiTheme, Switch, ThemeProvider, Toolbar } from "@material-ui/core";
// import Post from "./components/Post";
// import UserType from "./types/UserType";
import Portfolio from "./components/Portfolio";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5f5fc4",
      main: "#283593",
      dark: "#001064",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#b2fef7",
      main: "#80cbc4",
      dark: "#4f9a94",
      contrastText: "#000000",
    },
  },
});

// const useFetch = function (url: string): [[any] | null, boolean] {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetchData(url, (data) => {
//       setData(data);
//       setLoading(false);
//     });
//   }, [url]);
//   return [data, loading];
// };

async function fetchData(
  url: string,
  callback: React.Dispatch<React.SetStateAction<null>>
) {
  const response = await fetch(url);
  const json = await response.json();
  callback(json);
}

export default function SimpleTabs() {
  const [value, setValue] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  );
}
