import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { useContext, useState } from 'react';
import { ThemeContext } from './context';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style = {{ backgroundColor: darkMode ? "#222" : "#fff",
                    color: darkMode && "#fff", }}>
      <Toggle />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
