import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Resume from "./components/Resume/Resume.jsx"
import Background from "./components/Background.jsx"
import './styles.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

export default function App() {

  return (
  <Router>
    <Background />
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
  </Router>
  )
}


