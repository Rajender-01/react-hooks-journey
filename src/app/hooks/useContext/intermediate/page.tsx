"use client";
import { useAuth } from "@/src/hooks-learning/01-basic-hooks/useContext/AuthContext";

const Page = (): React.JSX.Element => {
  const { user, login, logout } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-96 bg-gray-900 rounded-lg shadow-lg p-8 text-center space-y-6">
        
        <h1 className="text-2xl font-semibold text-gray-300">
          Auth System Example
        </h1>

        {user ? (
          <>
            <h2 className="text-lg font-medium text-green-400">
              Welcome, {user.name} 👋
            </h2>
            <button
              onClick={logout}
              className="w-full bg-red-500 hover:bg-red-600 transition py-2 rounded font-medium text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h2 className="text-lg font-medium text-yellow-400">
              Please Login
            </h2>
            <button
              onClick={login}
              className="w-full bg-green-500 hover:bg-green-600 transition py-2 rounded font-medium text-black"
            >
              Login
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Page;