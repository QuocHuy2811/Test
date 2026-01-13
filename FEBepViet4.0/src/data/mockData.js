export const RECIPES = [
  {
    id: '1',
    title: 'Phở Bò Gia Truyền',
    slug: 'pho-bo-gia-truyen',
    author: { id: 'u1', username: 'chefhung', fullName: 'Chef Hùng', avatar: 'https://picsum.photos/id/64/100/100', role: 'THANHVIEN' },
    image: 'https://picsum.photos/id/292/800/600',
    description: 'Nước dùng trong veo, ngọt thanh từ xương ống và sá sùng.',
    likes: 1240,
    rating: 4.8,
    time: '3h 30p',
    difficulty: 'Khó',
    region: 'Bắc',
    servings: 4,
    tags: ['truyền thống', 'bữa sáng'],
    ingredients: [
      { name: 'Thịt bò thăn', amount: '500g', note: 'Thái mỏng' },
      { name: 'Xương ống', amount: '1kg', note: 'Ninh lấy nước dùng' },
      { name: 'Hành tây', amount: '2 củ', note: 'Nướng thơm' },
      { name: 'Gừng', amount: '1 củ', note: 'Nướng thơm' },
      { name: 'Gia vị phở', amount: '1 gói', note: 'Quế, hồi, thảo quả' }
    ],
    steps: [
      { stepNumber: 1, content: 'Rửa sạch xương ống, chần qua nước sôi để khử mùi hôi. Sau đó cho vào nồi áp suất ninh 30 phút.' },
      { stepNumber: 2, content: 'Nướng hành tây, hành tím và gừng cho thơm. Rửa sạch, đập dập và cho vào nồi nước dùng.' },
      { stepNumber: 3, content: 'Thái thịt bò mỏng. Chần bánh phở qua nước sôi.' },
      { stepNumber: 4, content: 'Xếp bánh phở ra bát, thêm thịt bò, hành lá. Chan nước dùng nóng hổi và thưởng thức.' }
    ],
    status: 'published'
  },
  {
    id: '2',
    title: 'Bún Chả Hà Nội',
    slug: 'bun-cha-ha-noi',
    author: { id: 'u2', username: 'mebong', fullName: 'Mẹ Bống', avatar: 'https://picsum.photos/id/65/100/100', role: 'THANHVIEN' },
    image: 'https://picsum.photos/id/225/800/600',
    description: 'Thịt nướng than hoa thơm lừng, nước mắm chua ngọt chuẩn vị.',
    likes: 856,
    rating: 4.5,
    time: '1h 00p',
    difficulty: 'Trung bình',
    region: 'Bắc',
    servings: 2,
    tags: ['thịt nướng', 'hè phố'],
    ingredients: [],
    steps: [],
    status: 'published'
  },
  {
    id: '3',
    title: 'Cơm Tấm Sài Gòn',
    slug: 'com-tam-sai-gon',
    author: { id: 'u3', username: 'bepsaigon', fullName: 'Bếp Sài Gòn', avatar: 'https://picsum.photos/id/66/100/100', role: 'ADMIN' },
    image: 'https://picsum.photos/id/429/800/600',
    description: 'Sườn nướng mỡ hành, bì thính và chả trứng hấp dẫn.',
    likes: 2100,
    rating: 4.9,
    time: '1h 30p',
    difficulty: 'Trung bình',
    region: 'Nam',
    servings: 1,
    tags: ['sài gòn', 'cơm tấm'],
    ingredients: [],
    steps: [],
    status: 'published'
  },
  {
    id: '4',
    title: 'Mì Quảng Gà',
    slug: 'mi-quang-ga',
    author: { id: 'u4', username: 'cohai', fullName: 'Cô Hai', avatar: 'https://picsum.photos/id/67/100/100', role: 'THANHVIEN' },
    image: 'https://picsum.photos/id/493/800/600',
    description: 'Hương vị miền Trung đậm đà với nước nhưn sệt.',
    likes: 745,
    rating: 4.6,
    time: '45p',
    difficulty: 'Trung bình',
    region: 'Trung',
    servings: 3,
    tags: ['đặc sản', 'mì quảng'],
    ingredients: [],
    steps: [],
    status: 'published'
  },
   {
    id: '5',
    title: 'Bánh Xèo Miền Tây',
    slug: 'banh-xeo',
    author: { id: 'u5', username: 'utnho', fullName: 'Út Nhỏ', avatar: 'https://picsum.photos/id/68/100/100', role: 'THANHVIEN' },
    image: 'https://picsum.photos/id/431/800/600',
    description: 'Vỏ bánh giòn tan, nhân tôm thịt đầy đặn ăn kèm rau rừng.',
    likes: 1500,
    rating: 4.7,
    time: '1h',
    difficulty: 'Trung bình',
    region: 'Nam',
    servings: 4,
    tags: ['bánh dân gian', 'ăn vặt'],
    ingredients: [],
    steps: [],
    status: 'published'
  },
   {
    id: '6',
    title: 'Nem Rán Giòn',
    slug: 'nem-ran',
    author: { id: 'u1', username: 'chefhung', fullName: 'Chef Hùng', avatar: 'https://picsum.photos/id/64/100/100', role: 'THANHVIEN' },
    image: 'https://picsum.photos/id/102/800/600',
    description: 'Nem rán (chả giò) giòn rụm, nhân miến mộc nhĩ thơm ngon.',
    likes: 930,
    rating: 4.6,
    time: '50p',
    difficulty: 'Trung bình',
    region: 'Bắc',
    servings: 4,
    tags: ['truyền thống', 'lễ tết'],
    ingredients: [],
    steps: [],
    status: 'published'
  }
];

// Mở rộng dữ liệu cho demo phân trang
export const ALL_RECIPES = [
  ...RECIPES,
  ...RECIPES.map(r => ({...r, id: r.id + '_2', title: r.title + ' (CN2)'})),
  ...RECIPES.map(r => ({...r, id: r.id + '_3', title: r.title + ' (CN3)'})),
];

export const getRecipeById = (id) => {
    return ALL_RECIPES.find(r => r.id === id);
};