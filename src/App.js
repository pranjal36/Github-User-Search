import Header from "./components/Header";
import Main from "./components/Main";
import useTheme from "./hooks/useTheme";

function App() {
  const [isDarkTheme, toggleTheme] = useTheme();

  return (
    <>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Main isDarkTheme={isDarkTheme} />
    </>
  );
}

export default App;
