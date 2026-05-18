import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
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
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import WhatsAppButton from './components/WhatsAppButton';

function BlogPostWrapper({ setPage }) {
  const { slug } = useParams();
  return <BlogPost setPage={setPage} slug={slug} />;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Proxy setPage function to React Router navigate to prevent any child component refactoring
  const setPage = (id) => {
    if (id === 'home') {
      navigate('/');
    } else if (id.startsWith('blog/')) {
      navigate(`/${id}`);
    } else {
      navigate(`/${id}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine active page ID for Nav
  let pageId = location.pathname.substring(1) || 'home';

  return (
    <div>
      <Nav page={pageId} setPage={setPage} />
      <Routes>
        <Route path="/" element={<Home setPage={setPage} />} />
        <Route path="/about" element={<About setPage={setPage} />} />
        <Route path="/capabilities" element={<Capabilities setPage={setPage} />} />
        <Route path="/industries" element={<Industries setPage={setPage} />} />
        <Route path="/quality" element={<Quality setPage={setPage} />} />
        <Route path="/certifications" element={<Certifications setPage={setPage} />} />
        <Route path="/testimonials" element={<Testimonials setPage={setPage} />} />
        <Route path="/leadership" element={<Leadership setPage={setPage} />} />
        <Route path="/contact" element={<Contact setPage={setPage} />} />
        <Route path="/blog" element={<Blog setPage={setPage} />} />
        <Route path="/blog/:slug" element={<BlogPostWrapper setPage={setPage} />} />
        <Route path="*" element={<Home setPage={setPage} />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
