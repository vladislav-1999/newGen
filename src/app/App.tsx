import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/className";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";
import "./styles/index.scss";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
