import React, { useState } from 'react';

const PostRecipe = () => {
  const [ingredients, setIngredients] = useState([{ name: '', amount: '', note: '' }]);
  const [steps, setSteps] = useState([{ stepNumber: 1, content: '' }]);

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '', note: '' }]);
  };

  const removeIngredient = (index) => {
    const newIng = [...ingredients];
    newIng.splice(index, 1);
    setIngredients(newIng);
  };

  const updateIngredient = (index, field, value) => {
    const newIng = [...ingredients];
    newIng[index] = { ...newIng[index], [field]: value };
    setIngredients(newIng);
  };

  const addStep = () => {
    setSteps([...steps, { stepNumber: steps.length + 1, content: '' }]);
  };

  const updateStep = (index, value) => {
    const newSteps = [...steps];
    newSteps[index].content = value;
    setSteps(newSteps);
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto pb-24 md:pb-0">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-3xl">📝</span> Đăng công thức mới
      </h1>
      
      <div className="space-y-6">
        {/* Main Info Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2">Thông tin chung</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Tên món ăn <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" placeholder="Ví dụ: Phở Bò Nam Định" />
             </div>
             

             <div className="md:col-span-2">
               <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả hấp dẫn <span className="text-red-500">*</span></label>
               <textarea className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 h-24" placeholder="Hãy mô tả hương vị, nguồn gốc và cảm nhận của bạn về món ăn..."></textarea>
             </div>

             <div className="md:col-span-2">
               <label className="block text-sm font-medium text-gray-700 mb-1">Hashtag (phân cách bằng dấu phẩy)</label>
               <input type="text" className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" placeholder="#phobo, #monngon, #dacsan" />
               <p className="text-xs text-gray-400 mt-1">Ví dụ: #phobo, #monngon, #dacsan</p>
             </div>

             <div className='mb-3'>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hình ảnh đại diện</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer h-full flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <p className="text-xs text-gray-500">Tải ảnh lên</p>
                  <input type="file" className="hidden" accept="image/*" />
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Thời gian (phút)</label>
                   <input type="number" className="w-full border border-gray-200 rounded-lg p-3" placeholder="60" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Độ khó</label>
                   <select className="w-full border border-gray-200 rounded-lg p-3 bg-white">
                     <option value="Bắc">Dễ</option>
                     <option value="Trung">Trung bình</option>
                     <option value="Nam">Khó</option>
                     <option value="Khác">Khác</option>
                   </select>
                </div>
               
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Vùng miền</label>
                   <select className="w-full border border-gray-200 rounded-lg p-3 bg-white">
                     <option value="Bắc">Miền Bắc</option>
                     <option value="Trung">Miền Trung</option>
                     <option value="Nam">Miền Nam</option>
                     <option value="Khác">Khác</option>
                   </select>
                </div>
             </div>
          </div>
        </div>

        {/* Ingredients Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
           <h2 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">Thành phần nguyên liệu</h2>
           <div className="space-y-3">
             {ingredients.map((ing, idx) => (
               <div key={idx} className="flex gap-2 items-start">
                  <div className="flex-1">
                     <input 
                      type="text" 
                      placeholder="Tên nguyên liệu (VD: Thịt bò)" 
                      value={ing.name}
                      onChange={(e) => updateIngredient(idx, 'name', e.target.value)}
                      className="w-full border border-gray-200 rounded-lg p-2 text-sm" 
                     />
                  </div>
                  <div className="w-24">
                     <input 
                      type="text" 
                      placeholder="Lượng" 
                      value={ing.amount}
                      onChange={(e) => updateIngredient(idx, 'amount', e.target.value)}
                      className="w-full border border-gray-200 rounded-lg p-2 text-sm" 
                     />
                  </div>
                   <div className="flex-1">
                     <input 
                      type="text" 
                      placeholder="Ghi chú (VD: Thái lát)" 
                      value={ing.note}
                      onChange={(e) => updateIngredient(idx, 'note', e.target.value)}
                      className="w-full border border-gray-200 rounded-lg p-2 text-sm" 
                     />
                  </div>
                  <button 
                    onClick={() => removeIngredient(idx)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
               </div>
             ))}
             <button 
                onClick={addIngredient}
                className="w-full py-2 border-2 border-dashed border-orange-200 text-orange-600 rounded-xl font-medium hover:bg-orange-50 transition-colors mt-2"
             >
                + Thêm nguyên liệu
             </button>
           </div>
        </div>

        {/* Steps Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
           <h2 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">Các bước thực hiện</h2>
           <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-orange-100">
                   <div className="absolute -left-2.5 top-0 bg-orange-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                     {step.stepNumber}
                   </div>
                   <div className="mb-2">
                      <textarea 
                        className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-orange-500" 
                        placeholder={`Mô tả chi tiết bước ${step.stepNumber}...`}
                        rows={3}
                        value={step.content}
                        onChange={(e) => updateStep(idx, e.target.value)}
                      ></textarea>
                   </div>
                   <div className="flex items-center gap-2">
                       <button className="text-sm text-gray-500 hover:text-orange-600 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                          Thêm ảnh bước {step.stepNumber}
                       </button>
                   </div>
                </div>
              ))}
              <button 
                onClick={addStep}
                className="w-full py-2 bg-orange-50 text-orange-600 rounded-xl font-medium hover:bg-orange-100 transition-colors"
             >
                + Thêm bước thực hiện
             </button>
           </div>
        </div>

        {/* Submit */}
        <div className="pt-4 pb-8 flex gap-4">
          
          <button className="flex-[2] bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200">
            Đăng công thức
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostRecipe;