import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
function Posts()
{
    return (
        <>
        <h1 className="mt-2">Quản lý bài đăng</h1>
         <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tiêu đề</th>
      <th scope="col">Ảnh bìa</th>
      <th scope="col">Người đăng</th>
      <th scope="col">Xem chi tiết</th>
       <th scope="col">Xóa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tiêu đề bài viết 1</td>
      <td>
        <img src={avatar} width="100px"/>
      </td>
      <td>Nguyễn Văn A</td>
       <td>
           <nav>
            <Link to={`/admin/xem-chi-tiet-bai-dang/1`} className="btn btn-primary">Xem chi tiết</Link>
           </nav>
        </td>
        <td>
            <button className="btn  btn-danger">Xóa</button>
        </td>
    </tr>
  <tr>
      <th scope="row">2</th>
      <td>Tiêu đề bài viết 2</td>
      <td>
        <img src={avatar} width="100px"/>
      </td>
      <td>Nguyễn Văn B</td>
       <td>
           <nav>
            <Link to={`/admin/xem-chi-tiet-bai-dang/1`} className="btn btn-primary">Xem chi tiết</Link>
           </nav>
        </td>
        <td>
             <button className="btn  btn-danger">Xóa</button>
        </td>
    </tr>
  </tbody>
</table>
        </>
        
    );
}
export default Posts;