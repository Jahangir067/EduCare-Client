import { useEffect, useState } from "react";


const MyCollege = () => {


    const [mycollege, setMycollege] = useState([])
    useEffect( () => {
      fetch("http://localhost:5000/admitted").then(res => {
        return res.json();
      }).then((resp) => {
        console.log(resp);
        setMycollege(resp)
      }).catch((err) => {
        console.log(err.message)
      })
    }, [])

    return (
        <div className='container my-8'>
  <div className="border rounded-lg shadow-lg">

    <div className="p-3 bg-gray-800 rounded-t-lg">
    <h3 className="text-center font-bold text-3xl text-white">My College</h3>
    </div>

    <div className="p-4">
      <table className='table-auto w-full'>
        <thead className='bg-gray-800 text-white text-center'>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Number</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Review</th>
          </tr>
        </thead>

        <tbody>
          {
            mycollege.map((college) => (
              <tr key={college._id}>
                <td className="border px-4 py-2">{college.name}</td>
                <td className="border px-4 py-2">{college.subject}</td>
                <td className="border px-4 py-2">{college.email}</td>
                <td className="border px-4 py-2">{college.number}</td>
                <td className="border px-4 py-2">{college.address}</td>
                <td className="border px-4 py-2">
                 
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                        Review</button>
                 
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
</div>

    );
};

export default MyCollege;