import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="text-4xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-4 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/nearme-project")}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg 
                   transition-colors duration-200 font-medium"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
