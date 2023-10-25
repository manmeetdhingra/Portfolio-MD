import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Pages/Main/Main';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
