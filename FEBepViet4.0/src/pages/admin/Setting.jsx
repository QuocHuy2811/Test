function Setting()
{
    return (
        <>
         <h1 className="mt-2"> Quản lý cài đặt</h1>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card w-75">
                <div className="card-header">
                        <h4 className="text-center">Cài đặt</h4>
                </div>
                <div className="card-body">
                          <form>
                                <div className="mb-3">
                                    <label  className="form-label">Logo</label>
                                    <input type="file" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Nội dung footer</label>
                                    <input type="text" className="form-control" />
                                </div>
                                
                                <button type="submit" className="btn btn-primary w-100">Lưu</button>
                            </form>
                </div>
            </div>
        </div>
        </>
       
    );
}
export default Setting;