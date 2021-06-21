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

const useFetch = function (url: string): [[any] | null, boolean] {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData(url, (data) => {
      setData(data);
      setLoading(false);
    });
  }, [url]);
  return [data, loading];
};

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

  // const [posts, isPostsLoading] = useFetch(
  //   "https://jsonplaceholder.typicode.com/posts"
  // );
  // const [comments, isCommentsLoading] = useFetch(
  //   "https://jsonplaceholder.typicode.com/comments"
  // );
  // const [albums, albumsIsLoading] = useFetch(
  //   "https://jsonplaceholder.typicode.com/albums"
  // );
  // const [photos, photosIsLoading] = useFetch(
  //   "https://jsonplaceholder.typicode.com/photos"
  // );
  // const [todos, todosIsLoading] = useFetch(
  //   "https://jsonplaceholder.typicode.com/todos"
  // );
  // const [users, isUsersLoading] = useFetch(
  //   "https://jsonplaceholder.typicode.com/users"
  // ) as [[UserType] | null, boolean];

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} style={{float: "inline-end"}} />
        </Toolbar>
        {/* <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="simple tabs example"
        >
          <Tab label="Home" />
          <Tab label="Posts" />
          <Tab label="Comments" />
          <Tab label="Albums" />
          <Tab label="Photos" />
          <Tab label="Todos" />
          <Tab label="Users" />
        </Tabs> */}
      </AppBar>
      <Portfolio />
      {/* <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {isPostsLoading && isCommentsLoading && isUsersLoading ? (
          <div>Loading...</div>
        ) : (
          <List
            component="nav"
            aria-label="mailbox folders"
          >
            <Post
              post={posts === null ? null : posts[0]}
              user={users === null ? null : users[0]}
              comments={comments === null ? null : comments[0]}
            />
          </List>
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {commentsIsLoading ? <div>Loading...</div> : JSON.stringify(comments)}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {albumsIsLoading ? <div>Loading...</div> : JSON.stringify(albums)}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {photosIsLoading ? <div>Loading...</div> : JSON.stringify(photos)}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {todosIsLoading ? <div>Loading...</div> : JSON.stringify(todos)}
      </TabPanel>
      <TabPanel value={value} index={6}>
        {usersIsLoading ? <div>Loading...</div> : JSON.stringify(users)}
      </TabPanel> */}
    </ThemeProvider>
  );
}
