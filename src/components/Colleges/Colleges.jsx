import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useColleges from "../../hooks/useColleges";


const Colleges = () => {
    const [colleges] = useColleges();
    return (
        <div>
           <h3 className="text-3xl text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-violet-500 font-bold">All College</h3>
           <div className="grid md:grid-cols-3 gap-4 my-8">
        {
            colleges.map(college => <div className="card w-full bg-base-100 shadow-xl" key={college._id}>
            <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <figure><img className=" transition duration-300 ease-in-out hover:scale-110 h-48 w-80"  src={college.collegeImg} alt="class" /></figure>
            </div>
            <div className="card-body">
              <h2 className="card-title">
                {college.collegeName}
              </h2>
            
              <p><FontAwesomeIcon icon={faCalendarDays} /> {college.admissionDate}</p>
              <hr />
              <p>Rating: {college.rating}</p>
              <hr />
              <p>Number Of Research: {college.numOfResearch}</p> <br />
              <button className="btn btn-primary w-full"><Link to="">Details</Link></button>
            </div>
          </div>)
        }
       </div>
        </div>
    );
};

export default Colleges;