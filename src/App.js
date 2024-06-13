import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
