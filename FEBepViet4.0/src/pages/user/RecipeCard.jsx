import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {recipe.time}
        </div>
        <div className="absolute bottom-2 left-2 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-md shadow-sm">
          {recipe.region}
        </div>
      </div>
      
      <div className="p-3 flex flex-col flex-1">
        <div className="mb-1">
          <h3 className="text-base font-bold text-gray-800 line-clamp-1 hover:text-orange-600 transition-colors">{recipe.title}</h3>
        </div>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2 flex-1">{recipe.description}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {recipe.tags.slice(0, 2).map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-full font-medium">
              #{tag}
            </span>
          ))}
          {recipe.tags.length > 2 && (
             <span className="bg-gray-50 text-gray-400 text-[10px] px-2 py-1 rounded-full">+{recipe.tags.length - 2}</span>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-2 mt-auto">
          <div className="flex items-center gap-1">
            <img 
              src={recipe.author.avatar} 
              alt={recipe.author.fullName} 
              className="w-6 h-6 rounded-full border border-gray-200 object-cover"
            />
            <span className="text-xs font-semibold text-gray-700 truncate max-w-[80px]">{recipe.author.fullName}</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="flex items-center gap-1 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium">{recipe.rating}</span>
             </div>
             <div className="flex items-center gap-1 text-gray-400">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs">{recipe.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;