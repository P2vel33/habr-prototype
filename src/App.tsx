import React, { Suspense } from "react";
import Counter from "./components/Counter";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { Link } from "react-router-dom";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";

const App = () => {
  return (
    <div className="app">
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
