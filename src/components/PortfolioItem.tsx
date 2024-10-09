import React from 'react';
import { Link } from 'react-router-dom';
import { PortfolioItem as PortfolioItemType } from '../types';

interface PortfolioItemProps {
  item: PortfolioItemType;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/project/${item.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;