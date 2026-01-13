import React, { useState } from 'react';
import { getRecipeSuggestions } from '../../services/geminiService.js';

const SmartChef = () => {
  const [ingredients, setIngredients] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const handleSuggest = async () => {
    if (!ingredients.trim()) return;
    setLoading(true);
    setError(null);
    setSuggestions([]);
    try {
      const result = await getRecipeSuggestions(ingredients);
      setSuggestions(result);
    } catch (e) {
      setError('Có lỗi xảy ra khi kết nối với đầu bếp AI. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 pb-24 md:pb-0">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white rounded-b-[2rem] shadow-xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block p-3 bg-white/20 rounded-full mb-4 backdrop-blur-md">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Hôm nay ăn gì?</h1>
          <p className="text-orange-100 mb-6">Nhập nguyên liệu bạn có trong tủ lạnh, AI sẽ gợi ý món ngon!</p>
          
          <div className="bg-white rounded-2xl p-2 shadow-lg flex gap-2">
            <input 
              type="text" 
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSuggest()}
              placeholder="Ví dụ: thịt gà, sả, ớt, gừng..." 
              className="flex-1 px-4 py-3 text-gray-800 outline-none rounded-xl"
            />
            <button 
              onClick={handleSuggest}
              disabled={loading}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors disabled:opacity-70 flex items-center gap-2"
            >
              {loading ? 'Đang nghĩ...' : 'Gợi ý'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 mb-6 text-center">
            {error}
          </div>
        )}

        {suggestions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    ⏱ {item.cookingTime}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-orange-800 uppercase tracking-wide mb-2">Tại sao chọn món này?</p>
                  <p className="text-sm text-orange-700 italic">{item.reason}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Nguyên liệu cần thêm:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ing, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded border border-gray-200">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : !loading && (
          <div className="text-center text-gray-400 mt-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 opacity-50">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Chưa có gợi ý nào. Hãy nhập nguyên liệu để bắt đầu!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartChef;