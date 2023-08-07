import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Work } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <div className=''>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default App;