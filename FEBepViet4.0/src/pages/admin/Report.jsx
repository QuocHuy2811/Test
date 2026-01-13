function Report()
{
    return (
        <>
        <h1 className="mt-2">Quản lý báo cáo người dùng</h1>
         <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">ID người tố cáo</th>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">ID bị tố cáo</th>
              <th scope="col">Loại bị tố cáo</th>
             <th scope="col">Lý do</th>
             <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>1</td>
              <td>nva</td>
               <td>2</td>
                <td>Bài đăng</td>
               <td>
                   <p>Đây chỉ là test</p>
                </td>
                <td>
                    <button className="btn  btn-danger">Chưa xử lý</button>
                </td>
            </tr>
           <tr>
              <th scope="row">2</th>
              <td>2</td>
              <td>nvb</td>
               <td>1</td>
                <td>Bài đăng</td>
               <td>
                   <p>Đây chỉ là test 2</p>
                </td>
                <td>
                    <button className="btn  btn-success">Đã xử lý</button>
                </td>
            </tr>
          </tbody>
        </table>
        </>
    );
}
export default Report;