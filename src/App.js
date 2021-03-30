import "./App.css";
import SideBar from "./components/Sidebar/Sidebar";
import HeroImg from "./components/HeroImg/HeroImg";
import Profile from "./components/Profile/Profile";
import Abilities from "./components/Abilities/Abilities";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <SideBar />
      <HeroImg />
      <Profile />
      <Education />
      <Abilities />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
