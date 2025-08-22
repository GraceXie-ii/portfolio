import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Background from "./components/Background.jsx"
import Contact from "./components/Contact/Contact.jsx"
import './styles.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

export default function App() {

  return (
  <Router basename="/portfolio">
    <Background />
    <NavBar/>
    <Routes>
      <Route path="/portfolio" element={<Home/>}/>
      <Route path="/project" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  </Router>
  )
}


