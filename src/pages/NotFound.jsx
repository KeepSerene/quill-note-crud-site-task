import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <article className="max-w-md w-full text-center space-y-8">
        <h1 className="text-6xl font-bold text-blue-500">404</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Page Not Found</h2>

          <p className="text-gray-400">
            Oops! The page you're looking for doesn't exist.
          </p>
        </section>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
          aria-label="Go back to previous page"
        >
          <FaArrowLeft /> Go Back
        </button>
      </article>
    </div>
  );
}
