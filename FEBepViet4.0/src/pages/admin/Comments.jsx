function Comments()
{
     return (
        <>
        <h1 className="mt-2">Quản lý bình luận</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">ID người bình luận</th>
              <th scope="col">ID nơi bình luận</th>
              <th scope="col">Loại nơi bình luận (Công thức nấu ăn/bài đăng)</th>
              <th scope="col">Nội dung</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>1</td>
              <td>2</td>
               <td>
                   Công thức nấu ăn
                </td>
                <td>
                   Đây là thử
                </td>
            </tr>
           
          </tbody>
        </table>
        </>
     );
}
export default Comments