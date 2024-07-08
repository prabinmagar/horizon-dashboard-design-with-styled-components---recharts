import "normalize.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/global/globalStyles";
import BaseLayout from "./components/layout/BaseLayout";
import Dashboard from "./screens/dashboard/DashboardScreen";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
