import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Vocabulary from "./components/Vocabulary/Vocabulary";
import SpendSaveGame from "./components/SpendSave/SpendSaveGameSetup/SpendSaveGame";
import Start from './components/SpendSave/SpendSaveGameSetup/Start';
import Lost from './components/SpendSave/SpendSaveGameSetup/Lost';



function App() {
  return (
     <>
        <Routes>
        <Route path='/spend/game' element={<SpendSaveGame/>} />
        </Routes>
        <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/vocab' element={<Vocabulary/>} />
          
          <Route path='/spend/start' element={<Start/>} />
          <Route path='/spend/lost' element={<Lost/>} />
        </Routes>
        </>
        {/* <div className="image-cache">
          {spendSaveData.choices && 
            spendSaveData.map((choice, cdx) => {
              if(choice.backgroundImage)
              return <img key={cdx} src={choice.backgroundImage} alt="Cache" />
              return ""
            })
          }
        </div> */}
        <Footer />
     </>
  );
}

export default App;
