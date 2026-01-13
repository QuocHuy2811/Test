import React, { useState } from 'react';

export default function AccountPage() {
  const [showInfo, setShowInfo] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  // Giả lập user
  const user = {
    fullName: 'Nguyễn Văn A',
    email: 'yeuamthuc@gmail.com',
  };
  // State cho đổi mật khẩu
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logoutOtherDevices, setLogoutOtherDevices] = useState(true);

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Xử lý đổi mật khẩu ở đây
    alert("Đổi mật khẩu thành công!");
    setShowChangePassword(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
      {!showChangePassword && (
        <div className="d-flex justify-content-center align-items-center">
          <h4>Thông tin tài khoản</h4>
        </div>
      )}
      {showInfo && !showChangePassword && (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Họ và tên</label>
            <div className="px-3 py-2 rounded w-full bg-gray-100">{user.fullName}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <div className="px-3 py-2 rounded w-full bg-gray-100">{user.email}</div>
          </div>
          <div className='flex justify-end'>
            <button className='btn btn-warning '>Chỉnh sửa</button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Mật khẩu</label>
            <button
              className="px-3 py-2 rounded w-full bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition"
              onClick={() => setShowChangePassword(true)}
            >
              Đổi mật khẩu
            </button>
          </div>
        </div>
      )}
      {showChangePassword && (
        <form onSubmit={handleChangePassword} className="animate-fadeIn">
          <h2 className="text-2xl font-bold mb-2">Đổi mật khẩu</h2>
          <input
            type="password"
            className="w-full mb-3 px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Mật khẩu hiện tại"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full mb-3 px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Mật khẩu mới"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full mb-3 px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Nhập lại mật khẩu mới"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        
          <div className="flex gap-3 justify-center mt-4 ">
            <button
              type="button"
              className="px-5 py-2 rounded bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
              onClick={() => setShowChangePassword(false)}
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded bg-blue-400 text-white font-semibold disabled:opacity-60 "
              disabled={!currentPassword || !newPassword || !confirmPassword}
            >
              Đổi mật khẩu
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
