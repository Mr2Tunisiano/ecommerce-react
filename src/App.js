import About from "./components/about"
import Details from './components/details'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path='/' element={<About />} />
      <Route path="/product/:id" element={<Details />} />
    </Routes>
    </div>
  );
}

export default App;
