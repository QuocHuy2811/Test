import { Link } from "react-router-dom";

function Categories()
{
    return (
        <>
        <div className="d-flex justify-content-between mt-2 align-items-center">
        <h1 className="mt-2">Quản lý danh mục</h1>
        <nav>
            <Link class="btn btn-primary" to="/admin/them-danh-muc">Thêm</Link>
        </nav>
        </div>
       
           <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên loại</th>
              <th scope="col">Slug</th>
              <th scope="col">Sửa</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Món chay</td>
              <td>mon-chay</td>
               <td>
                    <nav>
                        <Link className="btn btn-warning" to="/admin/sua-danh-muc/mon-chay">Sửa</Link>
                    </nav>
                </td>
                <td>
                    <button className="btn  btn-danger">Khóa</button>
                </td>
            </tr>
           <tr>
              <th scope="row">2</th>
              <td>Món mặn</td>
              <td>mon-man</td>
               <td>
                    <nav>
                        <Link className="btn btn-warning" to="/admin/sua-danh-muc/mon-man">Sửa</Link>
                    </nav>
                </td>
                <td>
                    <button className="btn  btn-success">Mở khóa</button>
                </td>
            </tr>
          </tbody>
        </table>
        </>
    );
}
export default Categories;