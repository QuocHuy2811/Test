import React, { useState } from 'react';
import { RECIPES } from '../../data/mockData.js';

// Mock cookbooks data
const INITIAL_COOKBOOKS = [
  {
    id: 1,
    name: 'Món ngon cuối tuần',
    recipes: [RECIPES[0], RECIPES[2]],
  },
  {
    id: 2,
    name: 'Healthy & Dinh dưỡng',
    recipes: [RECIPES[1]],
  },
];

const MOCK_BLOGS = [
  {
    id: '1',
    title: 'Review 5 quán phở ngon nhất Hà Nội không thể bỏ qua',
    slug: 'review-5-quan-pho',
    author: { id: 'u1', username: 'foodreviewer', fullName: 'Thánh Ăn', avatar: 'https://picsum.photos/id/64/100/100', role: 'KHACH' },
    content: 'Phở là món ăn quốc hồn quốc túy...',
    imageFeatured: 'https://picsum.photos/id/292/800/600',
    status: 'published',
    tags: ['review', 'hà nội', 'phở'],
    createdAt: '2023-10-15'
  },
  {
    id: '2',
    title: 'Mẹo chọn sầu riêng ngon, nhiều cơm, hạt lép',
    slug: 'meo-chon-sau-rieng',
    author: { id: 'u2', username: 'nongsan', fullName: 'Bác Ba Phi', avatar: 'https://picsum.photos/id/65/100/100', role: 'THANHVIEN' },
    content: 'Sầu riêng là vua của các loại trái cây...',
    imageFeatured: 'https://picsum.photos/id/431/800/600',
    status: 'published',
    tags: ['mẹo vặt', 'hoa quả'],
    createdAt: '2023-10-12'
  }
];

const MOCK_COMMENTS = [
  {
    id: 1,
    user: { fullName: 'Mai Lan', avatar: 'https://picsum.photos/id/101/40/40' },
    content: 'Bài viết rất hữu ích, cảm ơn bạn!',
    createdAt: '2023-10-16',
  },
  {
    id: 2,
    user: { fullName: 'Hùng', avatar: 'https://picsum.photos/id/102/40/40' },
    content: 'Mình đã thử quán phở số 3, ngon thật!',
    createdAt: '2023-10-17',
  },
];

const Profile = () => {
  const [cookbooks, setCookbooks] = useState(INITIAL_COOKBOOKS);
  const [newCookbookName, setNewCookbookName] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showCreateCookbook, setShowCreateCookbook] = useState(false);
  const [selectedCookbook, setSelectedCookbook] = useState(null);
  const [addRecipeId, setAddRecipeId] = useState('');

  // Edit profile modal state
  const [showEditModal, setShowEditModal] = useState(false);
  const [avatar, setAvatar] = useState('https://picsum.photos/200/200');
  const [bio, setBio] = useState('@yeuamthuc • Food Blogger');
  const [editAvatar, setEditAvatar] = useState(avatar);
  const [editAvatarFile, setEditAvatarFile] = useState(null);
  const [editBio, setEditBio] = useState(bio);


  const handleOpenEditModal = () => {
    setEditAvatar(avatar);
    setEditAvatarFile(null);
    setEditBio(bio);
    setShowEditModal(true);
  };

  // Khi chọn file ảnh mới
  const handleAvatarFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    setAvatar(editAvatar);
    setBio(editBio);
    setShowEditModal(false);
  };

  // Create new cookbook
  const handleCreateCookbook = () => {
    if (newCookbookName.trim()) {
      setCookbooks([
        ...cookbooks,
        { id: Date.now(), name: newCookbookName, recipes: [] },
      ]);
      setNewCookbookName('');
      setShowCreateCookbook(false);
    }
  };

  // Add recipe to selected cookbook
  const handleAddRecipeToCookbook = () => {
    if (!selectedCookbook || !addRecipeId) return;
    const recipeToAdd = RECIPES.find(r => r.id === addRecipeId);
    if (!recipeToAdd) return;
    setCookbooks(cookbooks.map(cb =>
      cb.id === selectedCookbook.id
        ? { ...cb, recipes: [...cb.recipes, recipeToAdd] }
        : cb
    ));
    setAddRecipeId('');
  };

  return (
    <div className="pb-24 md:pb-0">
      <div className="h-48 bg-gradient-to-r from-orange-400 to-red-500 relative">
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
           <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
             <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>
      
      <div className="pt-20 px-4 text-center max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Nguyễn Văn A</h1>
        <p className="text-gray-500 mb-4">{bio}</p>
        
        <div className="flex justify-center gap-6 mb-8 text-sm">
           <div className="flex flex-col">
             <span className="font-bold text-lg text-gray-800">25</span>
             <span className="text-gray-500">Công thức</span>
           </div>
           <div className="flex flex-col">
             <span className="font-bold text-lg text-gray-800">1.2k</span>
             <span className="text-gray-500">Followers</span>
           </div>
           <div className="flex flex-col">
             <span className="font-bold text-lg text-gray-800">300</span>
             <span className="text-gray-500">Following</span>
           </div>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700" onClick={handleOpenEditModal}>Chỉnh sửa</button>
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-200">Chia sẻ</button>
        </div>
            {/* Edit Profile Modal */}
            {showEditModal && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md relative">
                  <h3 className="font-bold text-lg mb-4">Chỉnh sửa hồ sơ</h3>
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 rounded-full border-2 border-orange-400 overflow-hidden mb-2">
                      <img src={editAvatar} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="mb-2"
                      onChange={handleAvatarFileChange}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="border px-3 py-2 rounded w-full"
                      placeholder="Bio..."
                      value={editBio}
                      onChange={e => setEditBio(e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded" onClick={handleSaveProfile}>Lưu</button>
                    <button className="text-gray-500 px-4 py-2" onClick={() => setShowEditModal(false)}>Hủy</button>
                  </div>
                </div>
              </div>
            )}
      </div>

      <div className="p-4 md:p-8 max-w-4xl mx-auto">
        {/* Blog & Review Section */}
        <h2 className="text-lg font-bold text-gray-800 mb-4">Blog & Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {MOCK_BLOGS.map(blog => (
            <div key={blog.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer" onClick={() => setSelectedBlog(blog)}>
              <img src={blog.imageFeatured} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                  <img src={blog.author.avatar} alt="author" className="w-5 h-5 rounded-full" />
                  <span className="font-medium text-gray-700">{blog.author.fullName}</span>
                  <span>•</span>
                  <span>{blog.createdAt}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Blog detail & comments */}
        {selectedBlog && (
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-10">
            <button className="mb-4 text-orange-600" onClick={() => setSelectedBlog(null)}>&larr; Quay lại</button>
            <img src={selectedBlog.imageFeatured} alt={selectedBlog.title} className="w-full h-60 object-cover rounded mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedBlog.title}</h2>
            <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
              <img src={selectedBlog.author.avatar} alt="author" className="w-5 h-5 rounded-full" />
              <span className="font-medium text-gray-700">{selectedBlog.author.fullName}</span>
              <span>•</span>
              <span>{selectedBlog.createdAt}</span>
            </div>
            <p className="text-gray-700 mb-4">{selectedBlog.content}</p>
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">Bình luận</h3>
              <div className="space-y-4">
                {MOCK_COMMENTS.map(cmt => (
                  <div key={cmt.id} className="flex gap-3 items-start">
                    <img src={cmt.user.avatar} alt={cmt.user.fullName} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-medium text-gray-800">{cmt.user.fullName}</div>
                      <div className="text-gray-600 text-sm mb-1">{cmt.content}</div>
                      <div className="text-xs text-gray-400">{cmt.createdAt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Recipes posted by user */}
        <h2 className="text-lg font-bold text-gray-800 mb-4">Công thức đã đăng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RECIPES.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex">
              <img src={recipe.image} alt={recipe.title} className="w-32 h-32 object-cover" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 line-clamp-1">{recipe.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-2">{recipe.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <img src={recipe.author.avatar} alt={recipe.author.fullName} className="w-5 h-5 rounded-full" />
                  <span>{recipe.author.fullName}</span>
                  <span>•</span>
                  <span>{recipe.region}</span>
                  <span>•</span>
                  <span>{recipe.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cookbook Section */}
        <h2 className="text-lg font-bold text-gray-800 mb-4 mt-12">Cookbook (Bộ sưu tập món ăn)</h2>
        <div className="mb-4">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-700" onClick={() => setShowCreateCookbook(true)}>Tạo Cookbook mới</button>
        </div>
        {showCreateCookbook && (
          <div className="mb-6 flex gap-2 items-center">
            <input type="text" className="border px-3 py-2 rounded" placeholder="Tên Cookbook..." value={newCookbookName} onChange={e => setNewCookbookName(e.target.value)} />
            <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleCreateCookbook}>Tạo</button>
            <button className="text-gray-500 px-2" onClick={() => setShowCreateCookbook(false)}>Hủy</button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {cookbooks.map(cb => (
            <div key={cb.id} className="bg-orange-50 rounded-xl shadow-sm border border-orange-200 overflow-hidden">
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-orange-700 text-lg">{cb.name}</h3>
                  <button className="text-xs bg-orange-600 text-white px-2 py-1 rounded" onClick={() => setSelectedCookbook(cb)}>Thêm món ăn</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cb.recipes.length === 0 ? (
                    <span className="text-gray-400">Chưa có món ăn nào</span>
                  ) : (
                    cb.recipes.map(recipe => (
                      <div key={recipe.id} className="bg-white border rounded px-2 py-1 text-sm text-gray-700 flex items-center gap-1">
                        <img src={recipe.image} alt={recipe.title} className="w-6 h-6 object-cover rounded" />
                        <span>{recipe.title}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Add recipe to cookbook modal */}
        {selectedCookbook && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md">
              <h3 className="font-bold text-lg mb-4">Thêm món ăn vào "{selectedCookbook.name}"</h3>
              <select className="border px-3 py-2 rounded w-full mb-4" value={addRecipeId} onChange={e => setAddRecipeId(e.target.value)}>
                <option value="">Chọn món ăn...</option>
                {RECIPES.map(r => (
                  <option key={r.id} value={r.id}>{r.title}</option>
                ))}
              </select>
              <div className="flex gap-2">
                <button className="bg-orange-600 text-white px-4 py-2 rounded" onClick={handleAddRecipeToCookbook}>Thêm</button>
                <button className="text-gray-500 px-4 py-2" onClick={() => setSelectedCookbook(null)}>Đóng</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;