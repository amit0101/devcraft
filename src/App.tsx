import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Capabilities from './pages/Capabilities';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Chat } from './components/Chat';

// Wrapper component that uses the scrollToTop hook
function AppContent() {
  useScrollToTop();

  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Chat />
      </Layout>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
