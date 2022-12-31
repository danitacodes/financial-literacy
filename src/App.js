import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Vocabulary from "./components/Vocabulary/Vocabulary";




function App() {
  return (
     <>
        <Routes>
        
        </Routes>
        <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/vocab' element={<Vocabulary/>} />
          
      
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
