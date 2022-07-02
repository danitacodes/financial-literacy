import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./screens/Home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <main>
        <Route exact path="/" component={Home} />
      </main>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
