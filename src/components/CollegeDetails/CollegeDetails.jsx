import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const CollegeDetails = () => {
    const [college, setCollege] = useState();

    
    const { register, handleSubmit, reset } = useForm();
    const id = useLoaderData()

    useEffect(()=>{
        fetch(`http://localhost:5000/colleges/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setCollege(data)
            console.log(data)
        })

    },[id])
    console.log(college)
    const onSubmit = (data) => {
        console.log(data)
        // add item to DB
        fetch(`http://localhost:5000/admitted`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId) {
                    toast("Your item id added to DB");
                }
            });

        // Reset form after add data
        reset();
    };
    return (
        <div>
            <h3 className="text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-violet-500 font-bold my-12">{college?.collegeName}</h3>
            <div className="bg-base-200 bg-gradient-to-r from-pink-500 to-blue-500">
       
       <div className="flex flex-wrap items-center justify-center my-12 py-8">
           {/* Form side */}
           <div className="w-full p-12">
               <div className="w-full max-w-xl p-12 mx-auto p-2 bg-white shadow-xl rounded-lg">
                   <h2 className="mb-2 text-2xl font-bold text-center">Admission Form</h2>
                   <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

                       {/* Item name input field */}
                       <input
                           className="w-full px-4 py-2 mt-2 border rounded-lg form-input focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Candidate Name"
                           name="name"
                           {...register("name", { required: true, maxLength: 25 })}
                       />

                       <input
                           className="w-full px-4 py-2 mt-2 border rounded-lg form-input focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Subject"
                           name="subject"
                           {...register("subject", { required: true, maxLength: 25 })}
                       />

                       {/* Email input field */}
                       <input
                           className="w-full px-4 py-2 mt-2 border rounded-lg form-input focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Candidate Email"
                           type="email"
                           name="email"
                           {...register("email", { required: true })}
                       />

        
                       {/* Item number input field */}
                       <input
                           className="w-full px-4 py-2 mt-2 border rounded-lg form-input focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Phone Number"
                           type="number"
                           name="number"
                           {...register("number", { required: true })}
                       />


                       

                       {/* Item address name input field */}
                       <input
                           className="w-full px-4 py-2 mt-2 border rounded-lg form-input focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Address"
                           type="text"
                           name="address"
                           {...register("address", { required: true })}
                       />

                       {/* Item birth input field */}
                       <input
                           className="w-full px-4 py-2 mt-2 border rounded-lg form-input focus:outline-none focus:ring focus:border-blue-300"
                           type="date"
                           name="date"
                           {...register("date", { required: true })}
                       />

                       {/* Item image url input field */}
                       <input
                           className="w-full px-4 py-2 mt-2 border rounded-lg form-input focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Photo URL"
                           type="text"
                           {...register("img", { required: true })}
                       />

                       <small className="block text-sm text-gray-600">All fields are required</small>
                       <button
                           type="submit"
                           className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                       >
                           Submit
                       </button>
                       <ToastContainer />
                   </form>
               </div>
           </div>
       </div>

         </div>
        </div>

    );
};

export default CollegeDetails;