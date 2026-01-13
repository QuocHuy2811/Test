import { Link } from "react-router-dom";

function Recipes()
{
 return(
      <>
        <h1 className="mt-2">Quản lý công thức nấu ăn</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">ID người đăng công thức</th>
              <th scope="col">Tên món ăn</th>
              <th scope="col">Xem chi tiết</th>
              <th scope="col">Xóa</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2</td>
              <td>Món ăn 1</td>
               <td>
                   <nav>
                    <Link className="btn btn-primary" to="/admin/xem-chi-tiet-cong-thuc/1">Xem chi tiết</Link>
                   </nav>
                </td>
                <td>
                  <button className="btn btn-danger">Xóa</button>
                </td>
            </tr>
           
          </tbody>
        </table>
        </>
 );
}
export default Recipes