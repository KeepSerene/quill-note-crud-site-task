// Library imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component imports
import Header from "./components/Header";
import ProtectedRoutes from "./components/ProtectedRoutes";

// Page imports
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import NoteDetail from "./pages/NoteDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/*"
            element={
              <ProtectedRoutes>
                <Header />

                <main>
                  <Routes>
                    <Route path="notes" element={<Notes />} />
                    <Route path="add-note" element={<AddNote />} />
                    <Route path="note/:id" element={<NoteDetail />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </ProtectedRoutes>
            }
          />
        </Routes>

        <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
      </div>
    </BrowserRouter>
  );
}
