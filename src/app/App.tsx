import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/className";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";
import "./styles/index.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { SideBar } from "widgets/SideBar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
