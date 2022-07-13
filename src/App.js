import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Vocabulary from "./components/Vocabulary/Vocabulary";
import SpendSave from "./components/SpendSave/SpendSave";


function App() {
  return (
     <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/vocab' element={<Vocabulary/>} />
          <Route path='/save' element={<SpendSave/>} />
        </Routes>
        <Footer />
     </>
  );
}

export default App;
