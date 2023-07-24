import { useContext, useState } from "react";
import {
  RiProfileFill,
  RiMailFill,
  RiBuildingFill,
  RiMapPinFill,
} from "react-icons/ri";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const [name, setName] = useState("Jahangir Alam");
  const [email, setEmail] = useState("dm.jahangir06@gmail.com");
  const [address, setAddress] = useState(
    "Mymensingh, Dhaka, Bangladesh"
  );
  const [university, setUniversity] = useState(
    "Govt. Bangla College"
  );

  const {user} = useContext(AuthContext)
  console.log(user)

  const handleEditProfile = () => {
    // Implement your logic to update the profile here
    // For simplicity, let's just console.log the new values

    
    console.log("Updated Profile Info:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("University:", university);
  };

  return (
    <div className="w-full px-5">
      <div className="w-full flex flex-col md:flex-row my-9 border-slate-200 rounded-md p-4 border-2 shadow-md justify-between items-center px-10">
        <img
          className="rounded-full h-80 mb-4 md:mb-0 md:mr-6"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU"
          alt="Profile"
        />

        <div>
          <h1 className="text-center text-3xl font-bold">Profile Info</h1>

          <div className="flex gap-3 items-center my-4">
            <RiProfileFill className="text-[#007E70] text-2xl" />
            <h2 className="font-bold text-xl">Name: {user?.displayName}</h2>
          </div>
          <div className="flex gap-3 items-center my-4">
            <RiMailFill className="text-[#007E70] text-2xl" />
            <h2 className="font-bold text-xl">Email: {user?.email}</h2>
          </div>
          <div className="flex gap-3 items-center my-4">
            <RiMapPinFill className="text-[#007E70] text-2xl" />
            <h2 className="font-bold text-xl">Address: {address}</h2>
          </div>
          <div className="flex gap-3 items-center my-4">
            <RiBuildingFill className="text-[#007E70] text-2xl" />
            <h2 className="font-bold text-xl">University: {university}</h2>
          </div>
        </div>
        <button
          className="bg-[#007E70] py-2 px-4 rounded-md font-semibold text-2xl text-white my-auto"
          onClick={() => window.my_modal_3.showModal()}>
          Edit Profile
        </button>
      </div>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box w-full max-w-2xl">
          <div className="border-b-2 border-gray-300 flex justify-between pb-2">
            <h3 className="font-bold text-lg">Edit Profile</h3>
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </div>
          <div className="px-4 py-6">
            <label className="block text-xl font-semibold mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md outline-none focus:border-[#007E70]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="block text-xl font-semibold mt-4 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md outline-none focus:border-[#007E70]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block text-xl font-semibold mt-4 mb-2">
              Address
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md outline-none focus:border-[#007E70]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label className="block text-xl font-semibold mt-4 mb-2">
              University
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md outline-none focus:border-[#007E70]"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>
          <div className="px-4 py-3 bg-gray-100 text-right">
            <button
              type="button"
              className="bg-[#007E70] py-2 px-4 rounded-md font-semibold text-white"
              onClick={handleEditProfile}>
              Save Changes
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Profile;