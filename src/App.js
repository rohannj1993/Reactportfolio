import logo from './logo.svg';
import './App.css';
import Nav from "./components/navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/portfolio"
import Contact from './components/Contact';
import Resume from "./components/Resume"
function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home/>
      <About/>
      <Contact/>
      <Resume/>
   
      <Footer/>
    </div>
  );
}

export default App;
