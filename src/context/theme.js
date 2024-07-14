import { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const changeTheme = ({ change = true }) => {
    let newTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") == `${change}` ? false : true : !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    newTheme == true ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  };

  useEffect(() => changeTheme(false), []);

  return <themeContext.Provider value={{ darkTheme, changeTheme }}>{children}</themeContext.Provider>;
};
