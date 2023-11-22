import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
