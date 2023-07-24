import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error))
}
    return (
        <div className="navbar bg-slate-200">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl font-bold">EduCare</a>

    <div className="flex mx-auto gap-x-8 font-bold">
    <Link to="/">Home</Link>
    <Link to="/colleges">Colleges</Link>
    <Link to="/admission">Admission</Link>
    <Link to="mycollege">My College</Link>
  </div>

  </div>
  
  <div className="flex-none gap-2">

  <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered bg-slate-100 w-24 h-8 md:w-auto pr-10"
      />
      <div className="absolute top-0 right-0 h-full flex items-center pr-3">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      </div>
    </div>

    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li  className="justify-between"><Link to='/profile'>Profile</Link></li>
        
       
        {
          user ? <>
        <li onClick={handleLogOut}>Logout</li>
          </> : <>
    <li><Link to="/login">Login</Link></li>
          </>
        }
      </ul>
    </div>
  </div>
</div>
    );
};

export default NavBar;