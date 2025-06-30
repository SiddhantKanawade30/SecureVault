import { Plus, Lock, LogOut } from "lucide-react";
import React, { useState ,useEffect } from "react";
import { Logout } from "./Logout";    
import { Create } from "./Create";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Manager = () => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [createCardOpen, setCreateCardOpen] = useState(false);
  const [credentials, setCredentials] = useState([]);
const navigate = useNavigate()

const token = localStorage.getItem("token");
if (!token) {
  navigate("/")
}

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/");
  }
}, [navigate]);

  const handleLogout = () => {
    setLogoutOpen(true);
    console.log("Logged out");
  };

  const handleDelete = async({credentialId}) => {

    try{
    await axios.delete("http://localhost:3000/delete",{
        headers:{
        token : localStorage.getItem("token")
      },
      data: { credentialId }
    })
    setCredentials(credentials.filter((cred) => cred._id !== credentialId));
  }catch (err) {
      console.error("Delete error:", err);
    }
  }

  const handleEdit = async(updatedData)=>{
        const { _id: credentialId, website: newURL, username: newUsername, password: newPassword } = updatedData;

        try{
    await axios.put("http://localhost:3000/edit",{
      credentialId,
      url : newURL,
      userName : newUsername,
      password : newPassword
    },{
      headers : {
        token : localStorage.getItem("token")
      }
    })

    setCredentials((prev) =>
        prev.map((cred) =>
          cred._id === credentialId
            ? { ...cred, url: newURL, userName: newUsername, password: newPassword }
            : cred
        )
      );

  }catch (err) {
      console.error("Edit error:", err);
    }
  }

  useEffect(()=>{
    const fetchVault = async()=>{
      try{
        const res = await axios.get("http://localhost:3000/vault",{
          headers : {
            token : localStorage.getItem("token")
          }
        })
        setCredentials(res.data.content)

      }catch(e){
        console.error("Error fetching vault:", e);
      }
    }

    fetchVault()
  },[])




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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {credentials.map((cred) => (
          <div>
          <Card
            key={cred._id}
            website={cred.url}
            username={cred.userName}
            password={cred.password}
            onDelete={() => handleDelete({ credentialId: cred._id })}
            onEdit={(updated) => handleEdit({ ...updated, _id: cred._id })}
          />
          </div>
        ))}
      </div>
    </div>
  );
};
