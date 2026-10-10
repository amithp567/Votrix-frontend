import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Logout } from '../api/api';

const OfficialNavbar = ({ className = '' }) => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
        
        const refresh = localStorage.getItem('refresh')
        await Logout({refresh});

        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        localStorage.removeItem('role');
        localStorage.removeItem('username');

        toast.success('Logged out successfully');
        setShowLogoutModal(false);
        navigate('/', { replace: true });
    } catch (error) {
      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        'Logout failed. Please try again.';

      toast.error(message);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <div
        className={`${className} h-20 flex items-center justify-around
        bg-gray-50 border-b border-gray-200`}
      >
        <div className="text-4xl font-black text-blue-800">
          Votrix
        </div>

        <div className="flex gap-10 items-center">
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Help</Link>

          <button
            type="button"
            onClick={() => setShowLogoutModal(true)}
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Logout
          </button>
        </div>
      </div>

      {showLogoutModal && (
        <div className="
        fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900">
              Confirm Logout
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Are you sure you want to log out of your account?
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                disabled={isLoggingOut}
                className="
                rounded-lg border border-gray-300 w-20 py-2 
                text-gray-700 hover:bg-gray-100 disabled:opacity-50">
                No
              </button>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="
                rounded-lg bg-red-600 w-20 py-2 text-white 
                hover:bg-red-700 disabled:opacity-50">
                {isLoggingOut ? 'Processing...' : 'Yes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfficialNavbar;