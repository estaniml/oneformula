import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Drivers from "./components/Drivers";
import Races from "./components/Races";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { DataProvider } from "./context/DataContext";



function App() {

  const [mode, setMode] = useState(true)

  return (
    <BrowserRouter>
      <DataProvider>
      <div className={ mode ? 'dark-mode' : 'light-mode' }>
        <Navbar mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/drivers" element={<Drivers />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
          <Route path="/races" element={<Races />}></Route>
        </Routes>
        <Footer />
      </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
