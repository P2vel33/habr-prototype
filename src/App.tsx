import React, { Suspense, useContext, useState } from "react";
import Counter from "./components/Counter";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { Link } from "react-router-dom";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      {/* <div className={`app ${theme}`}> */}
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
