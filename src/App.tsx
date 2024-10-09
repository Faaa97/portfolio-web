import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PortfolioItem from './components/PortfolioItem';
import ProjectDetails from './components/ProjectDetails';
import SearchBar from './components/SearchBar';
import { getPortfolioItems } from './data/portfolioItems';
import { PortfolioItem as PortfolioItemType } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItemType[]>([]);

  useEffect(() => {
    getPortfolioItems().then(setPortfolioItems);
  }, []);

  const filteredItems = portfolioItems.filter(item =>
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="container mx-auto py-8 px-4">
              <div className="mb-8">
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map(item => (
                  <PortfolioItem key={item.id} item={item} />
                ))}
              </div>
            </main>
          } />
          <Route path="/project/:id" element={<ProjectDetails items={portfolioItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;