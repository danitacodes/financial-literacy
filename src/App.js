import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./screens/Home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Home />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
