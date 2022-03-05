
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Resume></Resume>
    {/* <About></About> */}
    {/* <ContactForm></ContactForm> */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;