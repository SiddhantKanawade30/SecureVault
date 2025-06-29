import { Plus, Lock, LogOut } from "lucide-react";
import React, { useState } from "react";
import { Logout } from "./Logout";
import { Create } from "./Create";
import Card from "./Card";

export const Manager = () => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [createCardOpen, setCreateCardOpen] = useState(false);

  const handleLogout = () => {
    setLogoutOpen(true);
    console.log("Logged out");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        {/* Title */}
        <div className="flex items-center gap-2">
          <Lock size={26} className="text-purple-400" />
          <h1 className="text-3xl font-semibold">Your Vault</h1>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg text-sm font-medium" onClick={() => setCreateCardOpen(true)}>
            <Plus size={18} />
            Create New
          </button>

          <Create open={createCardOpen} onClose={() => setCreateCardOpen(false)} />

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-sm font-medium"
          >
            <LogOut size={18} />
            Logout
          </button>
          <Logout open={logoutOpen} onClose={() => setLogoutOpen(false)} />
        </div>
      </div>

      {/* Password Cards Grid */}
      <div className="grid grid-cols-3">
      <Card website={"goole.in"} username={"sidd"} password={"s"} />
      <Card website={"goole.in"} username={"sidd"} password={"sidd123"} />
      <Card website={"goole.in"} username={"sidd"} password={"sidd123"} />
      </div>
    </div>
  );
};

