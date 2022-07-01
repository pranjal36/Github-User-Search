import Header from "./components/Header";
import Main from "./components/Main";
import useTheme from "./hooks/useTheme";
import {BrowserRouter as Router} from 'react-router-dom';



function App() {
  const [isDarkTheme, toggleTheme] = useTheme();

  return (
    <Router>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Main isDarkTheme={isDarkTheme} />
    </Router>
  );
}

export default App;
