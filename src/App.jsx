// Library imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component imports
import Header from "./components/Header";

// Page imports
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import NoteDetail from "./pages/NoteDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />

        <main>
          <Routes>
            <Route path="/notes" element={<Notes />} />
            <Route path="/add-note" element={<AddNote />} />
            <Route path="/note/:id" element={<NoteDetail />} />
            <Route path="*" element={<Navigate to="/notes" replace />} />
          </Routes>
        </main>

        <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
      </div>
    </BrowserRouter>
  );
}
