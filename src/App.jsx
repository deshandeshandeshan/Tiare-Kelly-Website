import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
