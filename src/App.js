
import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';



function App() {

  const [navLinks] = useState(['About Me', 'Portfolio', 'Contact', 'Resume'])

  const [currentNavLink, setcurrentNavLink] = useState(navLinks[0]);

  function renderContent(navLink) {
    switch (navLink) {
      case 'About Me':
        return <About />
      case 'Portfolio':
        return <Portfolio />
      case 'Contact':
        return <ContactForm />
      case 'Resume':
        return <Resume />


    }
  }

  return (
    <>
      <Nav
        navLinks={navLinks}
        currentNavLink={currentNavLink}
        setcurrentNavLink={setcurrentNavLink}
      />
      <main>
<<<<<<< HEAD
        <Resume></Resume>
    {/* <About></About> */}
    {/* <ContactForm></ContactForm> */}
=======
        {renderContent(currentNavLink)}
>>>>>>> feature/portfolio
      </main>
      <Footer />
    </>
  );
}

export default App;