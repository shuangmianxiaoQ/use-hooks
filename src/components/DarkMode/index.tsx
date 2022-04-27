import Toggle from "./Toggle";
import Content from "./Content";
import { useDarkMode } from "../../hooks";
import "./styles.scss";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <div className="navbar">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />
    </div>
  );
};

export default DarkMode;
