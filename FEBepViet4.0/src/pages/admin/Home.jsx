import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home()
{
    const data = [
  { month: 'T1', revenue: 4000 },
  { month: 'T2', revenue: 3000 },
  { month: 'T3', revenue: 2000 },
  { month: 'T4', revenue: 2780 },
  { month: 'T5', revenue: 1890 },
  { month: 'T6', revenue: 2390 },
  { month: 'T7', revenue: 3490 },
  { month: 'T8', revenue: 4000 },
  { month: 'T9', revenue: 3000 },
  { month: 'T10', revenue: 2000 },
  { month: 'T11', revenue: 2780 },
  { month: 'T12', revenue: 3890 },
];
    return (
        <>
            <h1 className="mt-2">Trang chủ</h1>
            <div className="row mb-3">
                <div className="col-4">
                    <div className="card shadow">
                            <div className="card-body">
                                    <p className="text-center">10 Người Dùng</p>
                                    
                            </div>
                    </div>
                
                </div>
                 <div className="col-4">
                    <div className="card shadow">
                            <div className="card-body">
                                    <p className="text-center">20 Công thức nấu ăn</p>
                                    
                            </div>
                    </div>
                
                </div>
                 <div className="col-4">
                    <div className="card shadow">
                            <div className="card-body">
                                    <p className="text-center">10 Bài Đăng</p>
                                    
                            </div>
                    </div>
                
                </div>
            </div>        
            <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          {/* Lưới ngang cho biểu đồ */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          
          {/* Trục X hiển thị tháng */}
          <XAxis dataKey="month" />
          
          {/* Trục Y hiển thị giá trị */}
          <YAxis />
          
          {/* Hiệu ứng khi di chuột vào cột */}
          <Tooltip />
          
          {/* Chú thích */}
          <Legend />
          
          {/* Cột biểu đồ: bạn có thể đổi màu tại stroke và fill */}
          <Bar dataKey="revenue" name="Biểu đồ số lượng công thức nấu ăn trong năm 2025" fill="#0d6efd" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
             </div>
            <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                {/* Lưới ngang cho biểu đồ */}
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                
                {/* Trục X hiển thị tháng */}
                <XAxis dataKey="month" />
                
                {/* Trục Y hiển thị giá trị */}
                <YAxis />
                
                {/* Hiệu ứng khi di chuột vào cột */}
                <Tooltip />
                
                {/* Chú thích */}
                <Legend />
                
                {/* Cột biểu đồ: bạn có thể đổi màu tại stroke và fill */}
                <Bar dataKey="revenue" name="Biểu đồ số lượng bài đăng trong năm 2025" fill="#0d6efd" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </>
    );
}
export default Home;