import React from "react";
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Portofolio from './components/portofolio/portofolio'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
import Experience from "./components/experience/Experience";
import Service from "./components/service/Service";


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service/>
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
