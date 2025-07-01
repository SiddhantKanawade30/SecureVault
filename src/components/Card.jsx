import React, { useState } from 'react';
import { Eye, EyeClosed, Copy, Pencil, Trash, Check, X } from 'lucide-react';

const Card = ({ website, username, password, onEdit, onDelete }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [editData, setEditData] = useState({
    website,
    username,
    password,
  });

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSave = () => {
    onEdit(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({ website, username, password });
  };

  return (
    <div className="bg-neutral-900 p-5 rounded-xl shadow hover:shadow-purple-600/20 transition border border-neutral-800 m-2">
     
      <div className="flex justify-between items-center mb-4">
        {isEditing ? (
          <input
            type="text"
            className="bg-neutral-800 p-1 rounded text-white w-2/3"
            value={editData.website}
            onChange={(e) => setEditData({ ...editData, website: e.target.value })}
          />
        ) : (
          <h2 className="text-lg font-semibold text-purple-400">{website}</h2>
        )}

        <div className="flex gap-2">
       
          {!isEditing && !confirmDelete && (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="hover:bg-white/10 p-1 rounded"
              >
                <Pencil size={16} className="text-gray-300" />
              </button>
              <button
                onClick={() => setConfirmDelete(true)}
                className="hover:bg-white/10 p-1 rounded"
              >
                <Trash size={16} className="text-red-400" />
              </button>
            </>
          )}

          
          {confirmDelete && (
            <>
              <button onClick={onDelete} className="hover:bg-white/10 p-1 rounded">
                <Check size={16} className="text-green-400" />
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="hover:bg-white/10 p-1 rounded"
              >
                <X size={16} className="text-gray-400" />
              </button>
            </>
          )}

          
          {isEditing && (
            <>
              <button onClick={handleSave} className="hover:bg-white/10 p-1 rounded">
                <Check size={16} className="text-green-400" />
              </button>
              <button onClick={handleCancel} className="hover:bg-white/10 p-1 rounded">
                <X size={16} className="text-gray-400" />
              </button>
            </>
          )}
        </div>
      </div>

      
      <div className="flex justify-between mb-2">
        <div>
          <span className="text-gray-400 text-sm">Username: </span>
          {isEditing ? (
            <input
              type="text"
              className="bg-neutral-800 p-1 rounded text-white"
              value={editData.username}
              onChange={(e) => setEditData({ ...editData, username: e.target.value })}
            />
          ) : (
            <span className="text-white">{username}</span>
          )}
        </div>
        {!isEditing && (
          <button
            onClick={() => copyToClipboard(username)}
            className="hover:bg-white/10 p-1 rounded"
          >
            <Copy size={16} className="text-gray-300" />
          </button>
        )}
      </div>

      
      <div className="flex justify-between items-center">
        <div>
          <span className="text-gray-400 text-sm">Password: </span>
          {isEditing ? (
            <input
              type="text"
              className="bg-neutral-800 p-1 rounded text-white"
              value={editData.password}
              onChange={(e) => setEditData({ ...editData, password: e.target.value })}
            />
          ) : (
            <span className="text-white">
              {showPassword ? password : '*'.repeat(password.length)}
            </span>
          )}
        </div>

        {!isEditing && (
          <div className="flex gap-2">
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="hover:bg-white/10 p-1 rounded"
            >
              {showPassword ? (
                <Eye size={16} className="text-gray-300" />
              ) : (
                <EyeClosed size={16} className="text-gray-300" />
              )}
            </button>
            <button
              onClick={() => copyToClipboard(password)}
              className="hover:bg-white/10 p-1 rounded"
            >
              <Copy size={16} className="text-gray-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
