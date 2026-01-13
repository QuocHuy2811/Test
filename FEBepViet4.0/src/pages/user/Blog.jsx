import React from 'react';

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

const BlogFeed = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [form, setForm] = React.useState({
    title: '',
    slug: '',
    content: '',
    imageFeatured: '', // sẽ lưu url tạm
    status: 'draft',
    tags: '',
  });
  const [imagePreview, setImagePreview] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setForm(prev => ({ ...prev, imageFeatured: url }));
        setImagePreview(url);
      }
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setShowModal(false);
      setForm({ title: '', slug: '', content: '', imageFeatured: '', status: 'draft', tags: '' });
    }, 1200);
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto pb-24 md:pb-0">
      <div className="flex justify-between items-center mb-8">
         <h1 className="text-2xl font-bold text-gray-800">Góc Chia Sẻ & Review</h1>
         <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 flex items-center gap-2" onClick={() => setShowModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Viết Blog
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_BLOGS.map(blog => (
          <div key={blog.id} className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden h-64 mb-4 relative">
              <img 
                src={blog.imageFeatured} 
                alt={blog.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase text-orange-600">
                {blog.tags[0]}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                 <img src={blog.author.avatar} alt="author" className="w-5 h-5 rounded-full" />
                 <span className="font-medium text-gray-700">{blog.author.fullName}</span>
                 <span>•</span>
                 <span>{blog.createdAt}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-2">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Modal viết blog  */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg mx-auto p-6 relative animate-fadeIn">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-xl font-bold text-center mb-4">Tạo bài viết Blog & Review</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Tiêu đề bài viết" required />
              <textarea name="content" value={form.content} onChange={handleChange} className="w-full border rounded px-3 py-2" rows={5} placeholder="Nội dung bài viết" required />
              <div>
                <label className="block font-semibold mb-1">Ảnh món ăn</label>
                <input type="file" accept="image/*" name="imageFeatured" onChange={handleChange} className="w-full border rounded px-3 py-2" />
                {imagePreview && (
                  <img src={imagePreview} alt="Preview" className="mt-2 rounded w-full h-40 object-cover" />
                )}
              </div>
           
              <input type="text" name="tags" value={form.tags} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Tags (phân cách bằng dấu phẩy)" />
              <div className="flex gap-2 justify-end mt-2">
                <button type="button" className="px-4 py-2 rounded bg-gray-100 text-gray-700 font-medium" onClick={() => setShowModal(false)}>Đóng</button>
                <button type="submit" className="px-4 py-2 rounded bg-orange-600 text-white font-semibold hover:bg-orange-700">Đăng</button>
              </div>
              {success && <div className="text-green-600 font-semibold mt-2 text-center">Đã đăng blog thành công!</div>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogFeed;