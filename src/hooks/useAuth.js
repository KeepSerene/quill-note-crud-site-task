// React imports
import { useState, useEffect } from "react";

// Library imports
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useAuth() {
  const [username, setUsername] = useState(
    localStorage.getItem("currentUser") || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      localStorage.setItem("currentUser", username);
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [username]);

  const login = (newUsername) => {
    setUsername(newUsername);
    localStorage.setItem("currentUser", newUsername);
    toast.success("Account created successfully!");

    setTimeout(() => {
      navigate("/notes");
    }, 100);
  };

  const logout = () => {
    if (
      window.confirm(
        "Are you sure you want to logout? This will delete all your notes."
      )
    ) {
      const userNotes = `notes_${username}`;
      localStorage.removeItem(userNotes);
      localStorage.removeItem("currentUser");

      setUsername("");
      toast.success("Logged out successfully");
      navigate("/");
    }
  };

  return { username, login, logout };
}
