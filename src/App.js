import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Allroutes from './Pages/Allroutes';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import Calendar from './components/calender';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
