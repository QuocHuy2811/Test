function Users()
{
    return (
        <>
        <h1 className="mt-2">Quản lý người dùng</h1>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tên tài khoản</th>
      <th scope="col">Tên đầy đủ</th>
      <th scope="col">Email</th>
      <th scope="col">Tiểu sử</th>
       <th scope="col">Trạng thái</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>nva</td>
      <td>Nguyễn Văn A</td>
      <td>nva@gmail.com</td>
      <td>Đây là tiểu sử của Nguyễn Văn A</td>
        <td>
            <button className="btn  btn-danger">Khóa</button>
        </td>
    </tr>
   <tr>
      <th scope="row">2</th>
      <td>nvb</td>
      <td>Nguyễn Văn b</td>
      <td>nvb@gmail.com</td>
      <td>Đây là tiểu sử của Nguyễn Văn B</td>
        <td>
            <button className="btn  btn-success">Mở Khóa</button>
        </td>
    </tr>
  </tbody>
</table>
        </>
    );
}
export default Users;