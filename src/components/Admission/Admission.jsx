import useColleges from "../../hooks/useColleges";


const Admission = () => {
    const [colleges] = useColleges();
    return (
        <div className="my-8">
            <h3 className="text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-violet-500 font-bold my-12">Admission</h3>

             {
                colleges.map(college => <div className="grid grid-cols-1 divide-y w-full border p-2" key={college._id}>
                <div className="card card-side bg-white cursor-pointer  ps-4">
                <figure><img className="h-24 w-24 p-4 border" src={college.collegeImg} alt="College" /></figure>
                    <div className="card-body">
                        <p className="hover:underline text-blue-500 font-bold">{college.collegeName}</p>
                       

                    </div>
                </div>

            </div>)
             }
            
        </div>
    );
};

export default Admission;