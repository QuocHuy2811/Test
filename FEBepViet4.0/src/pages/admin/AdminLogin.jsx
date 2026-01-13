function AdminLogin()
{
    return (
        <div className="row d-flex justify-content-center align-items-center vh-100">
            <div className="col-4 ">
                <div className="card shadow">
                    <div className="card-header">
                           <h4 className="text-align-center">Đăng Nhập Quản Trị Viên</h4>
                    </div>
                    <div className="card-body">
                           <form>
  <div className="mb-3">
    <label  className="form-label">Tên tài khoản</label>
    <input type="email" className="form-control" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Mật khẩu</label>
    <input type="password" className="form-control" />
  </div>
  <button type="submit" className="btn btn-primary w-100">Đăng nhập</button>
</form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminLogin;