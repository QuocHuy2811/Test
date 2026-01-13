import { useParams } from "react-router-dom";
import avatar from "../../assets/avatar.png";
function PostDetail()
{
    const {id}=useParams();
   return (
    <>
     <h1>Xem chi tiết bài đăng</h1>
     <div className="d-flex justify-content-center align-items-center vh-100">
             <div className="card w-75">
                <div className="card-header">
                        <h4 className="text-align-center">Xem chi tiết</h4>
                </div>
                <div className="card-body">
                          
                                <div className="mb-3">
                                    <label  className="form-label">Tiêu đề</label>
                                    <input type="text" className="form-control" disabled/>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Ảnh bìa</label>
                                    <br/>
                                    <img src={avatar} width="100px"/>
                                
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Nội dung</label>
                                   <textarea className="form-control"  disabled>

                                   </textarea>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Người đăng</label>
                                    <input type="text" className="form-control"  disabled/>
                                </div>
                            
    
                </div>
            </div>
     </div>
  
    </>
   );
}
export default PostDetail;