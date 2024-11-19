// React imports
import { useState } from "react";

// Custom hook imports
import { useAuth } from "../hooks/useAuth";

// Library imports
import { FaFeather } from "react-icons/fa";

export default function Login() {
  const [newUsername, setNewUsername] = useState("");
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUsername.trim()) {
      login(newUsername.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <section className="flex flex-col items-center">
          <FaFeather className="text-blue-500 text-5xl mb-4" />

          <h1 className="text-4xl font-bold text-white mb-2">QuillNote</h1>

          <p className="text-gray-400 text-xl">
            Capture your thoughts, unleash your creativity
          </p>
        </section>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <input
              type="text"
              required
              value={newUsername}
              onChange={(event) => setNewUsername(event.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Choose a username"
              aria-label="Username"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
