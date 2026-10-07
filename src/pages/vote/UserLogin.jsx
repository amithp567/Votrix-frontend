import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const navigate = useNavigate()
    return (
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
      
      <form className="max-w-md w-full bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          User Login
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Fingerprint
          </label>
          <input
            type="file" accept='image/*'
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-xs"
          />
        </div>

        <button
          type="button"
          onClick={() => navigate('/voting')}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Forgot password?
          <span className="text-blue-600 hover:underline ml-1 cursor-pointer">
            Click here
          </span> 
        </p>
      </form>

    </div>
    )
}

export default UserLogin

