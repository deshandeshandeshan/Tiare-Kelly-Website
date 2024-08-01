import "./App.css";
import ScrollToTop from "./components/utilities/ScrollToTop";
import Home from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import SelectedWork from "./components/SelectedWork";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<SelectedWork />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
