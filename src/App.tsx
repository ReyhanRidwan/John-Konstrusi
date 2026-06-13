/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Modular Page Views
import HomeView from './components/HomeView';
import ProjectsView from './components/ProjectsView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import FaqView from './components/FaqView';
import ContactView from './components/ContactView';

// Overlay Article details Modal
import ArticleModal from './components/ArticleModal';
import { Article } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [isArticleOpen, setIsArticleOpen] = useState<boolean>(false);

  const handleOpenArticle = (art: Article) => {
    setActiveArticle(art);
    setIsArticleOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} onOpenArticle={handleOpenArticle} />;
      case 'projects':
        return <ProjectsView />;
      case 'services':
        return <ServicesView />;
      case 'about':
        return <AboutView />;
      case 'faq':
        return <FaqView onOpenArticle={handleOpenArticle} />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} onOpenArticle={handleOpenArticle} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 font-sans selection:bg-orange-600 selection:text-white">
      {/* Auto snaps browser scroll coordinate to top on transitions */}
      <ScrollToTop page={currentPage} />

      {/* Global Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Page Canvas Stage */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Floating Detailed Articles Modal Drawer */}
      <ArticleModal 
        article={activeArticle} 
        isOpen={isArticleOpen} 
        onClose={() => setIsArticleOpen(false)} 
      />

      {/* Global Footer containing full embedded Google Map at the bottom of all routes */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

