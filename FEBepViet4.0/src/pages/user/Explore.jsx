import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeCard from './RecipeCard.jsx';
import { RECIPES } from '../../data/mockData.js';

const CATEGORIES = [
  { id: 'all', name: 'Tất cả' },
  { id: 'bac', name: 'Miền Bắc' },
  { id: 'trung', name: 'Miền Trung' },
  { id: 'nam', name: 'Miền Nam' },
  { id: 'chay', name: 'Món Chay' },
  { id: 'banh', name: 'Bánh Ngọt' },
];

const Explore = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Use shared RECIPES directly for exploration to keep it consistent
  const filteredRecipes = RECIPES.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'bac') return matchesSearch && r.region === 'Bắc';
    if (activeTab === 'trung') return matchesSearch && r.region === 'Trung';
    if (activeTab === 'nam') return matchesSearch && r.region === 'Nam';
    return matchesSearch;
  });

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto pb-24 md:pb-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Khám phá Ẩm thực</h1>
        
        <div className="relative mb-6">
          <input 
            type="text"
            placeholder="Tìm kiếm món ăn, đầu bếp..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-4 top-3.5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === cat.id 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onClick={() => handleRecipeClick(recipe)}
          />
        ))}
      </div>
      
      {filteredRecipes.length === 0 && (
         <div className="text-center py-12 text-gray-500">
           <p>Không tìm thấy công thức nào phù hợp.</p>
         </div>
      )}
    </div>
  );
};

export default Explore;