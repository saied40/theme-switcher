import React, {useContext} from 'react';
import {themeContext} from "../context/theme";

export default function Home() {
  const { darkTheme } = useContext(themeContext);

  return (
    <>
      <h1>welcome from <mark> Home</mark> Page</h1>
      <h2>the theme now is: <mark> {darkTheme ? "dark" : "light"} </mark></h2>
    </>
  );
};
