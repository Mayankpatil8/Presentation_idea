import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Industries from './pages/Industries';
import Quality from './pages/Quality';
import Certifications from './pages/Certifications';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Leadership from './pages/Leadership';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = {
    home:           <Home setPage={navigate} />,
    about:          <About setPage={navigate} />,
    capabilities:   <Capabilities setPage={navigate} />,
    industries:     <Industries setPage={navigate} />,
    quality:        <Quality setPage={navigate} />,
    certifications: <Certifications setPage={navigate} />,
    testimonials:   <Testimonials setPage={navigate} />,
    leadership: <Leadership setPage={navigate} />,
    contact:        <Contact setPage={navigate} />,
  };

  return (
    <div>
      <Nav page={page} setPage={navigate} />
      {pages[page] || pages.home}
    </div>
  );
}
