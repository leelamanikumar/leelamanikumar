"use client";

import { useState, useEffect } from "react";

const ADMIN_PASSWORD = "Yl@cm180"; // Change this to your preferred password

export function AdminToggle() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if admin mode is enabled in localStorage
    const adminStatus = localStorage.getItem("portfolio-admin");
    setIsAdmin(adminStatus === "true");
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem("portfolio-admin", "true");
      setShowPasswordPrompt(false);
      setPassword("");
    } else {
      alert("Incorrect password!");
      setPassword("");
    }
  };

  const exitAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem("portfolio-admin");
  };

  const openPasswordPrompt = () => {
    setShowPasswordPrompt(true);
  };

  const closePasswordPrompt = () => {
    setShowPasswordPrompt(false);
    setPassword("");
  };

  return (
    <>
      <button
        onClick={isAdmin ? exitAdmin : openPasswordPrompt}
        className={`fixed bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all ${
          isAdmin 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        title={isAdmin ? "Exit Admin Mode" : "Enter Admin Mode"}
      >
        {isAdmin ? "✕" : "⚙"}
      </button>

      {showPasswordPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Enter Admin Password</h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                autoFocus
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Enter
                </button>
                <button
                  type="button"
                  onClick={closePasswordPrompt}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
