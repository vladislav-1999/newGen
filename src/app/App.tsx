import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/className";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const bool = true;

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <AppRouter />
      <button onClick={toggleTheme}>THEME</button>
    </div>
  );
};

export default App;
