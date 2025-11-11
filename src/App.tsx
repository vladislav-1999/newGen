import MainPageAsync from "./pages/MainPage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const bool = true;

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>THEME</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
