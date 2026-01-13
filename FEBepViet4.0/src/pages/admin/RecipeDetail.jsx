import { useParams } from "react-router-dom";
import avatar from "../../assets/avatar.png";
function RecipeDetail()
{
    const {id}=useParams();
   return (
    <>
     <h1>Xem chi tiết công thức nấu ăn</h1>
     <div className="d-flex justify-content-center align-items-center">
             <div className="card w-75">
                <div className="card-header">
                        <h4 className="text-align-center">Xem chi tiết</h4>
                </div>
                <div className="card-body">
                          <form>
                                <div className="mb-3">
                                    <label  className="form-label">Tên món ăn</label>
                                    <input type="text" className="form-control"  disabled/>
                                </div>
                                 <div className="mb-3">
                                    <label  className="form-label">Mô tả</label>
                                   <textarea className="form-control"  disabled>

                                   </textarea>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Ảnh món ăn</label>
                                    <br/>
                                    <img src={avatar} width="100px"/>
                                
                                </div>
                               
                                <div className="mb-3">
                                    <label  className="form-label">Thành phần</label>
                                    <div className="d-flex mb-2 ">
                                     <input type="text" className="form-control"placeholder="tên thành phần"  disabled/>
                                    <input type="text" className="form-control" placeholder="định lượng"  disabled/>
                                    </div>
                                    <div className="d-flex mb-2">
                                     <input type="text" className="form-control"placeholder="tên thành phần" disabled />
                                    <input type="text" className="form-control" placeholder="định lượng"  disabled/>
                                    </div>
                                </div>
                                 <div className="mb-3">
                                    <label  className="form-label">Các bước</label>
                                    <br/>
                                        <img src={avatar} width="100px" className="mb-2"/>
                                     <input type="text" className="form-control mb-2"  disabled/>
                                   <img src={avatar} width="100px" className="mb-2"/>
                                     <input type="text" className="form-control mb-2" disabled/>
                                   
                                </div>
                            </form>
                </div>
            </div>
     </div>
  
    </>
   );
}
export default RecipeDetail;