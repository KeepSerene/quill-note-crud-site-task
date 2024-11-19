// Library imports
import { Navigate } from "react-router-dom";

// Custom hook imports
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoutes({ children }) {
  const { username } = useAuth();

  if (!username) {
    return <Navigate to="/" replace />;
  }

  return children;
}
